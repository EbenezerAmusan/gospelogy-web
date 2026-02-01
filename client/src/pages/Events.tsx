import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useEvents } from "@/hooks/use-events";
import { format } from "date-fns";
import { MapPin, Calendar as CalendarIcon, Clock, Church } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

function getNextOccurrence(dayOfWeek: number, hour: number, minute: number): Date {
  const now = new Date();
  const result = new Date(now);
  
  result.setHours(hour, minute, 0, 0);
  
  const currentDay = now.getDay();
  let daysUntil = dayOfWeek - currentDay;
  
  if (daysUntil < 0 || (daysUntil === 0 && now >= result)) {
    daysUntil += 7;
  }
  
  result.setDate(result.getDate() + daysUntil);
  return result;
}

function calculateTimeLeft(targetDate: Date): { days: number; hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

function RecurringEventCountdown({ 
  title, 
  dayOfWeek, 
  hour, 
  minute, 
  icon: Icon,
  bgColor
}: { 
  title: string; 
  dayOfWeek: number; 
  hour: number; 
  minute: number;
  icon: typeof Clock;
  bgColor: string;
}) {
  const [targetDate, setTargetDate] = useState(() => getNextOccurrence(dayOfWeek, hour, minute));
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      let currentTarget = targetDate;
      
      if (now >= currentTarget) {
        currentTarget = getNextOccurrence(dayOfWeek, hour, minute);
        setTargetDate(currentTarget);
      }
      
      setTimeLeft(calculateTimeLeft(currentTarget));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, dayOfWeek, hour, minute]);

  const timeDisplay = format(new Date().setHours(hour, minute), "h:mm a");
  const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${bgColor} rounded-2xl p-6 text-white shadow-xl`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white/20 p-3 rounded-full">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-display">{title}</h3>
          <p className="text-white/80 text-sm">Every {dayName} at {timeDisplay}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2 mb-4">
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-xs text-white/70 uppercase tracking-wider">Days</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs text-white/70 uppercase tracking-wider">Hours</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs text-white/70 uppercase tracking-wider">Mins</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs text-white/70 uppercase tracking-wider">Secs</div>
        </div>
      </div>
      
      <div className="flex items-center text-white/80 text-sm">
        <MapPin size={14} className="mr-2" />
        Church Auditorium
      </div>
    </motion.div>
  );
}

export default function Events() {
  const { data: events, isLoading } = useEvents();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Upcoming Events" 
        subtitle="Mark your calendar and join us for these special gatherings."
        backgroundImage={churchHero}
      />

      {/* Recurring Services Countdown */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Weekly Services</span>
            <h2 className="text-2xl font-display font-bold mt-2">Join Us This Week</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <RecurringEventCountdown
              title="Sunday Service"
              dayOfWeek={0}
              hour={9}
              minute={30}
              icon={Church}
              bgColor="bg-primary"
            />
            <RecurringEventCountdown
              title="Bible Studies"
              dayOfWeek={3}
              hour={17}
              minute={0}
              icon={Clock}
              bgColor="bg-secondary"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {isLoading ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse h-40 bg-gray-200 rounded-2xl w-full"></div>
              ))}
            </div>
          ) : events && events.length > 0 ? (
            <div className="space-y-8 max-w-4xl mx-auto">
              {events.map((event, idx) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-gray-100 group"
                >
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    <img 
                      src={event.imageUrl || "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  
                  <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                      <div className="flex items-center text-secondary font-bold">
                        <CalendarIcon size={18} className="mr-2" />
                        {format(new Date(event.date), "EEEE, MMMM d, yyyy • h:mm a")}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-gray-500 text-sm font-medium">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        {event.location}
                      </div>
                      
                      <button className="px-6 py-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-900 font-bold rounded-lg transition-colors text-sm">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow max-w-3xl mx-auto">
              <CalendarIcon size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">No upcoming events</h3>
              <p className="text-gray-500">Check back soon for updates to our calendar.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { format } from "date-fns";
import { MapPin, Clock, Church } from "lucide-react";
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
          <h3 className="text-xl font-bold font-display text-white">{title}</h3>
          <p className="text-white/80 text-sm">Every {dayName} at {timeDisplay}</p>
          <p className="text-white/90 text-sm font-medium mt-1">Next: {format(targetDate, "MMMM d, yyyy")}</p>
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

      <Footer />
    </div>
  );
}

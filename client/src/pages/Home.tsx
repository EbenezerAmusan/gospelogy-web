import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEvents } from "@/hooks/use-events";
import { useSermons } from "@/hooks/use-sermons";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, PlayCircle, MapPin } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect } from "react";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="inline-block text-secondary text-2xl md:text-3xl font-serif italic tracking-wide mb-6 drop-shadow-sm">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Home() {
  const { data: events, isLoading: eventsLoading } = useEvents();
  const { data: sermons, isLoading: sermonsLoading } = useSermons();

  // Get the latest sermon
  const latestSermon = sermons?.[0];
  // Get upcoming events (limit to 3)
  const upcomingEvents = events?.slice(0, 3);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10 mix-blend-multiply" />
          {/* Worship hands raised in church concert setting */}
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Worship Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container-custom text-center md:text-left pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <TypewriterText text="Welcome to Eden" />
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight drop-shadow-xl">
              Experience God's <br />
              <span className="text-secondary">Unfailing Love</span>
            </h1>
            <p className="text-xl text-blue-50 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
              Join us at Christ Gospel Church (Gospelogy) as we grow in faith, serve with passion, and build a community of believers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="px-8 py-4 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all text-center">
                Plan a Visit
              </Link>
              <Link href="/sermons" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all text-center">
                Watch Sermons
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-32 relative z-30">
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Join Us Sunday</h3>
              <p className="mb-6 text-blue-100">Experience powerful worship and life-changing messages every week.</p>
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="text-secondary" />
                <span className="font-semibold text-xl">9:00 AM</span>
              </div>
              <p className="text-sm text-blue-200">Main Service</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Midweek Service</h3>
              <p className="mb-6 text-gray-600">Recharge your spirit with in-depth Bible study and prayer.</p>
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="text-primary" />
                <span className="font-semibold text-xl text-gray-800">Wednesday</span>
              </div>
              <p className="text-sm text-gray-500">6:00 PM - Bible Study</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">New Here?</h3>
              <p className="mb-6 text-gray-600">We'd love to meet you! Plan your visit and let us welcome you home.</p>
              <Link href="/contact" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById('map-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
                Get Directions <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermon Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Grow in Faith</span>
              <h2 className="text-4xl font-display font-bold mt-2 text-gray-900">Latest Sermon</h2>
            </div>
            <Link href="/sermons" className="hidden md:flex items-center text-primary font-bold hover:text-primary/80 transition-colors mt-4 md:mt-0">
              View All Messages <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {sermonsLoading ? (
            <div className="animate-pulse h-96 bg-gray-200 rounded-2xl w-full"></div>
          ) : latestSermon ? (
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer h-[500px]">
              {/* Preacher speaking at podium */}
              <img 
                src={latestSermon.imageUrl || "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"} 
                alt={latestSermon.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex items-center space-x-2 text-secondary mb-3 font-semibold">
                  <PlayCircle className="fill-secondary text-black" />
                  <span>Latest Message</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display leading-tight">{latestSermon.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center text-gray-300 space-y-2 md:space-y-0 md:space-x-6">
                  <span>{latestSermon.preacher}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{format(new Date(latestSermon.date), "MMMM d, yyyy")}</span>
                  {latestSermon.series && (
                    <>
                      <span className="hidden md:inline">•</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide">
                        {latestSermon.series}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-500">No sermons available yet.</p>
            </div>
          )}
          
          <div className="mt-8 md:hidden text-center">
            <Link href="/sermons" className="inline-flex items-center text-primary font-bold">
              View All Messages <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">Community</span>
            <h2 className="text-4xl font-display font-bold mt-2 text-gray-900">Upcoming Events</h2>
            <p className="mt-4 text-gray-600 text-lg">
              There's always something happening at Eden. Join us for fellowship, learning, and fun.
            </p>
          </div>

          {eventsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-80"></div>
              ))}
            </div>
          ) : upcomingEvents && upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
                  <div className="h-48 overflow-hidden relative">
                    {/* Community gathering */}
                    <img 
                      src={event.imageUrl || "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-2 text-center min-w-[60px] shadow-sm">
                      <span className="block text-xs font-bold text-gray-500 uppercase">{format(new Date(event.date), "MMM")}</span>
                      <span className="block text-2xl font-bold text-primary leading-none">{format(new Date(event.date), "dd")}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display group-hover:text-primary transition-colors">{event.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin size={14} className="mr-1" />
                      {event.location}
                    </div>
                    <p className="text-gray-600 line-clamp-2 mb-4 text-sm">{event.description}</p>
                    <Link href="/events" className="text-secondary font-bold text-sm uppercase tracking-wide hover:text-secondary/80">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No upcoming events scheduled.</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link href="/events" className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
              See Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Quote/Mission Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-tight">
            "We are dedicated to spreading the Gospel, transforming lives, and building a community of faith."
          </h2>
          <div className="mt-10">
            <Link href="/about" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Our Mission & Vision
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

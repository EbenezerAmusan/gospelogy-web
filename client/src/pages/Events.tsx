import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useEvents } from "@/hooks/use-events";
import { format } from "date-fns";
import { MapPin, Calendar as CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Events() {
  const { data: events, isLoading } = useEvents();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Upcoming Events" 
        subtitle="Mark your calendar and join us for these special gatherings."
        // Calendar/planner/events
        backgroundImage="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

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

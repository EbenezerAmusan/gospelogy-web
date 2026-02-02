import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useMinistries } from "@/hooks/use-ministries";
import { Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

const ministryImages: Record<string, string> = {
  "Children's Ministry": "/children-ministry.jpeg",
  "Music Ministry": "/music-ministry.jpeg",
};

export default function Ministries() {
  const { data: ministries, isLoading } = useMinistries();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Our Ministries" 
        subtitle="Find your place to serve, connect, and grow within the GFC family."
        backgroundImage={churchHero}
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="animate-pulse flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-2xl"></div>
                  <div className="w-full md:w-1/2 space-y-4 pt-4">
                    <div className="h-8 bg-gray-200 w-3/4 rounded"></div>
                    <div className="h-4 bg-gray-200 w-full rounded"></div>
                    <div className="h-4 bg-gray-200 w-full rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : ministries && ministries.length > 0 ? (
            <div className="space-y-24">
              {ministries.map((ministry, idx) => (
                <motion.div 
                  key={ministry.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                      <img 
                        src={ministryImages[ministry.name] || ministry.imageUrl || `https://images.unsplash.com/photo-${idx % 2 === 0 ? '1511632765486-a01980e01a18' : '1543269865-cbf427effbad'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`} 
                        alt={ministry.name}
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-display font-bold text-primary mb-6">{ministry.name}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {ministry.description}
                    </p>
                    
                    <div className="space-y-4">
                      {ministry.leader && (
                        <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                            <Users className="text-secondary" size={20} />
                          </div>
                          <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Led By</span>
                            <span className="font-semibold">{ministry.leader}</span>
                          </div>
                        </div>
                      )}
                      
                      {ministry.meetingTime && (
                        <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                            <Clock className="text-secondary" size={20} />
                          </div>
                          <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Meeting Time</span>
                            <span className="font-semibold">{ministry.meetingTime}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <button className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all">
                      Join this Ministry
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">Ministry information coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

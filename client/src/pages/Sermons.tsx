import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useSermons } from "@/hooks/use-sermons";
import { useState } from "react";
import { format } from "date-fns";
import { Play, Calendar, User, Search } from "lucide-react";
import { motion } from "framer-motion";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

export default function Sermons() {
  const { data: sermons, isLoading } = useSermons();
  const [search, setSearch] = useState("");

  const filteredSermons = sermons?.filter(sermon => 
    sermon.title.toLowerCase().includes(search.toLowerCase()) || 
    sermon.preacher.toLowerCase().includes(search.toLowerCase()) ||
    (sermon.series && sermon.series.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Sermons" 
        subtitle="Dive into the Word of God with our archive of life-changing messages."
        backgroundImage={churchHero}
      />

      <section className="py-16 bg-gray-50 flex-1">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="mb-12 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, preacher, or series..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-2xl mb-4"></div>
                  <div className="bg-gray-200 h-6 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
                </div>
              ))}
            </div>
          ) : filteredSermons && filteredSermons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSermons.map((sermon, idx) => (
                <motion.div
                  key={sermon.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={sermon.imageUrl || "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"} 
                      alt={sermon.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                        <Play className="ml-1 text-white fill-current" size={28} />
                      </div>
                    </div>
                    {sermon.series && (
                      <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {sermon.series}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {format(new Date(sermon.date), "MMM d, yyyy")}
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {sermon.preacher}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-display line-clamp-2 group-hover:text-primary transition-colors">
                      {sermon.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {sermon.description || "Join us for this powerful message as we explore God's word together."}
                    </p>
                    
                    <a 
                      href="https://www.youtube.com/@GospelogyEden1/featured" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-bold text-sm uppercase tracking-wide hover:underline"
                    >
                      Watch Message
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No sermons found</h3>
              <p className="text-gray-500">Try adjusting your search terms to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Play, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@GospelogyEden1/featured";

export default function Sermons() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* YouTube Channel Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-red-600 to-red-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 mb-6">
                    <Play className="ml-1 text-white fill-current" size={40} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Watch Our Sermons</h2>
                  <p className="text-white/80 text-lg">Subscribe to our YouTube channel for weekly messages</p>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Experience powerful, Spirit-filled messages from our pastors. Our sermons are designed to 
                  strengthen your faith, provide practical guidance for daily living, and draw you closer 
                  to God. New messages are uploaded every week!
                </p>
                
                <a
                  href={YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold text-lg rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  data-testid="link-youtube-channel"
                >
                  <Play className="fill-current" size={24} />
                  Visit Our YouTube Channel
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            {/* What to Expect */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Bible Teaching</h3>
                <p className="text-gray-600 text-sm">Deep, expository teaching that brings Scripture to life</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Prayer & Worship</h3>
                <p className="text-gray-600 text-sm">Powerful moments of prayer and Spirit-led worship</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Life Application</h3>
                <p className="text-gray-600 text-sm">Practical wisdom for everyday Christian living</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

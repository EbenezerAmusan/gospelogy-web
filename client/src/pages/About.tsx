import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="About Us" 
        subtitle="Discover our history, mission, and the heart behind God's Family Church."
        backgroundImage={churchHero}
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl font-display font-bold mt-2 mb-6 text-gray-900">Welcome to Gospelogy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                God's Family Church, affectionately known as Gospelogy or Eden, is more than just a building—it's a family. Located in the heart of Agege, Lagos, we are a vibrant community dedicated to experiencing God's presence and sharing His love with our world.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey began with a vision to create a sanctuary where people from all walks of life could find hope, healing, and purpose in Christ. Today, we continue to stand as a beacon of light, empowering believers to live out their faith authentically.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Biblical Teaching",
                  "Passionate Worship",
                  "Community Outreach",
                  "Youth Empowerment",
                  "Family Focus",
                  "Global Missions"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="bg-green-100 p-1 rounded-full">
                      <Check size={16} className="text-green-600" />
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              {/* Pastor preaching or warm community moment */}
              <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Community" 
                className="relative z-10 rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600">These principles guide everything we do at God's Family Church.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:border-primary/20 transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-2xl font-bold">V</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-xl text-gray-600 italic leading-relaxed">
                To make ready a people prepared for the Lord
              </p>
              <p className="mt-4 text-primary font-bold">— Luke 1:17</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:border-secondary/20 transition-all group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary transition-all">
                <span className="text-2xl font-bold">M</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6 text-gray-900">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                To impact you with gospelogy for a disciplined lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

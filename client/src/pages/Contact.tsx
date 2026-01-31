import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    // Reset form would go here
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello."
        backgroundImage={churchHero}
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Get in Touch</span>
              <h2 className="text-4xl font-display font-bold mt-2 mb-8 text-gray-900">We're Here for You</h2>
              <p className="text-lg text-gray-600 mb-10">
                Whether you're looking for a church home, need prayer, or have questions about our ministries, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/5 p-4 rounded-xl mr-6 text-primary">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-900">Visit Us</h4>
                    <p className="text-gray-600 leading-relaxed max-w-xs">
                      No 31, Nelson Cole Avenue, beside Sterling Bank, off Iju Road, Agege, Lagos State, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/5 p-4 rounded-xl mr-6 text-primary">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-900">Call Us</h4>
                    <p className="text-gray-600">
                      +234 800 123 4567<br />
                      +234 800 765 4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/5 p-4 rounded-xl mr-6 text-primary">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-900">Email Us</h4>
                    <p className="text-gray-600">
                      info@gospelogy.org<br />
                      prayer@gospelogy.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-4 rounded-xl mr-6 text-primary">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-gray-900">Office Hours</h4>
                    <p className="text-gray-600">
                      Tue - Fri: 9:00 AM - 5:00 PM<br />
                      Sat: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold font-display mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Prayer Request</option>
                    <option>Membership</option>
                    <option>Pastoral Care</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="h-96 w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.037976866299!2d3.3197!3d6.6423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzgnMzIuMyJOIDPCsDE5JzEwLjkiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Church Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}

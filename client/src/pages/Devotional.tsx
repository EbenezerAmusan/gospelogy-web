import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Download, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

const devotionals = [
  { day: 1, month: "January", title: "Feast on the Word", scripture: "Matthew 4:4", imageUrl: "/devotional-jan-1.jpeg", isImageOnly: true },
  { day: 2, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-2.jpeg", isImageOnly: true },
  { day: 3, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-3.jpeg", isImageOnly: true },
  { day: 4, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-4.jpeg", isImageOnly: true },
  { day: 5, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-5.jpeg", isImageOnly: true },
  { day: 6, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-6.jpeg", isImageOnly: true },
  { day: 7, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-7.jpeg", isImageOnly: true },
  { day: 8, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-8.jpeg", isImageOnly: true },
  { day: 9, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-9.jpeg", isImageOnly: true },
  { day: 10, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-10.jpeg", isImageOnly: true },
  { day: 11, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-11.jpeg", isImageOnly: true },
  { day: 12, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-12.jpeg", isImageOnly: true },
  { day: 13, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-13.jpeg", isImageOnly: true },
  { day: 14, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-14.jpeg", isImageOnly: true },
  { day: 15, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-15.jpeg", isImageOnly: true },
  { day: 16, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-16.jpeg", isImageOnly: true },
  { day: 17, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-17.jpeg", isImageOnly: true },
  { day: 18, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-18.jpeg", isImageOnly: true },
  { day: 19, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-19.jpeg", isImageOnly: true },
  { day: 20, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-20.jpeg", isImageOnly: true },
  { day: 21, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-21.jpeg", isImageOnly: true },
  { day: 22, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-22.jpeg", isImageOnly: true },
  { day: 23, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-23.jpeg", isImageOnly: true },
  { day: 24, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-24.jpeg", isImageOnly: true },
  { day: 25, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-25.jpeg", isImageOnly: true },
  { day: 26, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-26.jpeg", isImageOnly: true },
  { day: 27, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-27.jpeg", isImageOnly: true },
  { day: 28, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-28.jpeg", isImageOnly: true },
  { day: 29, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-29.jpeg", isImageOnly: true },
  { day: 30, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-30.jpeg", isImageOnly: true },
  { day: 31, month: "January", title: "Daily Bread", scripture: "Daily Word", imageUrl: "/devotional-jan-31.jpeg", isImageOnly: true },
];

export default function Devotional() {
  const [currentDay, setCurrentDay] = useState(0);
  const devotional = devotionals[currentDay];

  const nextDay = () => {
    if (currentDay < devotionals.length - 1) {
      setCurrentDay(currentDay + 1);
    }
  };

  const prevDay = () => {
    if (currentDay > 0) {
      setCurrentDay(currentDay - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Daily Devotional" 
        subtitle="Start each day with God's Word. Read, reflect, and grow in your faith journey."
        backgroundImage={churchHero}
      />

      <section className="py-16 bg-gray-50 flex-1">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Day Navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevDay}
                disabled={currentDay === 0}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                data-testid="button-prev-day"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Previous Day</span>
              </button>
              
              <div className="flex items-center gap-2 text-primary font-bold">
                <Calendar size={20} />
                <span>Day {devotional.day} - {devotional.month}</span>
              </div>
              
              <button
                onClick={nextDay}
                disabled={currentDay === devotionals.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                data-testid="button-next-day"
              >
                <span className="hidden sm:inline">Next Day</span>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Day Selector Pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {devotionals.map((d, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentDay(idx)}
                  className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                    currentDay === idx 
                      ? 'bg-primary text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                  data-testid={`button-day-${d.day}`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            {/* Devotional Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Title Section */}
                <div className="bg-primary text-white p-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-secondary mb-2">
                    <BookOpen size={20} />
                    <span className="font-semibold uppercase tracking-wider text-sm">Daily Bread</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{devotional.title}</h2>
                  <p className="text-blue-200 font-medium">{devotional.scripture}</p>
                </div>

                {devotional.isImageOnly ? (
                  <div className="p-4 md:p-8">
                    <img 
                      src={devotional.imageUrl} 
                      alt={`${devotional.month} ${devotional.day} - ${devotional.title}`}
                      className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="p-8 md:p-12 space-y-8">
                    {/* Scripture Verse */}
                    <div className="bg-secondary/10 p-6 rounded-2xl border-l-4 border-secondary">
                      <p className="text-xl text-gray-800 italic leading-relaxed">"{devotional.verse}"</p>
                      <p className="mt-3 text-primary font-bold text-sm">— {devotional.scripture}</p>
                    </div>

                    {/* Reflection */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">1</span>
                        Reflection
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{devotional.reflection}</p>
                    </div>

                    {/* Prayer */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">2</span>
                        Prayer
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg italic">{devotional.prayer}</p>
                    </div>

                    {/* Action Point */}
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">3</span>
                        Today's Action
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{devotional.action}</p>
                    </div>
                  </div>
                )}

                {/* Download Section */}
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <p className="text-gray-600 text-sm mb-4 text-center">Want to read offline? Choose a download option:</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {devotional.imageUrl && (
                      <a 
                        href={devotional.imageUrl} 
                        download={`GFC-Eden-Devotional-${devotional.month}-${devotional.day}.jpeg`}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all" 
                        data-testid="button-download-day"
                      >
                        <Download size={18} />
                        Download This Day
                      </a>
                    )}
                    <a 
                      href="/devotional-guide-2026.pdf" 
                      download="GFC-Eden-Devotional-Guide-2026.pdf"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all" 
                      data-testid="button-download-pdf"
                    >
                      <Download size={18} />
                      Download Full Guide
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

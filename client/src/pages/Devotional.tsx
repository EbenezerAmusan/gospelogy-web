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
  { day: 1, month: "February", title: "Choose Right", scripture: "1 John 1:1", imageUrl: "/devotional-feb-1.jpeg", isImageOnly: true },
  { day: 2, month: "February", title: "The Acceptable Prayer", scripture: "Matthew 6:5", imageUrl: "/devotional-feb-2.jpeg", isImageOnly: true },
  { day: 3, month: "February", title: "Take Charge", scripture: "Matthew 26:41", imageUrl: "/devotional-feb-3.jpeg", isImageOnly: true },
  { day: 4, month: "February", title: "A Call to Pray", scripture: "2 Chronicles 7:14", imageUrl: "/devotional-feb-4.jpeg", isImageOnly: true },
  { day: 5, month: "February", title: "Be a Channel", scripture: "Matthew 6:3-4", imageUrl: "/devotional-feb-5.jpeg", isImageOnly: true },
  { day: 6, month: "February", title: "Giving is Living", scripture: "Proverbs 18:16", imageUrl: "/devotional-feb-6.jpeg", isImageOnly: true },
  { day: 7, month: "February", title: "Forgive", scripture: "Matthew 6:14-15", imageUrl: "/devotional-feb-7.jpeg", isImageOnly: true },
  { day: 8, month: "February", title: "Whose Voice?", scripture: "John 8:47", imageUrl: "/devotional-feb-8.jpeg", isImageOnly: true },
  { day: 9, month: "February", title: "Fellowship with the Father", scripture: "Matthew 6:16", imageUrl: "/devotional-feb-9.jpeg", isImageOnly: true },
  { day: 10, month: "February", title: "Right Kind of Fasting", scripture: "Matthew 9:15", imageUrl: "/devotional-feb-10.jpeg", isImageOnly: true },
  { day: 11, month: "February", title: "When You Fast", scripture: "Matthew 6:17-18", imageUrl: "/devotional-feb-11.jpeg", isImageOnly: true },
  { day: 12, month: "February", title: "Right Investment", scripture: "Matthew 6:19-20", imageUrl: "/devotional-feb-12.jpeg", isImageOnly: true },
  { day: 13, month: "February", title: "Seek to Know", scripture: "Romans 10:2", imageUrl: "/devotional-feb-13.jpeg", isImageOnly: true },
  { day: 14, month: "February", title: "Be Accountable", scripture: "Proverbs 4:5", imageUrl: "/devotional-feb-14.jpeg", isImageOnly: true },
  { day: 15, month: "February", title: "Hear Wordly", scripture: "Luke 8:18", imageUrl: "/devotional-feb-15.jpeg", isImageOnly: true },
  { day: 16, month: "February", title: "Choose Right", scripture: "Matthew 6:24", imageUrl: "/devotional-feb-16.jpeg", isImageOnly: true },
  { day: 17, month: "February", title: "Who is in Charge?", scripture: "Romans 6:16", imageUrl: "/devotional-feb-17.jpeg", isImageOnly: true },
  { day: 18, month: "February", title: "Set Free", scripture: "Romans 6:14", imageUrl: "/devotional-feb-18.jpeg", isImageOnly: true },
  { day: 19, month: "February", title: "Trust Him", scripture: "Matthew 6:25", imageUrl: "/devotional-feb-19.jpeg", isImageOnly: true },
  { day: 20, month: "February", title: "He Cares", scripture: "Matthew 6:31-32", imageUrl: "/devotional-feb-20.jpeg", isImageOnly: true },
];

function getTodayDevotionalIndex(): number {
  const today = new Date();
  const currentMonth = today.getMonth(); // 0 = January
  const currentDayOfMonth = today.getDate();
  
  // Find the devotional that matches today's date
  const index = devotionals.findIndex(d => {
    const monthIndex = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"].indexOf(d.month);
    return monthIndex === currentMonth && d.day === currentDayOfMonth;
  });
  
  // If today's devotional exists, return its index; otherwise return 0
  return index >= 0 ? index : 0;
}

export default function Devotional() {
  const [currentDay, setCurrentDay] = useState(() => getTodayDevotionalIndex());
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
                      href="https://drive.google.com/file/d/1yh7m4nL1uT7S18Rg_8a_sZqqYxs-yAyr/view?usp=drive_link" 
                      target="_blank"
                      rel="noopener noreferrer"
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

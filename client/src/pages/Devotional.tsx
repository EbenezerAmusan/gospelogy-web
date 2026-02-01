import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Download, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

const devotionals = [
  {
    day: 1,
    month: "January",
    title: "A New Beginning",
    scripture: "Lamentations 3:22-23",
    verse: "Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.",
    reflection: "As we begin this new year, let us remember that God's mercies are new every morning. Each day is a fresh start, an opportunity to draw closer to Him and experience His unfailing love. No matter what yesterday brought, today offers the promise of His renewed compassion and grace.",
    prayer: "Heavenly Father, thank You for Your new mercies each day. Help me to embrace this fresh start with faith and hope. Guide my steps throughout this year as I seek to grow closer to You. In Jesus' name, Amen.",
    action: "Write down three things you are grateful for as you start this new year."
  },
  {
    day: 2,
    month: "January", 
    title: "Walking in Faith",
    scripture: "Hebrews 11:1",
    verse: "Now faith is confidence in what we hope for and assurance about what we do not see.",
    reflection: "Faith is the foundation of our relationship with God. It's not about seeing before believing, but believing before seeing. When we walk by faith, we trust that God's promises are true even when circumstances seem impossible.",
    prayer: "Lord, strengthen my faith today. Help me to trust in Your promises even when I cannot see the way ahead. Give me the courage to step out in faith, knowing that You are always with me. Amen.",
    action: "Identify one area of your life where you need to exercise more faith and commit it to God."
  },
  {
    day: 3,
    month: "January",
    title: "The Power of Prayer",
    scripture: "Philippians 4:6-7",
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection: "Prayer is our direct line of communication with God. It's not just about asking for things; it's about building a relationship with our Heavenly Father. When we bring everything to God in prayer, He promises to give us peace that surpasses all understanding.",
    prayer: "Father, teach me to pray without ceasing. Help me to bring every concern, every joy, and every need to You. Thank You for the privilege of prayer and for the peace that comes from spending time in Your presence. Amen.",
    action: "Set aside 10 minutes today for uninterrupted prayer time with God."
  },
  {
    day: 4,
    month: "January",
    title: "Love One Another",
    scripture: "John 13:34-35",
    verse: "A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.",
    reflection: "Jesus gave us a new commandment - to love one another as He loved us. This kind of love is sacrificial, unconditional, and transformative. It's not just a feeling but an action that reflects Christ's love to the world around us.",
    prayer: "Lord Jesus, fill my heart with Your love so that I may love others as You have loved me. Help me to show kindness, patience, and compassion to everyone I encounter today. May my love be a testimony of Your grace. Amen.",
    action: "Reach out to someone today with an act of kindness - a call, a message, or a helping hand."
  },
  {
    day: 5,
    month: "January",
    title: "Trusting God's Plan",
    scripture: "Jeremiah 29:11",
    verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reflection: "God has a beautiful plan for your life. Even when things don't make sense, even when the path seems unclear, know that He is working all things together for your good. His plans are always better than our own.",
    prayer: "Heavenly Father, I surrender my plans to You. Help me to trust in Your perfect plan for my life, even when I don't understand. Give me patience to wait on Your timing and faith to follow where You lead. Amen.",
    action: "Write down a situation you're struggling to trust God with and pray over it specifically."
  },
  {
    day: 6,
    month: "January",
    title: "The Joy of the Lord",
    scripture: "Nehemiah 8:10",
    verse: "Do not grieve, for the joy of the LORD is your strength.",
    reflection: "Joy is not dependent on our circumstances but on our relationship with God. The joy of the Lord is a deep, abiding sense of peace and gladness that comes from knowing Him. This joy becomes our strength in difficult times.",
    prayer: "Lord, fill me with Your joy today. Help me to find my strength in You rather than in my circumstances. May Your joy overflow from my life and bring hope to others around me. Amen.",
    action: "List five things about God that bring you joy and thank Him for each one."
  },
  {
    day: 7,
    month: "January",
    title: "Rest in His Presence",
    scripture: "Matthew 11:28-30",
    verse: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
    reflection: "In a world that never stops, Jesus invites us to rest. This is not just physical rest but soul rest - the kind of peace that comes from laying our burdens at His feet and trusting Him completely.",
    prayer: "Jesus, I come to You today weary and burdened. I lay all my concerns at Your feet and accept Your invitation to rest. Teach me to find peace in Your presence and strength in Your gentleness. Amen.",
    action: "Take time today to be still before God - no requests, just being in His presence."
  }
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

                {/* Download Section */}
                <div className="border-t border-gray-100 p-6 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-gray-600 text-sm">Want to read offline? Download the full devotional guide.</p>
                  <a 
                    href="/devotional-guide-2026.pdf" 
                    download="GFC-Eden-Devotional-Guide-2026.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all" 
                    data-testid="button-download-pdf"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
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

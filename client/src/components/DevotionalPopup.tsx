import { useState, useEffect } from "react";
import { X, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function DevotionalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('devotionalPopupSeen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('devotionalPopupSeen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                  data-testid="button-close-popup"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-secondary font-bold text-sm uppercase tracking-wider">Daily Bread</p>
                    <h3 className="text-2xl font-display font-bold">Daily Devotional</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Start each day with God's Word! Our daily devotional guide is now available online. 
                  Read inspiring messages, reflect on Scripture, and grow in your faith journey.
                </p>
                
                <div className="bg-secondary/10 p-4 rounded-xl mb-6">
                  <p className="text-sm text-gray-700 italic">
                    "Thy word is a lamp unto my feet, and a light unto my path."
                  </p>
                  <p className="text-xs text-primary font-bold mt-2">— Psalm 119:105</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/devotional" 
                    onClick={handleClose}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
                    data-testid="link-read-devotional"
                  >
                    Read Today's Devotional
                    <ArrowRight size={18} />
                  </Link>
                  <button 
                    onClick={handleClose}
                    className="px-6 py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-all"
                    data-testid="button-maybe-later"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

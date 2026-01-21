import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Cross } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logoImg from "@assets/download_1768903937083.jpg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/sermons", label: "Sermons" },
    { href: "/ministries", label: "Ministries" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white p-1 shadow-sm transition-transform group-hover:scale-105">
            <img 
              src={logoImg} 
              alt="God's Family Church Eden Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative group ${
                scrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-primary" : "bg-white"}`}></span>
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              scrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-secondary text-primary hover:bg-white hover:text-primary"
            }`}
          >
            Visit Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md ${scrolled ? "text-gray-800" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium px-4 py-3 rounded-lg ${
                    location === link.href
                      ? "bg-primary/5 text-primary"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="mt-4 text-center bg-primary text-white font-bold py-3 rounded-xl shadow-md active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Plan Your Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { Link } from "wouter";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-white">GFC</h3>
            <p className="text-blue-100 leading-relaxed">
              A place of worship, community, and spiritual growth. Join us as we journey together in faith at God's Family Church.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/sermons" className="text-blue-100 hover:text-white transition-colors">Sermons</Link></li>
              <li><Link href="/ministries" className="text-blue-100 hover:text-white transition-colors">Ministries</Link></li>
              <li><Link href="/events" className="text-blue-100 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Service Times</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex justify-between">
                <span>Sunday Service</span>
                <span className="font-semibold text-white">9:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Bible Study (Wed)</span>
                <span className="font-semibold text-white">5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Prayer Meeting (Fri)</span>
                <span className="font-semibold text-white">5:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start space-x-3">
                <MapPin className="shrink-0 mt-1 text-secondary" size={18} />
                <span>No 31, Nelson Cole Avenue, beside Sterling Bank, off Iju Road, Agege, Lagos State</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="shrink-0 text-secondary" size={18} />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="shrink-0 text-secondary" size={18} />
                <span>info@gospelogy.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
          <p>© {new Date().getFullYear()} God's Family Church (Eden). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

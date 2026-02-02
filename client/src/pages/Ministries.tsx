import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";

const ministries = [
  {
    id: 1,
    name: "Children's Ministry",
    description: "Our Children's Ministry is dedicated to nurturing the faith of our youngest members. Through engaging Bible lessons, fun activities, and a loving environment, we help children discover God's love and build a strong foundation in Christ. Every child is valued and encouraged to grow spiritually.",
    leader: "Sister Grace",
    meetingTime: "Sundays during service",
    imageUrl: "/children-ministry.jpeg"
  },
  {
    id: 2,
    name: "Music Ministry",
    description: "The Music Ministry leads our congregation in worship through song and praise. Our talented team of singers and musicians are dedicated to creating an atmosphere where the Holy Spirit can move freely. Whether through traditional hymns or contemporary worship, we aim to glorify God and inspire hearts.",
    leader: "Brother David",
    meetingTime: "Thursdays at 6:00 PM (Rehearsals)",
    imageUrl: "/music-ministry.jpeg"
  },
  {
    id: 3,
    name: "Youth Ministry",
    description: "Our Youth Ministry provides a safe and vibrant space for teenagers and young adults to explore their faith, build lasting friendships, and develop leadership skills. Through Bible studies, outreach programs, and fellowship activities, we empower the next generation to live boldly for Christ.",
    leader: "Brother Emmanuel",
    meetingTime: "Saturdays at 4:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Women's Fellowship",
    description: "The Women's Fellowship is a ministry dedicated to strengthening, encouraging, and equipping women to fulfill their God-given purpose. Through prayer meetings, Bible studies, and outreach initiatives, we support one another in our walk with Christ and make a difference in our community.",
    leader: "Deaconess Comfort",
    meetingTime: "First Saturday of every month",
    imageUrl: "https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Men's Fellowship",
    description: "The Men's Fellowship provides a brotherhood where men can grow in faith, support one another, and become the spiritual leaders God has called them to be. Through Bible studies, prayer, and community service, we strengthen families and build godly character.",
    leader: "Brother John",
    meetingTime: "Last Saturday of every month",
    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Prayer Warriors",
    description: "The Prayer Warriors ministry is the spiritual backbone of our church. We gather regularly to intercede for our church family, community, nation, and the world. Through fervent prayer, we believe mountains are moved and lives are transformed by the power of God.",
    leader: "Elder Samuel",
    meetingTime: "Wednesdays at 5:30 AM & Fridays at 10:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Ministries() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Our Ministries" 
        subtitle="Find your place to serve, connect, and grow within the GFC family."
        backgroundImage={churchHero}
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {ministries.map((ministry, idx) => (
              <motion.div 
                key={ministry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                    <img 
                      src={ministry.imageUrl} 
                      alt={ministry.name}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-display font-bold text-primary mb-6">{ministry.name}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {ministry.description}
                  </p>
                  
                  <div className="space-y-4">
                    {ministry.leader && (
                      <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                          <Users className="text-secondary" size={20} />
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Led By</span>
                          <span className="font-semibold">{ministry.leader}</span>
                        </div>
                      </div>
                    )}
                    
                    {ministry.meetingTime && (
                      <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                          <Clock className="text-secondary" size={20} />
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500 uppercase tracking-wider font-bold">Meeting Time</span>
                          <span className="font-semibold">{ministry.meetingTime}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all">
                    Join this Ministry
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

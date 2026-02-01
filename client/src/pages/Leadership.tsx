import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import churchHero from "@assets/Gemini_Generated_Image_ljvvacljvvacljvv_1769866389407.png";
import pastorAphaImg from "@assets/Pastor_Apha_1769987324425.jpg";
import pastorLilianImg from "@assets/Pastor_Mrs._Lilian_(2)_1769987324428.jpg";
import pastorCalistaImg from "@assets/Pastor_Calista_1769987324427.jpg";
import pastorBerryImg from "@assets/Pastor_Berry_1769987324426.jpg";

const leaders = [
  {
    name: "Pastor Perez Apha",
    role: "Senior Pastor",
    description: "Pastor Perez Apha is the visionary leader of God's Family Church. With a heart for discipleship and spiritual growth, he leads the congregation with wisdom, love, and a deep commitment to the Gospel.",
    image: pastorAphaImg,
    featured: true
  },
  {
    name: "Pastor Mrs. Lilian Apha",
    role: "Associate Pastor",
    description: "Pastor Mrs. Lilian Apha serves alongside the Senior Pastor, providing spiritual guidance and pastoral care to the congregation with warmth and dedication.",
    image: pastorLilianImg,
    featured: false
  },
  {
    name: "Pastor Calista",
    role: "Children's Ministry Leader",
    description: "Pastor Calista oversees the Children's Ministry, nurturing young hearts in the ways of the Lord with creativity, patience, and genuine love for the next generation.",
    image: pastorCalistaImg,
    featured: false
  },
  {
    name: "Pastor Berry",
    role: "Ministry Leader",
    description: "Pastor Berry serves faithfully in ministry, contributing to the spiritual growth and development of the church family.",
    image: pastorBerryImg,
    featured: false
  }
];

export default function Leadership() {
  const seniorPastor = leaders.find(l => l.featured);
  const otherLeaders = leaders.filter(l => !l.featured);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <PageHeader 
        title="Our Leadership" 
        subtitle="Meet the dedicated servants who guide and shepherd our church family."
        backgroundImage={churchHero}
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Senior Pastor Feature */}
          {seniorPastor && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
                <div className="lg:w-2/5">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/20 rounded-3xl" />
                    <img 
                      src={seniorPastor.image}
                      alt={seniorPastor.name}
                      className="relative z-10 w-full max-w-sm mx-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5 text-center lg:text-left">
                  <span className="text-secondary font-bold tracking-wider uppercase text-sm">Senior Pastor</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6 text-gray-900">{seniorPastor.name}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">{seniorPastor.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="mailto:pastor@gospelogy.org" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all">
                      <Mail size={18} />
                      Contact Pastor
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Other Leaders */}
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Serving Together</span>
            <h2 className="text-3xl font-display font-bold mt-2">Ministry Leaders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherLeaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="text-secondary font-bold text-sm uppercase tracking-wider">{leader.role}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 font-display">{leader.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Called to Serve?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            We believe every member has a role to play in the body of Christ. If you feel called to serve in any capacity, we'd love to hear from you.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

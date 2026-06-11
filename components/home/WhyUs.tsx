import Image from "next/image";
import Link from "next/link";

import { BsPeople } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { GrLinkTop } from "react-icons/gr";





const WhyUs = () => {
  const tabChoose = [
    {
      title: "20+ Χρόνια Εμπειρίας",
      description: "Πολυετής εμπειρία στο χώρο της μοτοσυκλέτας.",
      icon: GrLinkTop,
    },
    {
      title: "100% Εγγύηση ποιότητας",
      description: "Χρησιμοποιούμε γνήσια ανταλλακτικά καθώς και υψηλής ποιότητας aftermarket επιλογές.",
      icon: GrCertificate,
    },
    {
      title: "Σύγχρονος εξοπλισμός",
      description: "Επενδύουμε σε τεχνολογία για άψογες υπηρεσίες.",
      icon: BsTools,
    },
    {
      title: "Εμπιστοσύνη πελατών",
      description: "Η ικανοποίηση σας είναι η μεγαλύτερη ανταμοιβή μας.",
      icon: BsPeople,
    },
  ];

  return (
    <section className="w-full bg-[#292727] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-12 lg:gap-16">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5">
            <p className="text-red-600 text-lg font-bold mb-2">Γιατί εμάς</p>
            <h2 className="text-white text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
              ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Συνδυάζουμε εμπειρία, τεχνολογία και σύγχρονο εξοπλισμό για να σας προσφέρουμε το καλύτερο δυνατό αποτέλεσμα για τη μοτοσυκλέτα σας.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-sm uppercase italic hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
            >
              ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ {" >"}
            </Link>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
            {tabChoose.map((tab, index) => (
              <div
                key={index}
                className="group p-6 flex flex-col items-center bg-[#0A0A0A] rounded-xl border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-2xl"
              >
                <div className="mb-4 flex justify-center">
                  <tab.icon 
                    size={60} 
                    className="text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
                <h3 className="text-white text-lg font-bold mb-2">{tab.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tab.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
import Image from "next/image";

const OurServices = () => {
  const services = [
    {
      title: "Τακτικό Service",
      description: "Πλήρης έλεγχος και συντήρηση για μέγιστη ασφάλεια.",
      image: "/services/typicalService.png",
      icon: "/icons/typical-service.png",
    },
    {
      title: "Φρένα - Αναρτήσεις",
      description: "Έλεγχος, ρύθμιση και αναβάθμιση για κορυφαία απόδοση.",
      image: "/services/brakes-&-mounts.png",
      icon: "/icons/brakes&mounts.png",
    },
    {
      title: "Διαγνωστικός Έλεγχος",
      description: "Ηλεκτρονικός έλεγχος με σύγχρονα διαγνωστικά εργαλεία.",
      image: "/services/diagnostic.png",
      icon: "/icons/diagnostic.png",
    },
    {
      title: "Επισκευές Κινητήρα",
      description: "Εξειδικευμένες επισκευές κινητήρα κάθε τύπου.",
      image: "/services/engine.png",
      icon: "/icons/engine.png",
    },
    {
      title: "Μετατροπές - Βελτιώσεις",
      description: "Αναβαθμίσεις για καλύτερη απόδοση και εμφάνιση.",
      image: "/services/improvements.png",
      icon: "/icons/improvements.png",
    },
  ];

  return (
    <section className="w-full bg-[#292727] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-red-600 text-lg font-bold">
          Τι κάνουμε
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-black uppercase mb-8">
          Οι Υπηρεσιες μας
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/5 hover:border-red-600/40 transition-all duration-300 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              </div>

              {/* Content Container */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="mb-3 text-lg font-bold text-white flex items-center gap-4 leading-tight">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`} 
                    width={42} 
                    height={42} 
                  />
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-400 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600 group-hover:text-red-500 transition-colors flex items-center gap-2">
                    Περισσότερα <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
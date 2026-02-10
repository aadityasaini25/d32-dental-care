import Image from "next/image";

export default function ImplantTypes() {
  const implantData = [
    {
      title: "Single Implants",
      image: "/images/implant/single.png",
      description: "A Single dental implant crown is your ideal solution. It will:",
      benefits: [
        "Look and function just like a natural tooth",
        "Restore your natural chewing ability",
        "Preserve the underlying bone",
        "Save your money in the long run"
      ]
    },
    {
      title: "Multiple Implants",
      image: "/images/implant/Multiple.png",
      description: "A Multi-implant bridge. It is ideal for filling medium-sized gaps in your smile.",
      benefits: [
        "Exceptional Strength",
        "A Permanent solution",
        "Bone Preservation",
        "A life long replacement for your natural teeth"
      ]
    },
    {
      title: "Implant-Supported Dentures",
      image: "/images/implant/supported.png",
      description: "offer a stable alternative to regular dentures.",
      benefits: [
        "Snap into place over 2-4 implants",
        "Help prevent bone loss",
        "Vastly improve your chewing and confidence"
      ]
    },
    {
      title: "All-on-X Implants",
      image: "/images/implant/all_in.png",
      description: "All-on-X Dental Implants provide complete mouth rehabilitation with extra stability and support:",
      benefits: [
        "Resistant to wear and stains",
        "A permanent solution that does not need removal",
        "Custom-designed to attach securely to 4-6 implants per arch",
        "It looks natural and strong enough to eat hard food"
      ]
    }
  ];

  return (
    <section className="relative bg-[#0b1120] text-white p-4 md:p-12 lg:p-16 pb-24 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 tracking-tight">
            Advanced <span className="text-gradient-gold">Dental Implants</span>
          </h2>
          <div className="w-24 h-1 bg-[#1a897f] mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-center text-gray-400 mb-8 md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            At D32 The Dental Centre, we bring together the finest dental specialists to restore your smile with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {implantData.map((implant, index) => (
            <div
              key={index}
              className="group bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-gray-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative bg-white/5 rounded-xl mb-6 h-48 flex items-center justify-center overflow-hidden border border-slate-700/50 group-hover:border-brandTeal/30 transition-colors">
                <Image src={implant.image} alt={implant.title} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-center mb-4 text-xl text-white group-hover:text-[#1a897f] transition-colors">{implant.title}</h3>
              <p className="text-center mb-6 text-sm text-gray-400 leading-relaxed min-h-[60px]">{implant.description}</p>
              <ul className="space-y-3">
                {implant.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-brandTeal mt-0.5">✓</span>
                    <span className="font-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
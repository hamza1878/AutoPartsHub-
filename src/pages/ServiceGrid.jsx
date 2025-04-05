export default function ServiceGrid() {
  const services = [
    { 
      name: "Wide Selection of Auto Parts", 
      image: "./BMW1.png", 
      alt: "Wide Selection of Auto Parts", 
      colSpan: "md:col-span-2", 
      url: "./BMW1" 
    },
    { 
      name: "Quick Delivery Service", 
      image: "./lieghtning.jpg", 
      alt: "Quick Delivery", 
      colSpan: "md:col-span-1", 
      url: "./lieghtning" 
    },
    { 
      name: "Certified Parts", 
      image: "./auto-parts.jpg", 
      alt: "Certified Auto Parts", 
      colSpan: "md:col-span-1", 
      url: "./auto-parts" 
    },
    { 
      name: "Customer Support & Consultation", 
      image: "./Customer.jpg", 
      alt: "Customer Support", 
      colSpan: "md:col-span-2", 
      url: "./customer-support" 
    },
  ];

  return (
    <div className="bg-[#e7e7e7] py-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Services</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${service.colSpan}`}
          >
            <div 
              className="flex bg-cover bg-center rounded-2xl object-cover bg-opacity-50 shadow-lg overflow-hidden h-60 hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              <div className="w-1/2 flex items-center justify-center p-6">
                <h3 className="text-3xl font-bold text-white">{service.name}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function DressStyleGrid() {
    const categories = [
      { name: "Casual", image: "./casual.png", alt: "Casual wear", colSpan: "md:col-span-2", url: "./casual" },
      { name: "Formal", image: "./formal.png", alt: "Formal wear", colSpan: "md:col-span-1", url: "./formal" },
      { name: "Party", image: "./party.png", alt: "Party wear", colSpan: "md:col-span-1", url: "./party" },
      { name: "Gym", image: "./gym.png", alt: "Gym wear", colSpan: "md:col-span-2", url: "./gym" },
    ];
  
    return (
      <div className="bg-[#feccec] py-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">BROWSE BY DRESS STYLE</h2>
  
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${category.colSpan}`}
            >
              <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden h-60 hover:scale-105 transition-transform duration-300">
                <div className="w-1/2 h-full">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                <div className="w-1/2 flex items-center justify-center p-6">
                  <h3 className="text-3xl font-bold text-gray-800">{category.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  
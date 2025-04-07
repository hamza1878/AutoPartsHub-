import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-[#d1d1d1] w-full shadow-lg">
      <div className="max-w-8xl mx-auto px-4 pl-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
          <img src={'/logo.png'} alt="Shop.png" className='max-w-12 rounded-lg' />
            <span className="text-[#3d3d3d] text-4xl font-bold">
            
-Pièce.Express-
</span>
          </div>

          <div className="text-xl space-x-6">
  <a
    href="/shop"
    className="inline-block text-[#3d3d3d] hover:text-black "
  >
    Shop
  </a>
  <a
    href="/on-sale"
    className="inline-block text-[#3d3d3d] hover:text-black "
  >
    On Sale
  </a>
  <a
    href="/new-arrivals"
    className="inline-block text-[#3d3d3d] hover:text-black "
  >
    New Arrivals
  </a>
  <a
    href="/brands"
    className="inline-block text-[#3d3d3d] hover:text-black "
  >
    Brands
  </a>
</div>


          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 w-256 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Rechercher..."
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.742a6.5 6.5 0 1 0-1.497 1.497l4.285 4.285a1 1 0 0 0 1.415-1.415l-4.283-4.286zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import CarPartCard from "../pages/CarPartCard";
import SearchBar from "../pages/SearchBar";
import Cart from "../pages/Cart"; 
import BMW1 from "../../../public/BMW1.png"
const CarPartsShop = () => {
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
  });

  const [cart, setCart] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false);

  const parts = [
    { id: 1, name: "Plaquettes de frein", price: 49.99, category: "Freinage", brand: "Peugeot", image: BMW1},
    { id: 2, name: "Filtre à air", price: 20.99, category: "Moteur", brand: "Renault", image: BMW1},
    { id: 3, name: "Batterie 12V", price: 99.99, category: "Électricité", brand: "BMW", image: BMW1},
    { id: 4, name: "Amortisseur arrière", price: 120.0, category: "Suspension", brand: "Peugeot", image: BMW1},
  ];

  const change = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredParts = parts.filter((part) => {
    return (
      part.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.category === "" || part.category === filters.category) &&
      (filters.brand === "" || part.brand === filters.brand) &&
      (filters.price === "" || part.price <= parseFloat(filters.price))
    );
  });

  const addcart = (part) => {
    setCart([...cart, part]);
  };

  const RemoveCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="bg-[#e7e7e7] w-full h-full">
      <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
        <Navbar />
      </div>

      <div className="pt-24 px-8 pb-12 min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-6">🛒 </h1>

        <SearchBar filters={filters} onChange={change} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredParts.length > 0 ? (
            filteredParts.map((part) => (
              <CarPartCard key={part.id} part={part} onAddToCart={addcart} />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">Aucun résultat trouvé.</p>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <button
          className={`py-2 px-4 rounded ${isCartOpen ? 'bg-red-500' : 'bg-green-500'} text-white`}
          onClick={toggleCart}
        >
          🛒
        </button>

        {isCartOpen && (
          <div className="mt-4 p-4   overflow-y-auto max-h-[400px] max-w-[800px]">
            <Cart cart={cart} onRemove={RemoveCart} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPartsShop;

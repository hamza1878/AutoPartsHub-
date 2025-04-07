import React from "react";
import image from "../../../public/mark.png";
const CarPartCard = ({ part, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition">
      <img
        src={part.image}
        alt={part.name}
        className="w-40 h-40 object-cover rounded-xl mb-3"
      />
      <h2 className="text-lg font-bold">{part.name}</h2>
      <p className="text-gray-500">{part.category} • {part.brand}</p>
      <span className="text-green-600 font-semibold text-xl mb-3">
        ${part.price}
      </span>
      <button
  onClick={() => onAddToCart(part)}
  className="bg-blue-600 text-white px-4 py-2 rounded-xl opacity-1   hover:bg-blue-700 flex items-center justify-center relative"
  style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 text-black rounded-xl"></div>
 <p className="text-white text-xl"> Ajouter au Panier
 </p> 
</button>

    </div>
  );
};

export default CarPartCard;

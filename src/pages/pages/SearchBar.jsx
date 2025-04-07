import React from "react";

const SearchBar = ({ filters, onChange }) => {
  return (
    <div className=" bg-[#e7e7e7] w-full h-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <input
        type="text"
        name="name"
        placeholder="🔍 Nom de la pièce..."
        className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
        value={filters.name}
        onChange={onChange}
      />
      <select
        name="category"
        className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
        value={filters.category}
        onChange={onChange}
      >
        <option value="">Toutes les catégories</option>
        <option value="Freinage">Freinage</option>
        <option value="Moteur">Moteur</option>
        <option value="Électricité">Électricité</option>
        <option value="Suspension">Suspension</option>
      </select>
      <select
        name="brand"
        className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
        value={filters.brand}
        onChange={onChange}
      >
        <option value="">Toutes les marques</option>
        <option value="Peugeot">Peugeot</option>
        <option value="Renault">Renault</option>
        <option value="BMW">BMW</option>
      </select>
      <input
        type="number"
        name="price"
        placeholder="💰 Prix max"
        className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
        value={filters.price}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;


import React from "react";

const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Panier</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Aucun produit dans le panier.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.name} — ${item.price}</span>
                <button
                  onClick={() => onRemove(index)}
                  className="text-red-600 font-bold hover:underline"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-semibold text-xl text-right">
            Total: ${total}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";


const products = [
  {
    id: 1,
    image: '/polo.png',
    name: "Product 1",
    price: "$49.99",
    rating: 4,
    badge: "New",
  },
  {
    id: 2,
    image: '/polo.png',
    name: "Product 2",
    price: "$59.99",
    rating: 5,
    badge: "Hot",
  },
  {
    id: 3,
    image: '/polo.png',
    name: "Product 3",
    price: "$39.99",
    rating: 3,
  },
];

export default function ProductCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative group bg-white shadow-lg rounded-xl p-4">
              {product.badge && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < product.rating ? "text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <ShoppingCart size={20} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <Eye size={20} />
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
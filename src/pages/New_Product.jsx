import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";


// const products = [
//   {
//     id: 1,
//     image: '/polo.png',
//     name: "Product 1",
//     price: "$49.99",
//     rating: 4,
//     badge: "New",
//   },
//   {
//     id: 2,
//     image: '/polo.png',
//     name: "Product 2",
//     price: "$59.99",
//     rating: 5,
//     badge: "Hot",
//   },
//   {
//     id: 3,
//     image: '/polo.png',
//     name: "Product 3",
//     price: "$39.99",
//     rating: 3,
//   },
// ];
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    badge: "New",

    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    badge: "New",

    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    name: 'Basic Tee',
    badge: "New",

    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    badge: "New",

    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  
 
  
]
export default function NewProductCarousel() {
  return (
        <div className="  bg-[#feccec]  ">
     <div className="flex pt-6 justify-center">
  <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
    New Arrivals
  </h2>
</div>

          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                   {product.badge && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.badge}
                </span>
              )}
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all">
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
              ))}
             
            </div>
            <div className="flex py-12 justify-center">
              <button className="justify-center w-32  border-4 border-[#feccec]  rounded-xl shadow-md hover:scale-150 transition-transform duration-700 " >
              <p className="text-2xl bg-[#feccec] shadow-xl ">View All</p>
              </button>

              </div>
          </div>
        
        </div>
      )
    }
    

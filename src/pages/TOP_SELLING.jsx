const products = [
  {
    id: 1,
    name: 'SpeedTrack',
    href: '#',
    badge: "New",

    imageSrc: '/SpeedTrack.png',
    imageAlt: "SpeedTrack.",
    price: '$35',
    desc: 'SpeedTrack GPS Tracker – Tracker GPS pour véhicules',
  },
  {
    id: 2,
    name: 'diagnostic',
    href: '#',
    badge: "New",

    imageSrc: 'diagnostic.png',
    imageAlt: "diagnostic tool DriveSafe OBD2 Scanner.",
    price: '$120',
    desc: 'diagnostic tool DriveSafe OBD2 Scanner',
  },
  {
    id: 3,
    name: 'CoolFlow',
    badge: "New",

    href: '#',
    imageSrc: 'CoolFlow.png',
    imageAlt: "CoolFlow Radiator – Radiateur haute performance pour refroidissement optimal.",
    price: '$35',
    desc: 'CoolFlow Radiator – Radiateur haute performance pour refroidissement optimal',
  },
  ]
  
  export default function TOP_SELLING() {
    return (
      <div className="bg-[#e7e7e7]">
        <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
         
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
          TOP SELLING  </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-32">
            {products.map((product) => (
              <div key={product.id} className="group relative">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
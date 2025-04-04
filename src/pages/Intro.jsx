import React from "react";
const Intro = () => {
  return (
    <div className="bg-[#feccec] w-full h-full shadow-lg flex items-center  ">
      <section className=" p-32 w-2/3 space-y-6">
        <h1 className="text-6xl font-serif">
          {" "}
          FIND CLOTHES THAT MATCHES YOUR STYLE GIVE
        </h1>
        <h1>
          Your style is a reflection of your personality. To find clothes that
          truly suit you, explore different inspirations, understand your
          preferences, and choose pieces that make you feel confident and
          comfortable. Let your wardrobe express who you are!
        </h1>
        <div className=" flex items-center text-centre">
          {" "}
          <button className="py-8 left-32 bg-[#ffa8df] p-2 w-48 rounded-[40%] hover:outline-none hover:ring-2 hover:ring-[#fe68c3] ">
            GET START
          </button>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-600">INTERNATIONAL BRANDS</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              + 200
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-600">HIGH-QUALITY PRODICTS</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              +2000
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-600">HAPPY CUSTOMER</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              3000
            </dd>
          </div>
        </dl>
      </section>
      <nav className="p-2 ">
        <img src='/img1.png' alt="Shop.png" className="pl-24  rounded-lg" />
      </nav>
    </div>
  );
};

export default Intro;

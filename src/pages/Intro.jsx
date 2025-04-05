import React from "react";
const Intro = () => {
  return (
    <div className="bg-[#e7e7e7] w-full h-full shadow-lg flex items-center  ">
      <section className=" p-32 w-2/3 space-y-6">
        <h1 className="text-6xl font-serif">
          {" "}
          Find Mechanical Parts That Match Your Needs


        </h1>
        <h1>
        Your equipment's performance is a reflection of the quality of its parts. To find the right mechanical parts for your machinery, explore different models, understand your specifications, and choose components that ensure efficiency and durability. Let your machinery perform at its best with parts that suit your needs!
        </h1>
        <div className=" flex items-center text-centre">
          {" "}
          {/* <button className="py-8 left-32 bg-[#ffa8df] p-2 w-48 rounded-[40%] hover:outline-none hover:ring-2 hover:ring-[#fe68c3] ">
            GET START
          </button> */}
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
      <nav className="pr-6 ">
        <img src='/find.png' alt="find.png" className="pl-24  rounded-2xl" />
      </nav>
    </div>
  );
};

export default Intro;

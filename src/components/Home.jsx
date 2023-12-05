import banner from "../assets/banner.png";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className=" bg-neutralSilver">
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex items-center">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
          className=" w-full mx-auto"
        >
          <div className=" my-28 md:my-8 py12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" className=" w-80" />
            </div>
            {/* hero text */}
            <div className="md:w1/2">
              <h1 className=" text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className=" text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className=" text-neutralGray text-base mb-8">
                Where to grow your business as a phootegrapher: site or social
                media?
              </p>
              <button
                className=" bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray
          "
              >
                Register
              </button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" className=" w-80" />
            </div>
            {/* hero text */}
            <div className="md:w1/2">
              <h1 className=" text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className=" text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className=" text-neutralGray text-base mb-8">
                Where to grow your business as a phootegrapher: site or social
                media?
              </p>
              <button
                className=" bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray
          "
              >
                Register
              </button>
            </div>
          </div>
          <div className=" my-28 md:my-8 py12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner} alt="" className=" w-80" />
            </div>
            {/* hero text */}
            <div className="md:w1/2">
              <h1 className=" text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className=" text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className=" text-neutralGray text-base mb-8">
                Where to grow your business as a phootegrapher: site or social
                media?
              </p>
              <button
                className=" bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray
          "
              >
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
////////////////////////////////////////////////////////////////////////

// 'use client';

// import { Carousel } from 'flowbite-react';

// function Component() {
//   return (
//     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
//         <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//           Slide 1
//         </div>
//         <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//           Slide 2
//         </div>
//         <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
//           Slide 3
//         </div>
//       </Carousel>
//     </div>
//   );
// }

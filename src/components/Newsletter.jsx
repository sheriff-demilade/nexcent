import React from "react";

const Newsletter = () => {
  return (
    <div
      id="newsletter"
      className=" px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 mt-28"
    >
      <div className=" flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-4xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className=" flex items-center justify-center gap-8">
            <button
              className=" bg-brandPrimary flex gap-3 items-center text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray
          "
            >
              Get a demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="none"
                className="h-4 w-4"
              >
                <path
                  d="M4.02324 3.24222L5.12263 2.14283C5.25301 2.01245 5.25301 1.80106 5.12263 1.67068L4.02324 0.571289M5.02484 1.90676L0.350708 1.90676"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

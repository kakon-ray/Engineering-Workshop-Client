import React from "react";

const HomePageBanner = () => {
  return (
    <section class="overflow-hidden">
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://themebing.com/wp/sayara/wp-content/uploads/2020/05/banner-2.jpg')",
          height: "500px",
        }}
      >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-3xl md:text-3xl xl:text-4xl font-bold tracking-tight mb-12 uppercase">
                The best offer on the market <br />
                <span>for your business</span>
              </h1>
              <a
                class="inline-block px-7 py-2 mr-1.5 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-accent hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                class="inline-block px-7 py-3 border-2 border-transparent bg-transparent text-white font-medium text-sm leading-snug uppercase rounded-full focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10"
        style={{
          height: "50px",
          transform: "scale(2)",
          transformOrigin: "top center; color: #fff",
        }}
      >
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HomePageBanner;

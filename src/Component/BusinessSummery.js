import React from "react";
import Slide from "react-reveal/Slide";

const BusinessSummery = () => {
  return (
    <div>
      <section className="mb-32 text-gray-800 text-center md:text-left mx-4">
        <div className="block rounded-lg bg-white">
          <div className="flex flex-wrap items-center">
            <Slide bottom>
              <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12 p-6">
                <img
                  src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/banner-2.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
            </Slide>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <ol className="border-l-2 border-blue-600">
                <Slide bottom>
                  <li>
                    <div className="flex flex-start items-center">
                      <div className="bg-primary w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                      <h4 className="text-gray-800 font-semibold text-xl -mt-2 uppercase">
                        Served 100+ customers
                      </h4>
                    </div>
                    <div className="ml-6 mb-6 pb-6">
                      <a
                        href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                      >
                        4 February, 2022
                      </a>
                      <p className="text-gray-700 mt-2 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <button
                        type="button"
                        className="inline-block px-4 py-1.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Read more
                      </button>
                    </div>
                  </li>
                </Slide>
                <Slide bottom>
                  <li>
                    <div className="flex flex-start items-center">
                      <div className="bg-primary w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                      <h4 className="text-gray-800 font-semibold text-xl -mt-2 uppercase">
                        120M+ Annual revenue
                      </h4>
                    </div>
                    <div className="ml-6 mb-6 pb-6">
                      <a
                        href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                      >
                        12 January, 2022
                      </a>
                      <p className="text-gray-700 mt-2 mb-4">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt.
                      </p>
                      <button
                        type="button"
                        className="inline-block px-4 py-1.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Read more
                      </button>
                    </div>
                  </li>
                </Slide>
                <Slide bottom>
                  <li>
                    <div className="flex flex-start items-center">
                      <div className="bg-primary w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
                      <h4 className="text-gray-800 font-semibold text-xl -mt-2 uppercase">
                        33K+ Reviews, 50+ tools
                      </h4>
                    </div>
                    <div className="ml-6 mb-6 pb-6">
                      <a
                        href="#!"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm"
                      >
                        27 December, 2021
                      </a>
                      <p className="text-gray-700 mt-2 mb-4">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio.
                      </p>
                      <button
                        type="button"
                        className="inline-block px-4 py-1.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Read more
                      </button>
                    </div>
                  </li>
                </Slide>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSummery;

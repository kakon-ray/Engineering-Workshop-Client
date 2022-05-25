/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import hospital from "../images/Hospital.png";
import logika from "../images/logika.png";
import Engineering from "../images/engineering-workshop.png";

const Portfolio = () => {
  return (
    <div>
      <section class="mb-12 text-gray-800 text-center lg:text-left">
        <div class="block rounded-lg shadow-lg bg-white">
          <div class="flex flex-wrap items-center">
            <div class="block w-full lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
              <img
                src="https://z-p3-scontent.fdac12-1.fna.fbcdn.net/v/t1.6435-9/124489889_369962447570149_4781988956737706303_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rqgUbiQIXHMAX8RtpOG&tn=5xY3u7MNz5WSBxqF&_nc_ht=z-p3-scontent.fdac12-1.fna&oh=00_AT8aKcSG6t71zCqnBzYuGD8eIP9Xdd79RmtKJn3LX7EObw&oe=62B4C2D9"
                alt="Trendy Pants and Shoes"
                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="text-3xl font-bold mb-4 text-blue-600 display-5">
                  Kakon Ray
                </h2>
                <p class="text-accent text-lg pb-2">thisiskakonray@gmail.com</p>
                <p class="text-accent text-lg pb-2">
                  Student Computer Science and Engineering at Northern
                  University
                </p>
                <p class="text-accent text-lg pb-2">
                  Hello I am Kakon Ray. I am Fullstuck Web Developer. I have
                  good knowladge Computer Programming that JavaScript and C
                  programm.
                </p>

                <div class="grid lg:gap-x-12 md:grid-cols-3 pt-6">
                  <div class="mb-12 md:mb-0">
                    <h2 class="text-3xl font-bold text-blue-600 mb-4">90%</h2>
                    <h5 class="text-lg font-medium text-gray-500 mb-0">
                      Front End
                    </h5>
                  </div>

                  <div class="">
                    <h2 class="text-3xl font-bold text-blue-600 mb-4">50%</h2>
                    <h5 class="text-lg font-medium text-gray-500 mb-0">
                      Back End
                    </h5>
                  </div>
                  <div class="">
                    <h2 class="text-3xl font-bold text-blue-600 mb-4">95%</h2>
                    <h5 class="text-lg font-medium text-gray-500 mb-0">
                      Web Design
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-12 text-gray-800 text-center lg:text-left">
        <h2 class="text-3xl font-bold pt-12 text-center">My Project</h2>

        <div class="grid lg:grid-cols-3 gap-x-6 p-8">
          <div class="mb-12 lg:mb-0 shadow-md p-8">
            <div
              class="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={hospital} class="w-full" />
              <a href="#!">
                <div
                  class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>
            <h5 class="text-lg font-bold mb-3">Khulna Hospital</h5>
            <a href="https://hospital-kakon-ray.netlify.app/" target="_blank">
              <div class="mb-3 text-primary font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                  />
                </svg>
                Live Link
              </div>
            </a>
            <p class="text-gray-500">
              This is a React Templet.This project Create to used HTML, CSS,
              Bootstrap, React js and state management to used context.
            </p>
          </div>

          <div class="mb-12 lg:mb-0 shadow-md p-8">
            <div
              class="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={logika} class="w-full" />
              <a href="#!">
                <div
                  class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>

            <h5 class="text-lg font-bold mb-3">Logika Warehouse</h5>
            <a href="https://logika-warehouse.web.app/" target="_blank">
              <div class="mb-3 text-purpleColor font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
                  />
                </svg>
                Live Link
              </div>
            </a>
            <p class="text-gray-500">
              This is a Fulstuck Project.This project create to use HTML, CSS,
              Tailwind CSS, React Js Node js express js and MongoDB.
            </p>
          </div>

          <div class="mb-0 shadow-md p-8">
            <div
              class="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={Engineering} class="w-full" />
              <a href="#!">
                <div
                  class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                ></div>
              </a>
            </div>

            <h5 class="text-lg font-bold mb-3">Engineering Workshop</h5>
            <a
              href="https://engineering-workshop-a0bd0.web.app/"
              target="_blank"
            >
              <div class="mb-3 text-tahitiColor font-medium text-sm flex items-center justify-center lg:justify-start">
                <svg
                  class="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                  />
                </svg>
                Live Link
              </div>
            </a>
            <p class="text-gray-500">
              This is a Fulstuck Project.This project create to use HTML, CSS,
              Tailwind CSS, React Js Node js express js and MongoDB.
            </p>
          </div>
        </div>
      </section>

      <div className="pb-12 mx-40">
        <h1 className="text-center text-4xl font-bold text-tahitiColor pb-4">
          My Skill
        </h1>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Javascript 70%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            HTML 95%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            CSS 80%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Bootstrap 90%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Tailwind 80%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            SASS 80%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Responsive Web Design 100%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            React Js 70%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Next.js 70%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Git 50%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Front-End Development 50%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Node Js 30%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Express Js 30%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Mongo Db 30%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Heroku 30%
          </div>
        </div>
        <div class="w-full bg-accent my-4 py-3 text-metalColor font-bold">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            Full-Stack Development 50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

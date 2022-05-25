import React from "react";

const Blog = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                How will you improve the performance of a React Application?
              </h5>
              <p class="text-gray-700 text-base mb-4">
                React pre-optimization techniques Before optimizing a React
                application, we must understand how React updates its UI and how
                to measure an app performance. This makes it easy to solve any
                React performance problems. start by reviewing how the React UI
                updates.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                What are the different ways to manage a state in a React
                application?
              </h5>
              <p class="text-gray-700 text-base mb-4">
                State management can be done in many ways at React. For example,
                state management can be done through useState hook. State
                management can be done within Context Api. State management can
                be done through React Query.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                How does prototypical inheritance work?
              </h5>
              <p class="text-gray-700 text-base mb-4">
                When we try to access a property of an object, the property is
                not only searched in the object itself. It's also searched in
                the prototype of the object, in the prototype of the prototype,
                and so on until a property is found that matches the name or the
                end of the prototype chain is reached. If the property or method
                is not found anywhere in the prototype chain, only then will
                JavaScript return undefined. Every object in JavaScript has an
                internal property called Prototype .
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Why you do not set products = [...] instead,
              </h5>
              <p class="text-gray-700 text-base mb-4">
                [products, setProducts] = useState ([]) Here the value given in
                useState will be considered as initial value. For this useState
                ([]) we set the impetus array because when we load the data we
                will load it as array. And if we set products = [...] then it
                will be fixed and there will be various problems while changing
                our status.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Search Implementation
              </h5>
              <p class="text-gray-700 text-base mb-4">
                First we will run a loop in an array then we will convert each
                element into product.name lowercase letters then we will include
                that array inside the element and see if it is -1 or we will
                copy the ones that are not in another array. And this is search
                result.
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-accent text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

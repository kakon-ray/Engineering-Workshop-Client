import React from "react";
import Slide from "react-reveal/Slide";
const Blog = () => {
  return (
    <div className="py-8">
      <Slide bottom>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  How will you improve the performance of a React Application?
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  React pre-optimization techniques Before optimizing a React
                  application, we must understand how React updates its UI and
                  how to measure an app performance. This makes it easy to solve
                  any React performance problems. start by reviewing how the
                  React UI updates.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  What are the different ways to manage a state in a React
                  application?
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  State management can be done in many ways at React. For
                  example, state management can be done through useState hook.
                  State management can be done within Context Api. State
                  management can be done through React Query.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-5">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
              <a href="#!">
                <img
                  className="rounded-t-lg"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  How does prototypical inheritance work?
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  When we try to access a property of an object, the property is
                  not only searched in the object itself. It's also searched in
                  the prototype of the object, in the prototype of the
                  prototype, and so on until a property is found that matches
                  the name or the end of the prototype chain is reached. If the
                  property or method is not found anywhere in the prototype
                  chain, only then will JavaScript return undefined. Every
                  object in JavaScript has an internal property called Prototype
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PageBanner from "../Component/PageBanner";
import auth from "../firebase.init";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PurchesPage = () => {
  const [currentUser] = useAuthState(auth);
  const { id } = useParams();
  const [product, setMyProduct] = useState({});
  const [desibleButton, setDesibleButton] = useState(false);
  const [inputQuantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`https://lit-thicket-98954.herokuapp.com/product/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyProduct(data));
  }, []);

  useEffect(() => {
    if (inputQuantity > 100 && inputQuantity < product.quantity) {
      setDesibleButton(false);
    }
  }, [inputQuantity]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const message = event.target.message.value;
    const quantity = event.target.quantity.value;

    if (quantity < 100 || quantity > product.quantity) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: `You do not get product less then 100 and more then ${product.quantity}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setDesibleButton(true);
      return;
    }

    const purchesValue = {
      name: currentUser?.displayName,
      email: currentUser?.email,
      productName: product?.productName,
      price: product?.price,
      phone,
      address,
      message,
      img: product?.img,
      quantity,
    };

    fetch("https://lit-thicket-98954.herokuapp.com/purches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchesValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Purchese Completed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <PageBanner page="Parches" />
      <div className="my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-white">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img src={product.img} alt="" />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {product.productName}
                </h5>
                <p class="text-gray-700  font-bold text-lg">
                  Price One Item:
                  {product.price}$
                </p>
                <p class="text-gray-700  mb-2 font-bold text-lg">
                  Total Product : {product.quantity}
                </p>
                <p class="text-gray-700 text-base mb-4">{product.desc}</p>
              </div>
            </div>
          </div>
          <div className="block p-6 rounded-lg shadow-lg bg-white ">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-6">
                <input
                  type="text"
                  value={currentUser.displayName}
                  disabled
                  className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    
                     border
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                  id="exampleInput7"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  value={currentUser.email}
                  disabled
                  className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                    
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white  focus:outline-none"
                  id="exampleInput8"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  disabled
                  value={product?.productName}
                  className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    
                     border
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                  id="exampleInput7"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  value={`$${product?.price}`}
                  disabled
                  className="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    
                     border
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                  id="exampleInput7"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="address"
                  className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        
                        border
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                  id="exampleInput7"
                  placeholder="Address"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  name="phone"
                  className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        
                       border
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                  id="exampleInput7"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  defaultValue="100"
                  name="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        
                       border
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:border-primary focus:bg-white  focus:outline-0"
                  id="exampleInput7"
                  placeholder="quantity"
                />
              </div>

              <div className="form-group mb-6">
                <textarea
                  name="message"
                  className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                    
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white  focus:outline-none
                    "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={desibleButton && "disabled"}
                data-mdb-ripple="true"
                data-mdb-ripple-color="danger"
                className={`
                          w-full
                          px-6
                          py-2.5
                          bg-primary
                          text-white
                          font-medium
                          text-xs
                          leading-tight
                          uppercase
                        
                          shadow-md
                          hover:bg-blue-700 hover:shadow-lg
                          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                          active:bg-blue-800 active:shadow-lg
                          transition
                          duration-150
                          ease-in-out
                          ${desibleButton ? "bg-grayColor" : "bg-primary"}
                          `}
              >
                Purches
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchesPage;

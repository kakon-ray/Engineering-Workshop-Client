import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://lit-thicket-98954.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const homepageProduct = product.slice(-6).reverse();

  return (
    <div className="my-24 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {homepageProduct?.map((item) => {
          return <Product key={item._id} item={item}></Product>;
        })}
      </div>
    </div>
  );
};

export default Products;

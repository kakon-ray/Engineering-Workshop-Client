import React from "react";
import Product from "./Product";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Products = () => {
  const {
    isLoading,
    error,
    data: product,
    refetch,
  } = useQuery("product", () =>
    fetch(`https://lit-thicket-98954.herokuapp.com/product`).then((res) =>
      res.json()
    )
  );

  return (
    <div className="my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {product?.map((item) => {
          return <Product key={item._id} item={item}></Product>;
        })}
      </div>
    </div>
  );
};

export default Products;

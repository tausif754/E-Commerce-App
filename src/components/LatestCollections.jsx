import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Titles from "./Titles";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);

  // console.log(products);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Titles text1={"LATEST"} text2={"COLLECTIONS"} />
      </div>
    </div>
  );
};

export default LatestCollections;

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  return <div>LatestCollections</div>;
};

export default LatestCollections;

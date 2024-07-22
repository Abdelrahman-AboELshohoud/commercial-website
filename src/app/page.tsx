"use client";

import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import { useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "../hooks/useWixClient";
const HomePage = () => {
  const wixClient = useWixClient();
  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res.items);
    };
    getProducts();
  }, [wixClient]);
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <Categories />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;

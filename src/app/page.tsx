import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
// import { useWixClient } from "../hooks/useWixClient";
import { wixClientServer } from "../lib/useClientServer";
const HomePage = async () => {
  // const wixClient = useWixClient();
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res.items);
  //   };
  //   getProducts();
  // }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={"loading"}>
          <Categories
          // categoryId={process.env.FEATURED_CATEGORY_ID!}
          // limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
};

export default HomePage;

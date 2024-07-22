import Image from "next/image";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import { wixClientServer } from "@/lib/useClientServer";
import { Suspense } from "react";

export default async function Page({ searchParams }: { searchParams: any }) {
  const wixClient = wixClientServer();
  const cat = (await wixClient).collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  // console.log((await cat).collection, "qqqqqqqq");
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-f text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      <h1 className="text-xl font-semibold mt-12">Shoes For You!</h1>

      <Suspense fallback={"loading..."}>
        <ProductList
          categoryId={
            (await cat).collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}

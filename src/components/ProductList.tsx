import { wixClientServer } from "@/lib/useClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productsPerPage = 20;

export default async function ProductList({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) {
  const wixClient = await wixClientServer();
  console.log(
    wixClient.products.queryProducts().eq("collectionIds", categoryId),
    "xxxxxxxxxxxx"
  );
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || productsPerPage)
    .find();

  // console.log(res.items[1].additionalInfoSections[0].description);
  return (
    <div className=" mt-12 flex gap-8 gap-y-16 flex-wrap flex-row justify-between">
      {res.items.map((item: products.Product, i) => (
        <Link
          key={i}
          href={"/" + item.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={item.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {item.media?.items && (
              <Image
                src={item.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{item.name}</span>
            <span className="font-semibold">${item.price?.price}</span>
          </div>
          <div className="text-gray-500 line-clamp-2 ">
            {item.additionalInfoSections[0]?.description || "wdas"}
            {/* //  || "wds"} */}
          </div>
          <button className="rounded-2xl ring-1 ring-f text-f w-max py-2 px-4 text-xs hover:bg-f hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
}

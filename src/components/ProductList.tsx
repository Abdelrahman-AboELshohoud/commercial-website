import { wixClientServer } from "@/lib/useClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

const productsPerPage = 4;

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
  // console.log(
  //   wixClient.products.queryProducts().eq("collectionIds", categoryId),
  //   "xxxxxxxxxxxx"
  // );
  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 99999999999)
    .limit(limit || productsPerPage)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || productsPerPage)
        : 0
    );
  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

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
      <Pagination
        currentPage={res.currentPage || 0}
        hasPrev={res.hasPrev()}
        hasNext={res.hasNext()}
      />
    </div>
  );
}

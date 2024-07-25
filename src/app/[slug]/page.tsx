import React from "react";
import ProductImages from "../../components/ProductImages";
import CustomizeProducts from "../../components/CustomizeProducts";
import Add from "../../components/Add";
import { wixClientServer } from "../../lib/useClientServer";
import { notFound } from "next/navigation";
export default async function SinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();
  if (!products.items[0]) {
    return notFound();
  }
  console.log(products);
  const product = products.items[0];
  console.log(product.variants);
  // console.log("options", product.productOptions, "option");
  return (
    <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages items={product.media?.items} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium"> {product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] text-gray-100" />
        {product.price?.price === product.price?.discountedPrice ||
        product.price?.discountedPrice === undefined ? (
          <h3 className="text-xl text-gray-500 line-through">
            ${product.price?.price}
          </h3>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] text-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id}
            variantId="00000000-000000-000000-000000000001"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] text-gray-100" />
        {product.additionalInfoSections?.map((item, i) => (
          <div className="text-sm" key={i}>
            <h4 className="font-medium mb-4">{item.title}</h4>
            <p className="">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

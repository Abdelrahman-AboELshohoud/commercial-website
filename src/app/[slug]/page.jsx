import React from "react";
import ProductImages from "../../components/ProductImages";
import CustomizeProducts from "../../components/CustomizeProducts";
import Add from "../../components/Add";
export default function SinglePage() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium"> Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
          natus rem cupiditate suscipit quod laudantium ipsa maiores minima
          aspernatur tenetur voluptatum omnis tempora veritatis nisi quae, a
          deserunt, dolorem dolorum.
        </p>
        <div className="h-[2px] text-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] text-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] text-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore
            in ullam nesciunt aperiam, vero quod fugit alias. Ex consectetur
            perferendis consequatur officiis dolorum officia unde expedita eaque
            ipsa voluptatum!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore
            in ullam nesciunt aperiam, vero quod fugit alias. Ex consectetur
            perferendis consequatur officiis dolorum officia unde expedita eaque
            ipsa voluptatum!
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore
            in ullam nesciunt aperiam, vero quod fugit alias. Ex consectetur
            perferendis consequatur officiis dolorum officia unde expedita eaque
            ipsa voluptatum!
          </p>
        </div>
      </div>
    </div>
  );
}

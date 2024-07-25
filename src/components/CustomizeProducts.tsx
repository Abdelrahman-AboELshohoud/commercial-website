"use client";

import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

export default function CustomizeProducts({
  productId,
  variants,
  productOptions,
}: {
  productId: string | undefined;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [SelectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      // console.log(v);
      const variantChoices = v.choices;
      // console.log("###################3", variantChoices);

      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
        // console.log("here", key, variantChoices[key], value);
      );
    });

    setSelectedVariant(variant);
  }, [selectedOptions, variants]);
  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };
  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };
  console.log(selectedOptions, "selectedOPtions");
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h4 className="font-medium">Choose a {option.name}</h4>

          <ul className="flex items-center gap-3">
            {option.choices?.map((choice, i) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });
              const selected =
                selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);
              return option.name === "Color" ? (
                <li
                  key={i}
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-400" />
                  )}
                </li>
              ) : (
                <li
                  key={i}
                  className="rounded-md ring-1 ring-f text-f py-1 px-4 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          SelectedVariant?._id || "00000000-000000-000000-000000000001"
        }
        stockNumber={SelectedVariant?.stock?.quantity || 0}
      />
    </div>
  );
}
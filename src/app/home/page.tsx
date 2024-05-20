"use client";
import Image from "next/image";
import {
  discountData,
  headingOptions,
  PDiscount,
  PProducts,
  products,
  variety,
} from "./constant";

import SectionHeading from "@/components/SectionHeading";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import DiscountCard from "@/components/DiscountCard";
import useIdb from "@/hooks/useIdb";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const { handleAddItem, fetchData } = useIdb();

  const addToCart = async (name: any) => {
    await handleAddItem("cart", "items", name);
    toast.success("Item added successfully!");
  };

  const getData = async () => await fetchData("cart", "items");

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Hero component here  */}
      <Hero />

      {/* Different cateogory here  */}
      <SectionHeading title="Explore Categories" options={headingOptions} />
      <div className="flex overflow-scroll m-4">
        {variety.map((e, i) => (
          <div
            key={i}
            style={{ backgroundColor: e.background }}
            className="m-3 min-w-[160px] h-[200px] text-center grid place-content-center rounded-md"
          >
            <Image
              style={{ filter: `drop-shadow(8px 8px 10px ${e.dropColor})` }}
              width={100}
              src={e.image}
              alt="cate.."
            />
            <span className="text-md font-medium mt-1 ">{e.name}</span>
            <span className="text-slate-400">{e.label}</span>
          </div>
        ))}
      </div>

      {/* Product card section  */}
      <SectionHeading title="Featured Product" options={headingOptions} />
      <div className="flex overflow-scroll m-4">
        {products.map(([productName, productDetails]: PProducts, i: number) => (
          <Card
            handleAdd={() => addToCart(productDetails)}
            {...productDetails}
            key={i}
          />
        ))}
      </div>

      {/* Discount card section  */}
      <div className="flex overflow-scroll m-4 my-10">
        {discountData.map((e: PDiscount, i: number) => (
          <DiscountCard {...e} key={i} />
        ))}
      </div>
    </>
  );
};

export default Home;

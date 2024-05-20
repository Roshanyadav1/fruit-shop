"use client";
import React, { useEffect, useState } from "react";
import useIdb from "@/hooks/useIdb";

import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Cart = () => {
  const [data, setData] = useState<any[]>([]);
  const { handleDeleteItem, fetchData } = useIdb();

  const getData = async () => {
    let res: any = await fetchData("cart", "items");
    setData(res);
  };

  const deleteItem = async (id: any) => {
    const result: any = await handleDeleteItem("cart", "items", id);
    toast.success('Item remove successfully!');
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container m-auto max-w-[650px]">
      <SectionHeading title="Your Bucket" options={[]} />
      <div className="mx-4">
        {data &&
          data.map((e: any, i) => {
            // Calculate the number of yellow stars and gray stars
            const yellowStars = Math.floor(e.item.rating);
            const grayStars = 5 - yellowStars;

            // store the yellow stars
            const yellowStarArray = [];
            for (let i = 0; i < yellowStars; i++) {
              yellowStarArray.push(
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            }

            // store the gray stars
            const grayStarArray = [];
            for (let i = 0; i < grayStars; i++) {
              grayStarArray.push(
                <svg
                  key={yellowStars + i}
                  className="w-4 h-4 me-1 dark:text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            }
            return (
              <>
                <div key={i} className="border-2 rounded-md sm:px-4 px-2 mt-2">
                  <li className="flex py-4 overflow-auto">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        height={100}
                        className="rounded-md"
                        priority={true}
                        src={e.item.image}
                        alt={e.item.name}
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a>{e.item.name}</a>
                            <div className="flex items-center">
                              {yellowStarArray}
                              {grayStarArray}
                              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                ({e.item.rating})
                              </p>
                            </div>
                          </h3>
                          <div className="flex justify-between h-[40px] items-center">
                            <div>
                              <span className=" font-bold text-emerald-500">
                                {e.item.discountPrice}{" "}
                                <del className="font-normal text-slate-400 ms-2">
                                  {e.item.originalPrice}
                                </del>
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          By {e.item.seller}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty : {e.item.weight}</p>
                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => deleteItem(e.id)}
                            className="font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </>
            );
          })}

        {data?.length === 0 && (
          <>
            <div className="flex items-center justify-center font-bold font-mono">
              <div className="p-4">No Data Found</div>
              <Link href="/home">
                <button className="w-fit bg-emerald-500 rounded-sm text-white p-2">
                  Buy Product {"->"}
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

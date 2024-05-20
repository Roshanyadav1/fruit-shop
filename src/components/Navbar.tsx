"use client";
import { useState } from "react";

import Image from "next/image";
import logo from "../app/static/logo.svg";
import wishList from "../app/static/wishList.png";
import profile from "../app/static/profile.png";
import trolly from "../app/static/trolley.png";
import Link from "next/link";

const Navbar = () => {
  const [isSaleLive, setIsSaleLive] = useState<boolean>(true);

  return (
    <>
      {isSaleLive && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-emerald-300 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            ></div>
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            ></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">Groceyish 2024</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              Sale in Groceyish: June 7th to 9th.
            </p>
            <a
              href="#"
              className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Buy now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              onClick={() => setIsSaleLive(false)}
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="h-5 w-5 text-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="md:grid sm:flex grid-flow-col px-2 grid-cols-4 gap-2">
        <div className="flex w-[250px]">
          <Link href='/home'>
            <Image width={50} height={68} src={logo} alt="logo" />
          </Link>
          <div className="p-2">
            <span className="text-lime-500 text-xl font-medium font-mono ">
              Groceyish
            </span>
            <br />
            <span className="text-slate-400 font-medium">GROCERY</span>
          </div>
        </div>
        <div className="sm:col-span-2 hidden md:block">
          <div className="relative mt-[15px]">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>Vegetables</option>
                <option>Fruits</option>
                <option>Others</option>
              </select>
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 pl-[8rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-center items-center m-2 cursor-pointer">
            <Image width={30} src={wishList} alt="wishlist" />
            <span className="p-1 text-sm px-2 hidden sm:block">
              Wishlist
            </span>
          </div>
          <Link prefetch href='/cart' className="flex justify-center items-center m-2 cursor-pointer">
            <Image width={30} src={trolly} alt="trolly" />
            <span className="p-1 text-sm px-2 hidden sm:block">Cart</span>
          </Link>
          <div className="flex justify-center items-center m-2 cursor-pointer">
            <Image width={30} src={profile} alt="profile" />
            <span className="p-1 text-sm px-2 hidden sm:block">ramzi</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import Image from "next/image";
import addCart from "../app/static/addCart.svg";
import { SProduct } from "@/app/home/constant";

const Card = ({
  name,
  image,
  variety,
  weight,
  rating,
  seller,
  originalPrice,
  discountPrice,
  handleAdd,
}: SProduct) => {

  // Calculate the number of yellow stars and gray stars
  const yellowStars = Math.floor(rating);
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
    <div className="m-[6px]">
      <div className="w-[200px] h-[255px] border-2 p-2 rounded-md">
        <div className="h-[100px] overflow-hidden">
          <Image priority={true} src={image} alt={name} />
        </div>
        <span className="text-slate-400 text-sm">{variety}</span>
        <br />
        <span className="text-lg font-semibold">
          {name} {weight}
        </span>

        <br />
        <div className="flex items-center">
          {yellowStarArray}
          {grayStarArray}
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            ({rating})
          </p>
        </div>

        <span className="text-sm text-slate-400">
          By <a className="text-emerald-400">{seller}</a>
        </span>
        <br />
        <div className="flex justify-between h-[40px] items-center">
          <span className=" font-bold text-emerald-500">
            {discountPrice}{" "}
            <del className="font-normal text-slate-400 ms-2">
              {originalPrice}
            </del>
          </span>
          <div onClick={handleAdd} className="flex bg-emerald-100 cursor-pointer p-[8px] rounded-md text-sm justify-center items-center">
            <Image
              className="mx-1"
              height={14}
              width={14}
              src={addCart}
              alt="+"
            />
            <span className="text-emerald-500">Add</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

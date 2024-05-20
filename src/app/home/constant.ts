// variety images import statements
import Mango from "../static/mango.svg";
import BlueBerry from "../static/blueberry.svg";
import Kiwi from "../static/kiwi.svg";
import Guava from "../static/guava.svg";
import Potato from "../static/potato.svg";
import Tomato from "../static/tomato.svg";
import PineApple from "../static/pineapple.svg";
import StrawBerry from "../static/strawberry.svg";
import Apple from "../static/apple.svg";
import Orange from "../static/orange.svg";
import Carrot from "../static/carrot.svg";

// product images import statements
import PMango from "../static/mangoCart.jpeg";
import PPotato from "../static/potato.jpeg";
import PTomato from "../static/tomato.jpeg";
import PPeas from "../static/peas.jpeg";
import PBeans from "../static/beans.jpeg";
import PPomegranates from "../static/pomegranate.jpeg";
import PGrapes from "../static/grapes.jpeg";
import PGuava from "../static/guava.jpeg";

// discount data options
import freeDelivery from "../static/freeDelivery.jpg";
import greenVeg from "../static/vegBuckets.jpeg";
import fruits from "../static/grapefruit.svg";

import { StaticImageData } from "next/image";

type Variety = {
  background: string;
  image: string;
  name: string;
  label: string;
  dropColor: string;
};

export type PProducts = [string, {
  name: string;
  image: StaticImageData;  
  variety: string;
  weight: string;
  rating: number;
  seller: string;
  originalPrice: string;
  discountPrice: string;
  handleAdd?: () => void;
}];

export type SProduct = {
  name: string;
  image: StaticImageData;  
  variety: string;
  weight: string;
  rating: number;
  seller: string;
  originalPrice: string;
  discountPrice: string;
  handleAdd?: () => void;
}


export type PDiscount = {
  color: string;
  label: string;
  heading: string;
  subheading: string;
  buttonLabel: string;
  image: StaticImageData;
};

export const variety: Variety[] = [
  {
    background: "#FFFFE0",
    image: Mango,
    name: "Mango",
    label: "2 items",
    dropColor: "yellow",
  },
  {
    background: "#ADD8E6",
    image: BlueBerry,
    name: "Blueberry",
    label: "3 items",
    dropColor: "blueviolet",
  },
  {
    background: "lightgreen",
    image: Kiwi,
    name: "Kiwi",
    label: "4 items",
    dropColor: "green",
  },
  {
    background: "#FFC0CB",
    image: Guava,
    name: "Guava",
    label: "5 items",
    dropColor: "gray",
  },
  {
    background: "#FFFFE0",
    image: Potato,
    name: "Potato",
    label: "6 items",
    dropColor: "gray",
  },
  {
    background: "#ADD8E6",
    image: Tomato,
    name: "Tomato",
    label: "7 items",
    dropColor: "red",
  },
  {
    background: "lightgreen",
    image: PineApple,
    name: "Pineapple",
    label: "8 items",
    dropColor: "yellow",
  },
  {
    background: "#FFC0CB",
    image: StrawBerry,
    name: "Strawberry",
    label: "9 items",
    dropColor: "red",
  },
  {
    background: "#FFFFE0",
    image: Apple,
    name: "Apple",
    label: "10 items",
    dropColor: "black",
  },
  {
    background: "#ADD8E6",
    image: Orange,
    name: "Orange",
    label: "11 items",
    dropColor: "orange",
  },
  {
    background: "lightgreen",
    image: Carrot,
    name: "Carrot",
    label: "12 items",
    dropColor: "orange",
  },
];

export const headingOptions: string[] = [
  "All",
  "Vegetables",
  "Fruits",
  "Coffe & teas",
];

export const products: PProducts[] = [
  [
    "Mango",
    {
      name: "Mango",
      image: PMango,
      variety: "Fruit",
      weight: "500g",
      rating: 4,
      seller: "McFood",
      originalPrice: "$3",
      discountPrice: "$2",
    },
  ],
  [
    "Potato",
    {
      name: "Potato",
      image: PPotato,
      variety: "Vegetable",
      weight: "1kg",
      rating: 3,
      seller: "McVegie",
      originalPrice: "$4",
      discountPrice: "$2",
    },
  ],
  [
    "Tomato",
    {
      name: "Tomato",
      image: PTomato,
      variety: "Vegetable",
      weight: "300g",
      rating: 5,
      seller: "McVegie",
      originalPrice: "$5",
      discountPrice: "$4",
    },
  ],
  [
    "Peas",
    {
      name: "Peas",
      image: PPeas,
      variety: "Vegetable",
      weight: "250g",
      rating: 4,
      seller: "McVegie",
      originalPrice: "$8",
      discountPrice: "$6",
    },
  ],
  [
    "Green",
    {
      name: "Green Beans",
      image: PBeans,
      variety: "Vegetable",
      weight: "1kg",
      rating: 2,
      seller: "McVegie",
      originalPrice: "$10",
      discountPrice: "$4",
    },
  ],
  [
    "Pomegranates",
    {
      name: "Pomegranates",
      image: PPomegranates,
      variety: "Fruit",
      weight: "2kg",
      rating: 5,
      seller: "McFood",
      originalPrice: "$40",
      discountPrice: "$35",
    },
  ],
  [
    "Grapes",
    {
      name: "Grapes",
      image: PGrapes,
      variety: "Fruit",
      weight: "2kg",
      rating: 3,
      seller: "McFood",
      originalPrice: "$15",
      discountPrice: "$10",
    },
  ],
  [
    "Guava",
    {
      name: "Guava",
      image: PGuava,
      variety: "Fruit",
      weight: "2kg",
      rating: 4,
      seller: "McFood",
      originalPrice: "$30",
      discountPrice: "$20",
    },
  ],
];

export const discountData: PDiscount[] = [
  {
    color: "yellow",
    label: "Free Delivery",
    heading: "Free delivery over $50",
    subheading: "Shop $50 product and get free delivery anywhere",
    buttonLabel: "Shop now ->",
    image: freeDelivery,
  },
  {
    color: "green",
    label: "60% off",
    heading: "Organic Food",
    subheading: "Save upto 60% of on organic food",
    buttonLabel: "Order now ->",
    image: greenVeg,
  },
  {
    color: "orange",
    label: "30% off",
    heading: "Organic Fruits",
    subheading: "Save upto 30% of on organic food",
    buttonLabel: "Order now ->",
    image: fruits,
  },
];

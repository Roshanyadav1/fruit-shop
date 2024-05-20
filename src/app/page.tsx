import Image from "next/image";
import logo from "./static/logo.svg";
import profile from "./static/profile.svg";
import veg from "./static/veg.svg";
import rightArrow from "./static/rightArrow.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <div className="h-[100vh] sm:flex sm:justify-between md:grid md:place-items-center md:grid-col-2 md:grid-flow-col gap-4">
        <div className="grid gap-6">
          <div className="flex">
            <Image width={50} height={68} src={logo} alt="logo" />
            <div className="p-2">
              <span className="text-lime-500 text-xl font-medium font-mono ">
                Groceyish
              </span>
              <br />
              <span className="text-slate-400 font-medium">GROCERY</span>
            </div>
          </div>
          <div className="text-4xl font-medium">Grocery Website Design</div>
          <div className="pt-4 text-slate-400 font-bold ">Free Figma UI design File

        <br/>
        <Link href="/home">
        <button className="flex font-normal bg-lime-600 text-white p-2 rounded-full px-4 my-4 hover:bg-lime-500" >
            View Store 
            <Image className="ms-3 m-[2px]" height={20} src={rightArrow} alt="->" />
        </button>
        </Link>
          
        </div>
          <div className="flex">
            <Image priority={false} src={profile} alt="profile" width={50} />
            <div className="p-2">
              <span className="text-xl font-medium font-mono">
                ramzi.ui
              </span>
              <br />
              <span className="text-slate-500">@ramzi.ui</span>
            </div>
          </div>
        </div>
        <div className="md:h-[100vh] sm:h-auto grid place-items-center">
          <Image priority={true} width={700} src={veg} alt="Veg..." />
        </div>
      </div>
    </div>
  );
}

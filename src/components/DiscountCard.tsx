import { PDiscount } from "@/app/home/constant"

const DiscountCard=({
    color = 'green',
    label ,
    heading ,
    subheading ,
    buttonLabel ,
    image ,
}: PDiscount)=>{
    return (
        <div className={`w-[450px] h-[200px] bg-gray-50 border-2 rounded-md m-[6px]`}>
            <div className="flex flex-col h-full items-start justify-between p-[14px] relative">
                <button className={`text-gray-700 bg-yellow-100 border-md p-1 rounded-md`}>
                  {label}
                </button>
                <div className="font-mono">{heading}</div>
                <span className=" text-slate-500 w-[200px]">{subheading}</span>
                <button className="bg-emerald-700 text-emerald-100 border-md p-2 rounded-sm">{buttonLabel}</button>
                <div
                  className="bg-no-repeat h-[400px] absolute"
                  style={{
                    right: 0,
                    width: "50%",
                    height:'165px',
                    backgroundSize: "contain",
                    backgroundImage: `url(${image.src})`,
                    mixBlendMode:'multiply'
                  }}
                ></div>
            </div>
          </div>
    )
}

export default DiscountCard
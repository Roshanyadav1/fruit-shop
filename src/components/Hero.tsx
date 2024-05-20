import bgImg from "../app/static/img.jpg";

const Hero =()=>{
    return (
        <div className="h-[300px] md:h-[400px] card">
        <div className="h-full grid mx-4">
          <div className="h-full flex flex-col justify-center md:ps-[10%] sm:ps-0 ">
            <div className="text-4xl font-bold">
              Don't miss our daily
              <br /> amazing deals
            </div>
            <div className="text-slate-400 pt-4 font-medium">
              Save upto 60% off on your first order
            </div>
          </div>
          <div
            className="bg-no-repeat h-[400px] absolute hidden md:block"
            style={{
              right: 0,
              width: "50%",
              height:'400px',
              backgroundSize: "cover",
              backgroundImage: `url(${bgImg.src})`,
              mixBlendMode:'multiply'
            }}
          ></div>
        </div>
      </div>
    )
}



export default Hero
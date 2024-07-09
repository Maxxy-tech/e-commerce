import React from 'react'
import cos1 from "../assets/MASCARA.png";
import cos2 from "../assets/FACE POWDER.png";
import cos3 from "../assets/121328e6-2a3e-40a4-9e8e-7cc0b8a00211 2.png";
import cos4 from "../assets/8bd9179d-fc6d-44ce-9b89-7d3b25805290 1.png";
const NewArrivals = () => {
  return (
    <div>
     

      <div className="w-full sm:flex mt-[60px] sm:gap-10 sm:h-[488.77px] sm:p-10 top-[936.04px] left-[11.01px]">
        <div className="h-full sm:w-[288.8px]  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
          <img src={cos1} alt="" />

          <div className="w-[216px] h-[80px]   top-[1265.48px] left-[24.18px]">
            <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
              XPRESS CONTROL MASCARA
            </h4>
            <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
              <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                $7.99
              </h5>
            </span>{" "}
          </div>
        </div>
        <div className="h-full sm:w-[288.8px] p-8  sm:top-[937.7px] sm:left-[11.01px] rounded-[26.58px] mt-6 bg-[#fff]">
          <img src={cos2} alt="" />

          <div className="w-[216px] h-[80px]   top-[1265.48px] left-[24.18px]">
            <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
              LAKME FACE POWDER
            </h4>
            <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
              <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                $19.99
              </h5>
            </span>{" "}
          </div>
        </div>
        <div className="h-full sm:w-[288.8px]  sm:top-[937.7px] left-[11.01px] rounded-[26.58px] p-8 mt-6 bg-[#fff]">
          <img src={cos3} alt="" />

          <div className="w-[216px] h-[80px]   top-[1265.48px] left-[24.18px]">
            <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
              NUDE BY NATURE FACE POWDER
            </h4>
            <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
              <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                $17.99
              </h5>
            </span>{" "}
          </div>
        </div>
        <div className="sm:h-full p-8 mt-6 sm:w-[288.8px]  top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
          <img src={cos4} alt="" />

          <div className="w-[216px] h-[80px]   top-[1265.48px] left-[24.18px]">
            <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
              2 4 1 LIP GLOSS
            </h4>
            <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
              <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                $20.99
              </h5>
            </span>{" "}
          </div>
        </div>
      </div>
      {/* new arrivals */}
    </div>
  );
}

export default NewArrivals

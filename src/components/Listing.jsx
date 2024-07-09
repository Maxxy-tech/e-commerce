import img from "../assets/8a25b55f-a01d-452d-9bdb-9c4c3fcca900 2.png";
import cart from "../assets/ShoppingCartOutline.png";
import prod1 from "../assets/FACE POWDER.png";
import prod2 from "../assets/foundation-product-branding-still-life.png";
import prod3 from "../assets/download (1).png";
import prod4 from "../assets/front-view-tube-cream-white-gold-layout-plastic-tube-with-white-cap.png";
import prod5 from "../assets/MASCARA.png";
import prod6 from "../assets/high-angle-bright-red-lip-gloss-with-sky-background (3).png";
import prod7 from "../assets/overhead-view-lipstick-pink-background.png";
import prod8 from "../assets/eye-contacts-white-background-with-copy-space.png";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <div>
      <div className="header w-full     ">
        <div className=" grid">
          <img src={img} alt="" />
          <div className="absolute ml-[20rem] mt-4">
            <div>
              <Link to="/cart">
                <img src={cart} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* products section */}

      <div>
        <div>
          <h2 className="font-semibold mt-10 text-[#0c0505d5] text-[40.4px] capitalize font-serif sm:text-[53.42px] text-center ">
            face
          </h2>
        </div>

        {/* face */}

        <div className="w-full sm:flex mt-[60px] sm:gap-10 sm:h-[488.77px] sm:p-10 top-[936.04px] left-[11.01px]">
          <div className="h-full sm:w-[288.8px]  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod1} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                XPRESS CONTROL MASCARA
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $7.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="h-full sm:w-[288.8px] sm:mt-0 mt-4  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod2} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                NUDE BY NATURE FACE POWDER
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $89.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="h-full sm:w-[288.8px] sm:mt-0 mt-4  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod3} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                LAKME FACE POWDER
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $79.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="h-full sm:w-[288.8px] mt-4 sm:mt-0 p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod4} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                2 4 1 Lip Gloss
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $79.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
        {/* lips*/}
      </div>
      <div>
        <div>
          <h2 className="font-semibold mt-10 text-[#0c0505d5] text-[40.4px] capitalize font-serif sm:text-[53.42px] text-center ">
            eyes
          </h2>
        </div>

        {/* face */}

        <div className="w-full sm:flex mt-[60px] sm:gap-10 sm:h-[488.77px] sm:p-10 top-[936.04px] left-[11.01px]">
          <div className="h-full sm:w-[288.8px]  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod6} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                XPRESS CONTROL MASCARA
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $7.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="h-full sm:w-[288.8px] sm:mt-0 mt-4  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod5} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                NUDE FACE POWDER
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $9.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="h-full sm:w-[288.8px] sm:mt-0 mt-4  p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod6} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                LAKME EYE MASACARA
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $29.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
          <div className="h-full sm:w-[288.8px] mt-4 sm:mt-0 p-8 sm:p-0   top-[937.7px] left-[11.01px] rounded-[26.58px] bg-[#fff]">
            <img src={prod8} alt="" />

            <div className="w-[216px] sm:h-[80px]   top-[1265.48px] left-[24.18px]">
              <h4 className="font-[600] ml-2 text-[24.81px] h-[37.21px] text-[#454545]">
                2 4 1 Lip Gloss
              </h4>
              <span className="mt-8 w-[68px] h-[37px] top-[1352.3px] left-[32.27px]">
                <h5 className="font-[500] p-2 ml-2 mt-10 text-[#454545] ">
                  $79.99
                </h5>
                <div className="w-[234px] h-[50px] rounded-md p-1 mt-4   bg-[#FFD7BE] ">
                  <span>
                    <h6 className="text-center text-[#454545]  text-[20px] uppercase mt-2">
                      add to cart
                    </h6>
                  </span>
                </div>{" "}
              </span>{" "}
            </div>
          </div>
        </div>
        {/* lips*/}
      </div>

      {/* face */}

      <div className="grid relative mt-8">
        <footer className="w-full    h-[224.41px] mt-12 sm:mt-[300px]   bg-[#FFD7BE] ">
          <div className="sm:w-[722.74px] absolute z-10 w-[321px]   sm:h-[80.34px] mt-[195rem] ml-8    top-[-3110.25px]  sm:left-[278.63px]     p-[17px, 111px, 17px , 111px]   bg-white ">
            <p className="text-center mt-4 p-2 sm:mt-6">
              follow us on instagram: @glamourcosmeticstore
            </p>
          </div>
          <span className="">
            <p className=" pt-[10rem] text-center">
              @Glamourcosmeticstore. All rights reserved
            </p>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Listing;

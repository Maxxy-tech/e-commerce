import frame from "../assets/Frame 42.png";
import logo from "../assets/GLAMOUR Logo (2) 3.png";
import img from "../assets/Rectangle 65.png";

import discover from "../assets/Rectangle 67.png";
import test1 from "../assets/Ellipse 8.png";
import test2 from "../assets/Ellipse 12.png";
import test4 from "../assets/Person of indian origin having fun.png";
import test3 from "../assets/Ellipse 10.png";
import star from "../assets/Group 82.png";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="gap-4 flex sm:ml-[20%] sm:relative sm:gap-[22rem]">
        <div className="ml-2 mt-10">
          <img src={frame} className="hidden sm:l-12" alt="" />
        </div>

        <img src={logo} alt="" />
      </div>
      <div className="sm:flex sm:p-10 p-4 sm:ml-[20%] sm:gap-10 ">
        <div className="sm:w-[484.6px] sm:h-[180px] sm:top-[259.33px] left-[175.4px]">
          <h1
            className="
text-[#454545] uppercase text-[30px] sm:text-[60px] flex font-[600] sm:h-[90px]"
          >
            your beauty our passion
          </h1>
          <div className="sm:w-[322.71px] sm:h-[87px] top-[455.33px] left-[175.4px]">
            <p className="font-[500] p-3 sm:p-0 sm:text-[19.64px] text-[#454545] h-[29.46px]">
              empowering your beauty innovation, transforming your look, one
              product at a time
            </p>
          </div>{" "}
          <div className="sm:mt-10 mt-[90px] w-[213px] h-[54px] top-[594.33px] left-[230.26px] rounded-[12px] p-[19px, 101px ,19px ,101px] gap-[10px] bg-[#f8640893]">
            <Link to="/listing">
              <button className="text-white font-bold w-full mt-3 uppercase text-center">
                {" "}
                shop now
              </button>
            </Link>
          </div>
        </div>
        <div className="sm:w-[456px] mt-10 sm:0 h-[556.55px] ">
          <img src={img} className="" alt="" />
        </div>
      </div>

      {/* new arrivals */}
      <div className="w-full  sm:h-[82px] top-[822.36px] sm:p-[19px,101px,19px,101px] sm:gap-[10px] bg-[#FFD7BE] text-center">
        <span className="w-[349px] sm:h-[83px]  ">
          <h4 className="capitalize font-serif font-[600] sm:pt-0 pt-3 text-[35px] sm:text-[55px] h-[82.5px] text-[#454545]">
            new arrivals
          </h4>
        </span>
      </div>

      <div className="">
        <div className="sm:flex sm:flex-col-reverse sm:gap-20 sm:m-10 sm:p-4">
          <div className="sm:w-[474.18px] mt-8 m-5 sm:mt-14 sm:ml-4 sm:h-[138px] ">
            {" "}
            <h2 className="h-[69px] font-[600] capitalize text-[46px] text-[#454545] ">
              Discover the magic of beauty
            </h2>
            <span className="mt-10">
              <p
                className="mt-20 font-[600] text-[19.64px] text-[#454545]
"
              >
                Step into the world of beauty with our collection of cosmetics.
                we collaborate with the most prestigious beauty brands from
                around the globe to offer you the finest and trendiest products
                available
              </p>
            </span>
          </div>
          <img
            src={discover}
            className="sm:w-[375.57px] sm:h-[458px] p-6 sm:p-0 top-[1523.85px] "
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="w-full h-[54px]  sm:mt-10 text-center top-[2038.28px] left-[190px]">
          <span>
            <h2
              className="font-[600] capitalize sm:p-0 p-4  text-[36px] text-center text-[#454545]
"
            >
              Embrace the magic of glamour store
            </h2>
          </span>
        </div>
        <div className="sm:w-[979.63px] text-center sm:ml-[5rem] sm:flex sm:justify-evenly sm:m-10 mt-[5rem] ml-9 sm:h-[260.42px]  text-[#454545] top-[2112.08px] left-[172px]">
          <div className="w-[297.49px] p-6 bg-[#fff] rounded-br-[8rem] rounded-[8px] h-[260.42px] top-[2112.08px] left-[172px]">
            <span className="w-[212.73px] h-[38.64px] text-center top-[2187.46px] left-[194.97px]">
              <h2 className="font-[600] text-[20.47px] h-[30.7px]">
                {" "}
                quality products
              </h2>
            </span>{" "}
            <span className="w-[270.89px] p-4 top-[22313.88px] left-[195.07px]">
              <p className="font-[500] mt-6 text-[15.31px] h-[22.97px]">
                our dedicated customer support team is always available to
                assist you with any queries, concerns.
              </p>
            </span>
          </div>
          <div className="w-[297.49px] sm:mt-0 mt-6 p-6 bg-[#fff] rounded-br-[8rem] rounded-[8px] h-[260.42px] top-[2112.08px] left-[172px]">
            <span className="w-[212.73px] h-[38.64px] text-center top-[2187.46px] left-[194.97px]">
              <h2 className="font-[600] text-[20.47px] h-[30.7px]">
                {" "}
                affordable prices
              </h2>
            </span>{" "}
            <span className="w-[270.89px] p-4 top-[22313.88px] left-[195.07px]">
              <p className="font-[500] mt-6 text-[15.31px] h-[22.97px]">
                we understand that navigating the beauty world can be
                overwhelming at times.
              </p>
            </span>
          </div>
          <div className="w-[297.49px] sm:mt-0 mt-6 p-6 bg-[#fff] rounded-br-[8rem] rounded-[8px] h-[260.42px] top-[2112.08px] left-[172px]">
            <span className="w-[212.73px] h-[38.64px] text-center top-[2187.46px] left-[194.97px]">
              <h2 className="font-[600] text-[20.47px] h-[30.7px]">
                {" "}
                fast delivery
              </h2>
            </span>{" "}
            <span className="w-[270.89px] p-4 top-[22313.88px] left-[195.07px]">
              <p className="font-[500] mt-6 text-[15.31px] h-[22.97px]">
                products are delivered fast and safe. we got you covered.
              </p>
            </span>
          </div>
        </div>
      </div>

      {/*

      testimonial */}

      <span className="">
        <h2 className="mt-14 font-[600] uppercase text-[36px]  text-center text-[#454545]">
          what people say about us
        </h2>
      </span>

      <div className="w-full sm:h-[487.1px] sm:flex sm:gap-4 sm:justify-evenly   sm:p-[6rem] sm:mt-1 sm:top-[2550.25px] left-[10.24px] ">
        <div className="sm:w-[288.8px] p-10  sm:h-[487.1px] top-[2550.25px] left-[10.24px] rounded-[26.58px] mt-8 bg-white">
          <p className=" mt-8">
            This powder is amazing! It sets my makeup perfectly and gives me a
            flawless finish. I've received so many compliments since I started
            using it
          </p>
          <div className="ml-[6rem]">
            <div className="text-center ">
              <img src={test3} className=" sm:ml-10 mt-10" alt="" />
            </div>
            <h3 className="font-[600] capitalize text-left mt-6 ml-2">
              {" "}
              Emily
            </h3>
            <img src={star} className="mt-4" alt="" />
          </div>
        </div>

        <div className=" sm:w-[288.8px] p-10  sm:h-[487.1px] top-[2550.25px] left-[10.24px] rounded-[26.58px] mt-8 bg-white">
          <p className=" mt-8">
            This lip gloss is my new favorite! The color is gorgeous and it
            feels so moisturizing on my lips
          </p>
          <div className="ml-[4rem]">
            <div className="text-center ">
              <img src={test2} className="ml-10 mt-[90px]" alt="" />
            </div>
            <h3 className="font-[600] capitalize text-left ml-12 mt-4">
              {" "}
              Grace
            </h3>
            <img src={star} className="ml-10 mt-6" alt="" />
          </div>
        </div>

        <div className="sm:w-[288.8px] p-10  sm:h-[487.1px] top-[2550.25px] left-[10.24px] rounded-[26.58px] mt-8 bg-white">
          <p className=" mt-8">
            I was blown away by how smooth and silky this powder feels. It's
            like a second skin.
          </p>
          <div className="ml-[4rem]">
            <div className="text-center ">
              <img src={test1} className="ml-10 mt-[95px]" alt="" />
            </div>
            <h3 className="font-[600] capitalize text-left ml-12 mt-4">
              {" "}
              Beatrice
            </h3>
            <img src={star} className="ml-10 mt-6" alt="" />
          </div>
        </div>
        <div className="sm:w-[288.8px] p-10  sm:h-[487.1px] top-[2550.25px] left-[10.24px] rounded-[26.58px] mt-8 bg-white">
          <p className=" mt-8">
            I was surprised by how long-lasting this gloss is. It lasts all day
            without fading or drying out my lips.
          </p>

          <div className="ml-[4rem]">
            {" "}
            <div className="text-center ">
              <img src={test4} className="ml-10 mt-[5rem]" alt="" />
            </div>
            <h3 className="font-[600] capitalize text-left ml-12 mt-4">
              {" "}
              Flora
            </h3>
            <img src={star} className="ml-10 mt-6" alt="" />
          </div>
        </div>
      </div>

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

export default Header;

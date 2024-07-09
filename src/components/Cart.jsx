import logo from '../assets/GLAMOUR Logo (2) 3.png'
import cart from '../assets/ShoppingCartOutline.png'
import {Link} from 'react-router-dom'
const Cart = () => {
  return (
    <div>
      <div className="flex">
        <img src={logo} alt="" />

        <h2 className="uppercase font-bold mt-10 text-[30px]">my cart</h2>
      </div>
      <div className=" ml-40 mt-40">
        {" "}
        <img src={cart} className="w-[75px]" alt="" />
      </div>{" "}
      <h1 className="ml-10  p-6 mt-6 font-bold text-[30px] capitalize w-full flex">
        your cart is empty
      </h1>
      <p className="w-[70%] ml-[5rem] font-bold">
        you have no items in your shopping cart. Let’s go buy something
      </p>
      <div className="bg-[#f76307cb] mt-8  p-2 w-[40%] ml-[30%] rounded-xl">
        <Link to="/listing">
          <h3 className="font-[600] uppercase p-2 text-[#f1eded]">
            let's go shopping
          </h3>
        </Link>
      </div>

    </div>
  );
}

export default Cart
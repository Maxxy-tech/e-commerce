// Checkout.jsx

import React from "react";
import logo from "../assets/GLAMOUR Logo (2) 3.png";

const Checkout = () => {
  return (
    <div>
      {/* Header with Logo */}
      <div className="flex">
        <img src={logo} alt="Glamour Logo" />

        <h2 className="uppercase font-bold mt-10 text-3xl">Checkout</h2>
      </div>

      {/* Checkout Form */}
      <form className="mt-8 w-1/2 mx-auto">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Shipping Address
          </label>
          <textarea
            id="address"
            name="address"
            rows="3"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your shipping address"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="creditCard"
            className="block text-sm font-medium text-gray-700"
          >
            Credit Card Number
          </label>
          <input
            type="text"
            id="creditCard"
            name="creditCard"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your credit card number"
          />
        </div>

        <button
          type="submit"
          className="bg-[#f76307cb] text-white px-4 py-2 rounded-md hover:bg-[#ff7b5b] transition-colors duration-300"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default Checkout;

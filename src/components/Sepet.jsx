import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../DataProvider";

function Sepet() {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const [total] = value.total;

  return (
    <div>
      <section className="m-2 font-sans leading-normal justify-center p-5 flex">
        <div className="max-w-lg shadow-lg rounded overflow-hidden  m-4 sm:flex">
          <div className=" sm:h-auto text-center sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
            <p className="mb-2 font-black">Sepet : {cart.length}</p>
            <p className="mb-4 text-grey-dark text-sm">Total : {total} $ </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sepet;

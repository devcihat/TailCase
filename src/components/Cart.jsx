import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataProvider";
import Typist from "react-typist";

export default function Cart() {
  const value = useContext(DataContext);
  const [product] = value.product;
  const addCart = value.addCart;

  useEffect(() => {
    console.log("pro", product);
  }, [product]);

  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 w-1/2 justify-center inline items-center  rounded px-6">
        <div className="border-l-4 border-red-400 -ml-6 pl-6 flex items-center justify-between my-4">
          <div className="font-semibold text-gray-800">Ürün adı :</div>
          <div className="text-red-400">Tutar : </div>
        </div>
        <hr className="-mx-6" />

        {product.map((prod) => (
          <>
            <div
              key={prod.id}
              className="flex items-center justify-between my-4"
            >
              
              <div className="w-16">
                <img className="w-12 h-12 rounded-full" src={prod.img} />
              </div>
              <div className="flex-1 pl-2">
                <div className="text-gray-700  text-center  inline-block font-semibold">
                  {prod.price} $
                </div>
                  <Typist cursor={{ show:false }}>
                <div className="text-gray-700 font-semibold">{prod.title}</div>
                <div className="text-gray-600 font-thin">{prod.desc}</div>
                </Typist>
              </div>
             
              <button
                onClick={() => addCart(prod.id)}
                className="mr-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg"
              >
                Ekle
              </button>
            </div>
          </>
        ))}
      </div>
      <div></div>
    </div>
  );
}

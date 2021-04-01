import React, { useContext, useEffect } from "react";
import Sepet from "./Sepet";
import Button from "./Button";
import { DataContext } from "../DataProvider";

function Main() {
  const value = useContext(DataContext);
  const [cuzdan,setCuzdan] = value.cuzdan;


  const addMoney = () => {
    const newCuzdan = prompt("Lütfen Ekleyeceğiniz Miktarı Girin");
    let _cuzdan = Number(cuzdan) + Number(newCuzdan)
    setCuzdan(_cuzdan) 
  }



  return (
    <>
      <section className="m-2 font-sans leading-normal justify-center p-5 flex">
        <div className="max-w-lg shadow-lg rounded overflow-hidden  m-4 sm:flex">
          <div className=" sm:h-auto text-center sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
            <p className="mb-2 font-black">Cüzdan :</p>
            <p className="mb-4 text-grey-dark text-sm">{cuzdan} $</p>
          </div>

          <div className="px-6 py-4">
            <button onClick={addMoney} className="bg-blue-500 hover:bg-blue-700 text-white mx-1 font-bold py-2 px-4 rounded">
              Para Ekle
            </button>
            <Button />
          </div>
        </div>
      </section>

      <Sepet />
    </>
  );
}

export default Main;

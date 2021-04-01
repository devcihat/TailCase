import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataProvider";

function Button() {
  const value = useContext(DataContext);
  const [total] = value.total;
  const [cuzdan] = value.cuzdan;

  const satınAl = () => {
    console.log("total", total);
    console.log("cuzdan", cuzdan);
    if (total > cuzdan) {
      alert("Bakiyeniz yetersiz");
    } else if(cuzdan > total) {
        alert("İşlem Başarılı");
    }
  };

  return (
    <>
      <button
        onClick={satınAl}
        className="bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Satın Al
      </button>
    </>
  );
}

export default Button;

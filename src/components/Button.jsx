import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataProvider";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
function Button() {
  const value = useContext(DataContext);
  const [total] = value.total;
  const [cuzdan] = value.cuzdan;

 

  const satınAl = () => {
    console.log("total", total);
    console.log("cuzdan", cuzdan);
    if (total > cuzdan) {
     return  toast.error("Bakiyeniz yetersiz")
    } else if(cuzdan >= total) {
      return  toast.success("Satın Alma Başarılı")
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

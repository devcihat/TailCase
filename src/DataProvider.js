import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [product, setProduct] = useState([
    {
      id: "1",
      title: "Product 1",
      img: "https://picsum.photos/200",
      desc: "Product desc",
      price: 40,
    },
    {
      id: "2",
      title: "Product 2",
      img: "https://picsum.photos/200",
      desc: "Product desc",
      price: 90,
    },
    {
      id: "3",
      title: "Product 3",
      img: "https://picsum.photos/200",
      desc: "Product desc",
      price: 120,
    },
    {
      id: "4",
      title: "Product 4",
      img: "https://picsum.photos/200",
      desc: "Product desc",
      price: 160,
    },
    {
      id: "5",
      title: "Product 5",
      img: "https://picsum.photos/200",
      desc: "Product desc",
      price: 180,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [cuzdan, setCuzdan] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const response = cart.reduce((prev, item) => {
        return prev +  item.price;
      }, 0);
      setTotal(response);
    };
    getTotal();
  }, [cart]);

  //   const addCart = (id) => {
  //     const check = cart.every((item) => {
  //       return item.id !== item.id;
  //     });
  //     if (check) {
  //       const data = product.filter((prod) => {
  //         console.log("prod", prod.id);
  //         return prod.id === id;
  //       });

  //       setCart([...cart, ...data]);
  //     }
  //   };

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      let prods = {};
      prods = product.filter((products) => {
        return products.id === id;
      });
      setCart([...cart, ...prods]);
    }
  };

  const value = {
    product: [product, setProduct],
    cart: [cart, setCart],
    addCart: addCart,
    cuzdan: [cuzdan, setCuzdan],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

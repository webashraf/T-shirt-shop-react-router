import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

import { Toast } from "primereact/toast";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const Shop = () => {
  const toast = useRef(null);
  const tShirt = useLoaderData();
  console.log(tShirt);

  const [cart, setCart] = useState([]);
  const handleAddCart = (name) => {
    console.log("clicked", name);
    const newCart = [...cart, name];
    const duplicateProduct = cart.find((pd) => pd === name);
    if (duplicateProduct) {
      toast.current.show({
        severity: "error",
        summary: `${name} EXIST`,
        detail: `${name} is allready exist`,
      });
    } else {
      setCart(newCart);
    }
  };
  const removeItemCart = (item) => {
    console.log(item);
    const newCart = cart.filter((pd) => pd !== item);
    console.log(newCart);
    setCart(newCart);
  };
  return (
    <div className="flex relative justify-between">
      <div className="grid grid-cols-2 gap-6 w-full">
        {tShirt.map((ts) => (
          <Tshirt
            tshirt={ts}
            key={ts._id}
            handleAddCart={handleAddCart}
          ></Tshirt>
        ))}
      </div>
      {/* SIde Bar cart */}
      <div className="w-[300px] p-2 rounded-md sticky top-2 h-[500px] bg-orange-100">
        <h1 className="text-2xl mb-5 font-bold underline">Your products</h1>
        {cart.map((cart) => (
          <Cart cart={cart} removeItemCart={removeItemCart}></Cart>
        ))}
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default Shop;

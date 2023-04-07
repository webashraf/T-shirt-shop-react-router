import { Toast } from "primereact/toast";
import React, { useRef } from "react";

const Cart = ({ cart, removeItemCart }) => {
    const toast = useRef(null);
  return (
    <div >
      <div className="flex justify-between border border-black mb-3 p-2 rounded-md">
      
        <h1>{cart}</h1>
        <button className="text-xl border-2 border-black px-3" onClick={()=> removeItemCart(cart)}>X</button>
      </div>
    </div>
  );
};

export default Cart;

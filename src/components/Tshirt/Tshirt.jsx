import React from "react";

const Tshirt = ({tshirt, handleAddCart}) => {
    console.log(tshirt);
  return (
    <div>
      <div className="card h-[500px] w-full bg-base-100 shadow-xl text-left">
        <figure>
          <img className="w-[200px]"
            src={tshirt.picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {tshirt.name}
          </h2>
          <p>{tshirt.gender}</p>
          <p>{tshirt.price}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline" onClick={()=>handleAddCart(tshirt.name)}>Add cart</div>
            <div className="badge badge-outline">Detils</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirt;
<div className="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>;

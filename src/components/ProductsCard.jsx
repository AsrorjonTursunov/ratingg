import React from "react";

function ProductsCard(props) {
  return (
    <div className="ProductsCard">
      <h2>name:{props.name}</h2>
      <h2>price:{props.price}</h2>
      <h2>category:{props.category}</h2>
      <h2>
        isaviable:
        {props.isaviable == true ? "sotuvda mavjud" : "sotuvda mavjud emas"}
      </h2>
    </div>
  );
}

export default ProductsCard;

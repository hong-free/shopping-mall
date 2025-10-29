import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card border-0" onClick={showDetail} >
      <div>
        <img src={item?.img} />
      </div>
      <div>
        <div>{item?.choice == true ? "Conscious choice" : <br />}</div>
        <div className="card-title">{item?.title}</div>
        <div className="card-price">\{item?.price}</div>
        <div>{item?.new == true ? "신제품" : <br />}</div>
      </div>
 
    </div>
  );
};

export default ProductCard;

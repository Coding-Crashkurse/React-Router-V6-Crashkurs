import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../produkte";

const Detail = () => {
  let params = useParams();
  let navigate = useNavigate();

  const produkt = getProduct(params.produktId);
  console.log(produkt);

  if (produkt === undefined) {
    return <h3>Produkt nicht gefunden</h3>;
  }

  return (
    <div>
      <h3>Produkt Id: {params.produktId}</h3>
      <p>{produkt.preis}</p>
      <p>{produkt.produkt}</p>
      <button
        onClick={() => {
          setTimeout(() => {
            navigate("/dashboard");
          }, 1200);
        }}
      >
        Gehe zu Dashboard
      </button>
    </div>
  );
};

export default Detail;

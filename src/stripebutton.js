import React, { useState } from "react";
import axios from "axios";

function StripeButton() {
  const stripe = Stripe("pk_live_5PjwBk9dSdW7htTKHQ3HKrTd");

  const [error, setError] = useState();

  const handleClick = () => {
    stripe
      .redirectToCheckout({
        items: [{ sku: "sku_FAe7tbPK29byHW", quantity: 1 }],
        successUrl:
          window.location.protocol + "//www.jobdirecto.com/jobConfirm",
        cancelUrl:
          window.location.protocol + "//www.jobdirecto.com/StripeButton"
      })
      .then(result => {
        if (result.error) {
          setError(result.error.message);
        }
      });

    console.log("someone wants to pay");
    event.preventDefault();
    axios.post("/wantsToPay").then(resp => {
      console.log("yes pay");
    });
  };

  return (
    <div>
<<<<<<< HEAD
      <button id="UrgentCheckedButtonYES" onClick={handleClick}>
        Quiero un anuncio azul
=======
      <button
        id="UrgentCheckedButtonYES"
        className="btn-secondary"
        onClick={handleClick}
      >
        Quiero un anuncio de CALIDAD
>>>>>>> 0c842b5a1539ff43158bcf03a0794a1d78024ef8
        <br />
      </button>
      <div>{error}</div>
    </div>
  );
}

export default StripeButton;

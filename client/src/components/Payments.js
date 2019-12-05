import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"

const Payments = () => {
    const handleToken = async(token) => {
        const res = await axios.post("/api/stripe", token);
        console.log(res)
    }
  return (
    <StripeCheckout
      name="Weather App"
      description="$5 for 5 weather credits"
      amount={500}
      token={token => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className="btn btn-primary">Add Credits</button>
    </StripeCheckout>
  );
};

export default Payments;

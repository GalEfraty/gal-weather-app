import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import userContext from "../context/userContext";

const Payments = () => {
  const { fetchUser } = useContext(userContext);

  const handleToken = async token => {
    await axios.post("/api/stripe", token);
    fetchUser();
  };
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

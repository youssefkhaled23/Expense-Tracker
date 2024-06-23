import React, { useContext } from "react";
import { contextData } from "../Context/Context";

export const Balance = () => {
  const { transctions } = useContext(contextData);

  const amounts = transctions ? transctions.map((transaction) => transaction.amount) : [];

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

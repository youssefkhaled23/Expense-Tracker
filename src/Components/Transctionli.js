import React, { useContext } from "react";
import { contextData } from "../Context/Context";

export const Transctionli = ({ transctions }) => {
  const { deleteTransction } = useContext(contextData)
  // console.log(transctions);
  const sign = transctions.amount < 0 ? "-" : "+";
  return (
    <>
      <li className={transctions.amount < 0 ? "minus" : "plus"}>
        {transctions.text}
        <span>
          {sign}${transctions.amount}
        </span>
        <button className="delete-btn" onClick={() => deleteTransction(transctions.id)}>x</button>
      </li>
    </>
  );
};

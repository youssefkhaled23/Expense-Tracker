import React, { useContext } from "react";
import { contextData } from "../Context/Context";
import { Transctionli } from "./Transctionli";
export const TransctionList = () => {
  const { transctions } = useContext(contextData);
  // console.log(transctions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transctions.map((transctions) => (
          <Transctionli key={transctions.id} transctions={transctions} />
        ))}
        transctions
      </ul>
    </div>
  );
};

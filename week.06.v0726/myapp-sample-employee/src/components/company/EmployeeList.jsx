/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

const initialState = {
  name: null,
  age: null,
  job: null,
  language: null,
  pay: null,
};
export default function EmployeeList({ Employee, infos, handleSearchName }) {
  const [info, setInfo] = useState(initialState);
  const handleClick = (n) => {
    setInfo(infos?.filter((info) => info.name === n)[0]);
    handleSearchName(n);
  };
  return (
    <Employee>
      {infos.map((key, row) => (
        <h2 key={row}>
          <a href="#" onClick={() => handleClick(key.name)}>
            {key.name}
          </a>
        </h2>
      ))}
    </Employee>
  );
}

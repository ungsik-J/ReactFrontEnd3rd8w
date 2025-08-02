import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Employee({ useEmployee, OBJEmployee }) {
  const [answer] = useState(useEmployee);
  const handleClick = (data) => {
    OBJEmployee(data);
  };
  return (
    <>
      <div>Employee</div>
      <div>
        {answer.map((info) => (
          <Link to="/" key={info.name} onClick={() => handleClick(info)}>
            [{info.name}]
          </Link>
        ))}
      </div>
    </>
  );
}

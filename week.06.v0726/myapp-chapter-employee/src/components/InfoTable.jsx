import React from "react";
const tStyle = {
  borderCollapse: "collapse",
  width: "100%",
};

const cStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "center",
};

const InfoTable = ({ info }) => {
  console.log(info);
  return (
    <table style={tStyle}>
      <thead>
        <tr>
          {Object.keys(info).map((key) => (
            <th style={cStyle}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(info).map((value) => (
            <td style={cStyle}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default InfoTable;

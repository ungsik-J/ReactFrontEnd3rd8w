import React from "react";

export default function Info({ useInfo, OBJInfo }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {Object.keys(useInfo).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(useInfo).map((val, i) => (
              <th key={i} onClick={() => OBJInfo(useInfo)}>
                {val}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

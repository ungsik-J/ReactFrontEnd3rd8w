import React, { useState } from "react";

import Employee from "./Employee";
import Info from "./Info";
import Control from "./Control";

const initialState = [
  { name: "John", age: 35, job: "frontend", language: "react", pay: 400 },
  { name: "Peter", age: 28, job: "backend", language: "java", pay: 300 },
  { name: "Sue", age: 38, job: "publisher", language: "javascript", pay: 400 },
  { name: "Susan", age: 45, job: "pm", language: "python", pay: 500 },
];
export default function Main() {
  const [useEmployee] = useState(initialState);
  const [useInfo, setUseInfo] = useState({});
  const [useUpdate, setUseUpdate] = useState({});

  const OBJEmployee = (data) => {
    setUseInfo(data);
    console.log(useInfo);
  };
  const OBJInfo = (data) => {
    console.log(data);
    setUseUpdate(data);
  };
  return (
    <>
      {/** 사원목록*/}
      <Employee useEmployee={useEmployee} OBJEmployee={OBJEmployee} />
      {/** 사원목록 상세*/}
      <Info useInfo={useInfo} OBJInfo={OBJInfo} />
      {/** register, update, delect */}
      <Control useUpdate={useUpdate} />
    </>
  );
}

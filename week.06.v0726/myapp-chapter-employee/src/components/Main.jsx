import React, { useCallback, useMemo, useState } from "react";
import EmployeeList from "./employeeList";
import { Link } from "react-router-dom";
import Register from "./Register";
import Upgrade from "./Upgrade";

const initialState = [
  { name: "John", age: 35, job: "frontend", language: "react", pay: 400 },
  { name: "Peter", age: 28, job: "backend", language: "java", pay: 300 },
  { name: "Sue", age: 38, job: "publisher", language: "javascript", pay: 400 },
  { name: "Susan", age: 45, job: "pm", language: "python", pay: 500 },
];

const style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  padding: "20px",
};

const Main = () => {
  console.log(initialState);
  const [infos, setInfos] = useState(initialState);
  const [upInfo, setUpInfo] = useState(null);
  const [mode, setMode] = useState("");
  const [name, setName] = useState("");

  const modes = useMemo(() => ["register", "upgrade", "delete", "초기화"], []);
  const handleSearchName = (n) => {
    console.clear();
    console.log(n);
    setName(n);
    setUpInfo(infos.filter((info) => info.name === n)[0]);
  };
  const handleClick = useCallback(
    (mod) => {
      setMode(mod);
      if (mod === "delete") {
        setInfos((prev) => prev.filter((item) => item.name !== name));
      }
      setName(null);
    },
    [name]
  );
  const handleRegister = (obj) => {
    console.log(obj);
    setInfos((prev) => [...prev, obj]);

    console.log(infos);
  };
  const handleUpgrade = (obj) => {
    setInfos((prev) =>
      prev.map((item) => (item.name === obj.name ? obj : item))
    );
  };

  return (
    <>
      <div>
        <EmployeeList
          name={name}
          infos={infos}
          handleSearchName={handleSearchName}
        />
      </div>
      <div style={style}>
        {modes.map((mod) => (
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleClick(mod);
            }}
          >
            {mod}
          </Link>
        ))}
      </div>
      <div>
        {mode === "register" ? (
          <Register handleRegister={handleRegister} />
        ) : mode === "upgrade" ? (
          <Upgrade name={name} upInfo={upInfo} handleUpgrade={handleUpgrade} />
        ) : null}
      </div>
    </>
  );
};

export default Main;

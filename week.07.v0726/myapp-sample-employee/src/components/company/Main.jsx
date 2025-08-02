import React, { useCallback, useState } from "react";
import styled from "styled-components";
import IMPORT_DATA from "../../data/info.json";
import Update from "./Update";
import Create from "./Create";

/** Styled Components */
const Center = styled.div`
  width: 800px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FlexRow = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
`;

const Th = styled.th`
  border-bottom: 1px solid #444444;
  padding: 10px;
`;

const Td = styled.td`
  border-bottom: 1px solid #444444;
  padding: 10px;
`;

const initialState = {
  name: null,
  age: null,
  job: null,
  language: null,
  pay: null,
};

export default function Main() {
  const modes = ["register", "upgrade", "delete", "초기화"];
  const [data, setData] = useState(IMPORT_DATA);
  const [selectedKey, setSelectedKey] = useState(initialState);
  const [mode, setMode] = useState(null);

  const handleClick = useCallback(
    (name) => {
      const selected = data.find((info) => info.name === name);
      setSelectedKey(selected || initialState);
      setMode(null);
    },
    [data]
  );

  const handleUpgrade = useCallback((updated) => {
    setData((prev) =>
      prev.map((item) => (item.name === updated.name ? updated : item))
    );
    setSelectedKey(updated);
  }, []);

  const handleDelete = useCallback(() => {
    if (!selectedKey.name) return;

    const confirmDelete = window.confirm(
      `${selectedKey.name} 님의 정보를 삭제하시겠습니까?`
    );

    if (confirmDelete) {
      setData((prev) => prev.filter((item) => item.name !== selectedKey.name));
      setSelectedKey(initialState);
      setMode(null);
    }
  }, [selectedKey, setData]);
  const handleRegister = useCallback((args) => {
    setData((prev) => [...prev, args]);
  }, []);
  const renderEmployeeList = () =>
    data.map(({ name }) => (
      <h2 key={name}>
        <a href="#" onClick={() => handleClick(name)}>
          {name}
        </a>
      </h2>
    ));

  const renderModeButtons = () =>
    modes.map((mod) => (
      <li key={mod}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            mod === "delete" ? handleDelete() : setMode(mod);
          }}
        >
          {mod}
        </a>
      </li>
    ));

  const renderTable = () => (
    <Table>
      <thead>
        <tr>
          {Object.keys(selectedKey).map((key) => (
            <Th key={key}>{key}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(selectedKey).map((val, i) => (
            <Td key={i}>{val}</Td>
          ))}
        </tr>
      </tbody>
    </Table>
  );

  return (
    <Center>
      <h1>
        <a href="/employee">Employees</a>
      </h1>
      <hr />
      <br />
      <FlexRow>{renderEmployeeList()}</FlexRow>
      <br />
      {renderTable()}
      <br />
      <FlexRow>{renderModeButtons()}</FlexRow>
      {mode === "upgrade" && (
        <Update selectedKey={selectedKey} handleUpgrade={handleUpgrade} />
      )}
      {mode === "register" && <Create handleRegister={handleRegister} />}
    </Center>
  );
}

import React, { useReducer } from "react";
import { Button, Flex } from "antd";
const style = {
  width: "100px",
  height: "100px",
  border: "1px solid black",
  color: "white",
};

const initialState = { color: "black" };

const colorReducer = (state, action) => {
  return { ...state, color: action.color || state.color };
};

const ChangeColor = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  const handleClick = (color) => dispatch({ color });

  return (
    <>
      <div style={{ ...style, backgroundColor: state.color }}>
        안녕하세요!!!
      </div>
      <Flex>
        <Button type="primary" onClick={() => handleClick("red")}>
          red
        </Button>
        <Button on type="primary" onClick={() => handleClick("blue")}>
          blue
        </Button>
      </Flex>
    </>
  );
};

export default ChangeColor;

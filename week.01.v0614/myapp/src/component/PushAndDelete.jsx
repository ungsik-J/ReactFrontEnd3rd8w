import React, { useEffect, useRef, useState } from "react";

const data = [];

const PushAndDelete = (props) => {

    const { name, setName, handleEnter, handleOnClick } = props;


    return (
        <>
            <input type="text" name="name" value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyUp={(e) => handleEnter(e)}
            />
            <button onClick={handleOnClick}>추가</button>
        </>
    )
};

export default PushAndDelete;

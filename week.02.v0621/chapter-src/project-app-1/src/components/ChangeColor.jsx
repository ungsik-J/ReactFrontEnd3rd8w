import React, { useState, useReducer } from 'react'


const style ={
    width: "100px",
    height: "100px",
    backgroundColor: 'black',
    border: "1px solid black",
    color: "white",
}

const initialState = {color: 'black'}

const colorReducer = (state, action) => {
    switch(action.type){
        case "RED": 
            return {...state, color:'red'}
        case "BLUE":
            return {...state, color: 'blue'}

        default:
            return state;
    }
}


const ChangeColor = () => {
    const [state, dispatch] = useReducer(colorReducer, initialState);
    const handleClick = (param) => {
        param === "red" ? dispatch({type:"RED"}) : dispatch({type:"BLUE"})
    }

  return (
    <>
        <div style={{...style, backgroundColor: state.color}}>안녕하세요!!!</div>
        <button onClick={()=>handleClick('red')}>red</button>
        <button onClick={()=>handleClick('blue')}>blue</button>
        
    </>
  )
}

export default ChangeColor;
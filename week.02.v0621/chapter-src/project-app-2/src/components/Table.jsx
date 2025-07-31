import React, { useState } from 'react'
import Tr from './Tr';
import { useEffect } from 'react';

const data = [
    {name: "john", age: 35, email: "john@example.com", city: "Seoul"},
    {name: "peter", age: 35, email: "peter@example.com", city: "Seoul"},
    {name: "sue", age: 35, email: "sue@example.com", city: "Seoul"},
]

const Table = ({obj}) => {

    const [infos, setInfos] = useState(data);

    useEffect(()=>{ 
        // 비동기 처리 
      obj && setInfos(prev=>[...prev, obj])
    }, [obj])//의존성 넣는곳(상태 또는 props)
    
  return (
    <>
        <table border='1'>
            <thead>
                <tr>
                    {Object.keys(infos[0]).map(item=>(<th>{item}</th>))}
                </tr>
            </thead>
            <tbody>
                {infos.map(item => (<Tr item={item}/>))}
            </tbody>
                
        </table>
    </>
  )
}

export default Table
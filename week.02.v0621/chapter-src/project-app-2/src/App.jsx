
import './App.css'
import Form from './components/Form'
import Table from './components/Table'
import { useState } from 'react'


const App = () => {
  
  const [obj, setObj] = useState(null)

  //자식에게 전달하여 데이터를 받는 함수
  const getData = (data) =>{
    setObj(data);
  }
  
  return (
    <>
      <Form getData={getData}/><br/><br/>
      <Table obj={obj}/>     
    </>
  )
}

export default App


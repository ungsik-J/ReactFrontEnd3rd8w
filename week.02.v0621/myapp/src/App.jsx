import { useState } from 'react'
import './App.css'

import UseEffect from './component/UseEffect'
//import ProductList from './component / ProductList'
import UserList from './component/UserList'

import ProductList from './reducers/ProductList'

import ChangeColor from './component/ChangeColor'

function App() {

  useState;
  /** UseEffect ****************************************************************
  const [visible, setVisible] = useState(false)
    return (
      <>
        <div>
          <div>
            <button onClick={() => { setVisible(!visible) }}>
              {visible ? "hide" : "show"}
            </button>
          </div>
          <div>{visible && <UseEffect />}</div>
        </div>
      </>
    )
  *************************************************************************** */
  return (
    <>
      <ChangeColor />
    </>
  )
}

export default App

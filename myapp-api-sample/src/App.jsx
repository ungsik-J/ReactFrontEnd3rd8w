import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClienApp from '../client/src/ClienApp'


import UseState from './api/hooks/useState'
import UseEffect from './api/hooks/UseEffect'
import UseCallback from './api/hooks/UseCallback'
import UseReducer from './api/hooks/UseReducer'
import UseContext from './api/hooks/UseContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseContext />
    </>
  )
}

export default App

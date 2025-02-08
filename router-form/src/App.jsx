import './App.css'
import Form from './components/Form'
import Success from './components/Success'
import {Route, Routes} from "react-router"

function App() {

  return (

<Routes>
  <Route path='/' element={<Form/>}/>
  <Route path='/' element={<Success/>}/>
</Routes>
  )
}

export default App

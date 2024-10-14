import './App.css'
import Landing from './Pages/Landing/Landing'
// importing routers
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelfDirect from "./Pages/Landing/SelfDirect"
import Subjects from "./Pages/Landing/Subjects"
// page for in the case of any errors
import NoPage from './Pages/Landing/NoPage'

function App() {

  return (
    <>
      <div className='app-container'>

        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Landing />} />
            <Route path = "/Landing" element = {<Landing/>} />
            <Route path = "/SelfDirect" element = {<SelfDirect/>} />
            <Route path = "/Subjects" element = {<Subjects/>} />
            <Route path = "*" element = {<NoPage />} />
          </Routes>
        </BrowserRouter>
        


      </div>
    </>
  )
}

export default App

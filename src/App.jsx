/* eslint-disable no-unused-vars */
import "./App.css";
import Landing from "./Pages/Landing/Landing";
// importing routers
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// page for in the case of any errors
import SelfDirect from "./Pages/Landing/SelfDirect"

//import NoPage from './Pages/Landing/NoPage'
import Subjects from './Pages/Landing/Subjects'


function App() {
  return (
    <>
      <div className='app-container'>

        <Router>
          <Routes>
            <Route path = "/" element = {<Landing />} />
            <Route path = "/Subjects" element = {<Subjects />} />
            <Route path = "/Self-Direct" element = {<SelfDirect/>} />
            
          </Routes>
        </Router> 

       {/* < Landing />
        <Route path = "/Subjects" element = {<Subjects/>} />
            <Route path = "*" element = {<NoPage />} />

        <SelfDirect />

        <NoPage />

        <Subjects />*/}
        

      </div>
    </>
  );
}

export default App;

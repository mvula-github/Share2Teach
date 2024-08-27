import './App.css';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/SignUp/SignUp';
import PasswordReset from './Pages/PasswordReset/PasswordReset';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"element={
         <>
           <Landing />
           <SignUp />
         </>
        } />
        <Route path="/reset-password"element={<PasswordReset/>} />
      </Routes>
    </Router>
    
    /*
       <Landing />
        <SignUp />
        */
   
  );
};

export default App;

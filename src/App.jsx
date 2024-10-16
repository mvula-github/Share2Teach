import './App.css';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/SignUp/SignUp';
import PasswordReset from './Pages/PasswordReset/PasswordReset';
import OER from './Pages/OER/OER';
import AboutUs from './Pages/AboutUs/AboutUs'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <Router>
      {/*<Navigation /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/oer" element={<OER />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/SignUp/SignUp';
import PasswordReset from './Pages/PasswordReset/PasswordReset';
import OER from './Pages/OER/OER';
import AboutUs from './Pages/AboutUs/AboutUs'; // Step 1: Import the About Us component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation'; // Example path


function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            {/*<SignUp />*/}
        
            
          </>
        } />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/oer" element={<OER />} /> {/* Add route for OER */}
        <Route path="/about-us" element={<AboutUs />} /> {/* Step 3: Add route for About Us */} 
      </Routes>
    </Router>
  );
}

export default App;

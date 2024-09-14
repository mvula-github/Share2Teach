import './App.css';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/SignUp/SignUp';
import PasswordReset from './Pages/PasswordReset/PasswordReset';
import OER from './Pages/OER/OER'; // Import the OER component
import Navigation from './Components/Navigation'; // Import the Navigation component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation /> {/* Add Navigation component */}
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <SignUp />
          </>
        } />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/oer" element={<OER />} /> {/* Add route for OER */}
      </Routes>
    </Router>
  );
}

export default App;

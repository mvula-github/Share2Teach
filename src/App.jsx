import './App.css';
import Landing from './Pages/Landing/Landing';
import SignUp from './Pages/SignUp/SignUp';
import PasswordReset from './Pages/PasswordReset/PasswordReset';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';




function App() {

  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/reset-password" element={<PasswordReset />} />
        </Routes>
        </div> 
        {/*<Landing />
        <SignUp />*/}
    </Router>
  );
};

export default App;

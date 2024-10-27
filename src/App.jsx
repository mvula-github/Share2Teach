import "./App.css";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelfDirect from "./Pages/Landing/SelfDirect";
import Subjects from "./Pages/Landing/Subjects";

function App() {
  return (
    <>
      <div className="app-container">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Subjects" element={<Subjects />} />
            <Route path="/Self-Direct" element={<SelfDirect />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Attorneys from './Attorneys';
import Contactus from './Contactus';
import Justice from './Justice';
import Practiseareas from './Practiseareas';
import Service from './Service';
import Navbar from "./navbar";
import "./navbar.css"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Justice />} />
          <Route path='/service' element={<Service />} />
          <Route path="/practiseareas" element={<Practiseareas />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

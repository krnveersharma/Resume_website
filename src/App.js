import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/skills" element={<Skills/>} />
      <Route exact path="/projects" element={<Projects/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;

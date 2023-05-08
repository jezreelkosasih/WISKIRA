// Import CSS
import '../src/css/style.css';

// Import Pages
import Home from "./pages/Home";
import About from './pages/About';

// Import React Stuff
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

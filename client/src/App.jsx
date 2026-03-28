import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AnimatedRoutes from './AnimatedRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App;

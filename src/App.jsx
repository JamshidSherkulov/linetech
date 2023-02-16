import './App.css';
import { Outlet } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Outlet />
     <Footer />
    </div>
  );
}

export default App;

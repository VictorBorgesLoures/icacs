import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  
  return (
    <>
        <h1 className="text-center">ICACS</h1>
        <Link to="app">Go to Application</Link>
        <Outlet />
    </>
  )
}

export default App

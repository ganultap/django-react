import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter, Route, Routes ,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark">
      <a className="btn" href="/home"><img src="https://i.ibb.co/tZTTTDJ/dp-logo.png" width="60px" height="60px"/></a>
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
          
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/department" element={<Department />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

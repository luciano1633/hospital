import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>🏥 Hospital</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/patients" 
              className={`navbar-link ${location.pathname === '/patients' ? 'active' : ''}`}
            >
              Lista de Pacientes
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              Acerca de
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
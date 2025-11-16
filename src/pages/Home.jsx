import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Sistema de Gestión Hospitalaria</h1>
          <p>Bienvenido al sistema de gestión de pacientes del hospital. 
             Aquí puedes consultar información de pacientes de manera rápida y eficiente.</p>
          <div className="hero-buttons">
            <Link to="/patients" className="btn-primary">
              Ver Lista de Pacientes
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hospital-icon">🏥</div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2>Características del Sistema</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Gestión de Pacientes</h3>
              <p>Consulta y gestiona la información completa de todos los pacientes del hospital.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Búsqueda Rápida</h3>
              <p>Encuentra pacientes específicos utilizando nuestro sistema de búsqueda avanzado.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Información Detallada</h3>
              <p>Accede a información detallada como edad, número de paciente y diagnóstico.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Interfaz Rápida</h3>
              <p>Sistema optimizado para un acceso rápido y eficiente a la información.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Pacientes Registrados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Acceso al Sistema</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Seguridad de Datos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h1>Acerca del Sistema</h1>
          <p style={{color: '#000000', fontWeight: '500'}}>Sistema de Gestión Hospitalaria - Información del Proyecto</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <div className="section-icon">🏥</div>
            <h2>Sobre el Proyecto</h2>
            <p style={{color: '#000000', fontWeight: '500'}}>
              Este es un sistema de gestión hospitalaria desarrollado con React, diseñado para 
              facilitar la consulta y administración de información de pacientes en un entorno 
              hospitalario. El sistema proporciona una interfaz intuitiva y moderna para el 
              personal médico y administrativo.
            </p>
          </div>

          <div className="tech-section">
            <h2>Tecnologías Utilizadas</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">⚛️</div>
                <h3>React</h3>
                <p style={{color: '#000000', fontWeight: '500'}}>Biblioteca de JavaScript para construir interfaces de usuario interactivas</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">🎨</div>
                <h3>CSS3</h3>
                <p style={{color: '#000000', fontWeight: '500'}}>Estilos modernos con diseño responsivo y animaciones fluidas</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">🛣️</div>
                <h3>React Router</h3>
                <p style={{color: '#000000', fontWeight: '500'}}>Navegación entre páginas y gestión de rutas en la aplicación</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">🔧</div>
                <h3>Vite</h3>
                <p style={{color: '#000000', fontWeight: '500'}}>Herramienta de desarrollo rápida y moderna para aplicaciones web</p>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h2>Características Principales</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">📋</div>
                <div className="feature-content">
                  <h3>Lista de Pacientes</h3>
                  <p style={{color: '#000000', fontWeight: '500'}}>Visualización completa de todos los pacientes registrados con información básica</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <div className="feature-content">
                  <h3>Búsqueda Avanzada</h3>
                  <p style={{color: '#000000', fontWeight: '500'}}>Sistema de búsqueda por nombre, número de paciente o diagnóstico</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <div className="feature-content">
                  <h3>Detalles del Paciente</h3>
                  <p style={{color: '#000000', fontWeight: '500'}}>Vista detallada con información completa de cada paciente</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <div className="feature-content">
                  <h3>Diseño Responsivo</h3>
                  <p style={{color: '#000000', fontWeight: '500'}}>Interfaz adaptable a diferentes dispositivos y tamaños de pantalla</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h3>Backend Mock</h3>
                  <p style={{color: '#000000', fontWeight: '500'}}>API simulada para pruebas y desarrollo sin necesidad de servidor real</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-content">
                  <h3>Navegación Intuitiva</h3>
                  <p style={{color: '#000000', fontWeight: '500'}}>Navegación clara y fácil de usar con React Router</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-info">
            <h2>Información del Desarrollo</h2>
            <div className="info-grid">
              <div className="info-item">
                <h4>Tipo de Proyecto</h4>
                <p style={{color: '#000000', fontWeight: '500'}}>Aplicación Web SPA (Single Page Application)</p>
              </div>
              <div className="info-item">
                <h4>Propósito</h4>
                <p style={{color: '#000000', fontWeight: '500'}}>Sistema educativo para gestión hospitalaria</p>
              </div>
              <div className="info-item">
                <h4>Estado</h4>
                <p style={{color: '#000000', fontWeight: '500'}}>Proyecto de demostración funcional</p>
              </div>
              <div className="info-item">
                <h4>Versión</h4>
                <p style={{color: '#000000', fontWeight: '500'}}>1.0.0</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Datos del Proyecto</h2>
            <div className="contact-card">
              <div className="contact-info">
                <h3>Proyecto Académico</h3>
                <p>Sistema de Gestión Hospitalaria</p>
                <p>Desarrollado como parte del curriculum académico</p>
                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-label">Tecnologías:</span>
                    <span className="detail-value">React, CSS, JavaScript, React Router</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tipo:</span>
                    <span className="detail-value">Aplicación Web Frontend</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Backend:</span>
                    <span className="detail-value">Mock API / REST simulado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
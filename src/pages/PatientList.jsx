import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockAPI } from '../data/mockAPI';
import './PatientList.css';

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    loadPatients();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPatients(patients);
    } else {
      const filtered = patients.filter(patient => 
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.patientNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPatients(filtered);
    }
  }, [searchTerm, patients]);

  const loadPatients = async (isRetry = false) => {
    try {
      if (isRetry) {
        setIsRetrying(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      const response = await mockAPI.getAllPatients();
      setPatients(response.data);
      setFilteredPatients(response.data);
      setLastUpdate(new Date());
      setRetryCount(0); // Reset retry count on success
      
    } catch (error) {
      console.error('Error loading patients:', error);
      setError({
        ...error,
        canRetry: error.status !== 400, // Don't retry on client errors
        retryCount: retryCount + 1
      });
      setRetryCount(prev => prev + 1);
      
      // Auto-retry for server errors (500, 503) up to 3 times
      if (error.status >= 500 && retryCount < 2) {
        setTimeout(() => {
          loadPatients(true);
        }, 2000 * (retryCount + 1)); // Exponential backoff
      }
    } finally {
      setLoading(false);
      setIsRetrying(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusClass = status === 'Activo' ? 'status-active' : 'status-recovery';
    return <span className={`status-badge ${statusClass}`}>{status}</span>;
  };

  // Error state with recovery options
  if (error && !loading) {
    return (
      <div className="patient-list">
        <div className="container">
          <div className="error-state">
            <div className="error-icon">⚠️</div>
            <h2>Error al cargar los pacientes</h2>
            <p className="error-message">{error.message}</p>
            {error.details && (
              <p className="error-details">{error.details}</p>
            )}
            
            <div className="error-actions">
              {error.canRetry && (
                <button 
                  onClick={() => loadPatients(true)} 
                  className="btn-retry"
                  disabled={isRetrying}
                >
                  {isRetrying ? 'Reintentando...' : 'Reintentar'}
                </button>
              )}
              <button 
                onClick={() => window.location.reload()} 
                className="btn-refresh"
              >
                Actualizar Página
              </button>
            </div>
            
            {error.suggestions && (
              <div className="error-suggestions">
                <h4>Sugerencias:</h4>
                <ul>
                  {error.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="error-info">
              <small>Intento #{error.retryCount} | Código: {error.status}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="patient-list">
        <div className="loading">
          <div className="loading-spinner"></div>
          <div className="loading-content">
            <p>Cargando pacientes...</p>
            {retryCount > 0 && (
              <small>Reintentando conexión... (Intento {retryCount + 1})</small>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-list">
      <div className="container">
        <div className="page-header">
          <div className="header-content">
            <div className="title-section">
              <h1>Lista de Pacientes</h1>
              <p>Gestiona y consulta la información de los pacientes del hospital</p>
              {lastUpdate && (
                <small className="last-update">
                  Última actualización: {lastUpdate.toLocaleTimeString('es-ES')}
                </small>
              )}
            </div>
            <div className="header-actions">
              <button 
                onClick={() => loadPatients()}
                className="btn-refresh-data"
                disabled={loading || isRetrying}
                title="Actualizar datos"
              >
                {isRetrying ? '🔄' : '↻'} {loading || isRetrying ? 'Actualizando...' : 'Actualizar'}
              </button>
            </div>
          </div>
        </div>

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar por nombre, número de paciente o diagnóstico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">🔍</div>
          </div>
        </div>

        <div className="patients-stats">
          <div className="stat">
            <span className="stat-number">{filteredPatients.length}</span>
            <span className="stat-label">
              {searchTerm ? 'Resultados' : 'Total Pacientes'}
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {filteredPatients.filter(p => p.status === 'Activo').length}
            </span>
            <span className="stat-label">Activos</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {filteredPatients.filter(p => p.status === 'Recuperación').length}
            </span>
            <span className="stat-label">En Recuperación</span>
          </div>
        </div>

        {filteredPatients.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No se encontraron pacientes</h3>
            <p>
              {searchTerm 
                ? `No hay pacientes que coincidan con "${searchTerm}"`
                : 'No hay pacientes registrados en el sistema'
              }
            </p>
          </div>
        ) : (
          <div className="patients-grid">
            {filteredPatients.map(patient => (
              <div key={patient.id} className="patient-card">
                <div className="patient-header">
                  <div className="patient-avatar">
                    {patient.gender === 'Femenino' ? '👩‍⚕️' : '👨‍⚕️'}
                  </div>
                  <div className="patient-basic-info">
                    <h3>{patient.name}</h3>
                    <p className="patient-number">{patient.patientNumber}</p>
                  </div>
                  {getStatusBadge(patient.status)}
                </div>
                
                <div className="patient-details">
                  <div className="detail-row">
                    <span className="detail-label">Edad:</span>
                    <span className="detail-value">{patient.age} años</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Diagnóstico:</span>
                    <span className="detail-value">{patient.diagnosis}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Habitación:</span>
                    <span className="detail-value">{patient.room}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Ingreso:</span>
                    <span className="detail-value">
                      {new Date(patient.admissionDate).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                </div>

                <div className="patient-actions">
                  <Link 
                    to={`/patients/${patient.id}`} 
                    className="btn-view-details"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientList;
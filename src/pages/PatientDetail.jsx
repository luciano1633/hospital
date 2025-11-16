import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockAPI } from '../data/mockAPI';
import './PatientDetail.css';

function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    loadPatient();
  }, [id]);

  const loadPatient = async (isRetry = false) => {
    try {
      if (isRetry) {
        setIsRetrying(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      const response = await mockAPI.getPatientById(id);
      setPatient(response.data);
      setLastUpdate(new Date());
      setRetryCount(0);
      
    } catch (error) {
      console.error('Error loading patient:', error);
      setError({
        ...error,
        canRetry: error.status !== 400 && error.status !== 404,
        retryCount: retryCount + 1
      });
      setRetryCount(prev => prev + 1);
      
      // Auto-retry for server errors (500, 503)
      if (error.status >= 500 && retryCount < 2) {
        setTimeout(() => {
          loadPatient(true);
        }, 1500 * (retryCount + 1));
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

  const calculateDaysInHospital = (admissionDate) => {
    const admission = new Date(admissionDate);
    const today = new Date();
    const diffTime = Math.abs(today - admission);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="patient-detail">
        <div className="container">
          <div className="loading">
            <div className="loading-spinner"></div>
            <div className="loading-content">
              <p>Cargando información del paciente...</p>
              {retryCount > 0 && (
                <small>Reintentando conexión... (Intento {retryCount + 1})</small>
              )}
              <small>ID del paciente: {id}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patient-detail">
        <div className="container">
          <div className="error-message">
            <div className="error-icon">
              {error.status === 404 ? '🔍' : error.status >= 500 ? '⚙️' : '⚠️'}
            </div>
            <h3>
              {error.status === 404 ? 'Paciente no encontrado' : 
               error.status >= 500 ? 'Error del servidor' : 
               'Error al cargar el paciente'}
            </h3>
            <p className="error-message-text">{error.message}</p>
            {error.details && (
              <p className="error-details">{error.details}</p>
            )}
            
            <div className="error-info">
              <small>ID solicitado: {id} | Código de error: {error.status} | Intento #{error.retryCount}</small>
            </div>
            
            <div className="error-actions">
              {error.canRetry && (
                <button 
                  onClick={() => loadPatient(true)} 
                  className="btn-retry"
                  disabled={isRetrying}
                >
                  {isRetrying ? 'Reintentando...' : 'Reintentar'}
                </button>
              )}
              <Link to="/patients" className="btn-back">
                Volver a la Lista
              </Link>
              {error.status === 404 && (
                <button 
                  onClick={() => navigate('/patients')}
                  className="btn-search-all"
                >
                  Buscar en Todos los Pacientes
                </button>
              )}
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
          </div>
        </div>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="patient-detail">
        <div className="container">
          <div className="not-found">
            <div className="not-found-icon">🔍</div>
            <h3>Paciente no encontrado</h3>
            <p>El paciente con ID {id} no existe en el sistema.</p>
            <Link to="/patients" className="btn-back">
              Volver a la Lista
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="patient-detail">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Inicio</Link>
          <span>›</span>
          <Link to="/patients">Pacientes</Link>
          <span>›</span>
          <span>{patient.name}</span>
        </div>

        <div className="patient-header">
          <button onClick={() => navigate(-1)} className="btn-back-small">
            ← Volver
          </button>
          <div className="header-content">
            <div className="patient-avatar-large">
              {patient.gender === 'Femenino' ? '👩‍⚕️' : '👨‍⚕️'}
            </div>
            <div className="patient-title">
              <h1>{patient.name}</h1>
              <p className="patient-number">{patient.patientNumber}</p>
              {getStatusBadge(patient.status)}
              {lastUpdate && (
                <small className="last-update">
                  Actualizado: {lastUpdate.toLocaleTimeString('es-ES')}
                </small>
              )}
            </div>
            <div className="header-actions">
              <button 
                onClick={() => loadPatient(true)}
                className="btn-refresh-patient"
                disabled={isRetrying}
                title="Actualizar información del paciente"
              >
                {isRetrying ? '🔄' : '↻'}
              </button>
            </div>
          </div>
        </div>

        <div className="patient-content">
          <div className="info-grid">
            <div className="info-section">
              <h3>Información Personal</h3>
              <div className="info-card">
                <div className="info-row">
                  <span className="info-label">Nombre Completo:</span>
                  <span className="info-value">{patient.name}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Número de Paciente:</span>
                  <span className="info-value">{patient.patientNumber}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Edad:</span>
                  <span className="info-value">{patient.age} años</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Género:</span>
                  <span className="info-value">{patient.gender}</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Información Médica</h3>
              <div className="info-card">
                <div className="info-row">
                  <span className="info-label">Diagnóstico:</span>
                  <span className="info-value diagnosis">{patient.diagnosis}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Estado:</span>
                  <span className="info-value">{getStatusBadge(patient.status)}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Habitación:</span>
                  <span className="info-value room">{patient.room}</span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Información de Ingreso</h3>
              <div className="info-card">
                <div className="info-row">
                  <span className="info-label">Fecha de Ingreso:</span>
                  <span className="info-value">
                    {new Date(patient.admissionDate).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Días Hospitalizado:</span>
                  <span className="info-value days">
                    {calculateDaysInHospital(patient.admissionDate)} días
                  </span>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>Acciones Rápidas</h3>
              <div className="actions-card">
                <div className="action-buttons">
                  <button className="action-btn edit">
                    <span className="action-icon">✏️</span>
                    Editar Información
                  </button>
                  <button className="action-btn history">
                    <span className="action-icon">📋</span>
                    Ver Historial
                  </button>
                  <button className="action-btn appointment">
                    <span className="action-icon">📅</span>
                    Programar Cita
                  </button>
                </div>
                <p className="actions-note">
                  * Estas funciones estarían disponibles en un sistema completo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetail;
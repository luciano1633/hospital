// Mock data for hospital patients
export const patients = [
  {
    id: 1,
    patientNumber: "PAC001",
    name: "María González",
    age: 34,
    gender: "Femenino",
    diagnosis: "Hipertensión",
    room: "101A",
    admissionDate: "2024-11-10",
    status: "Activo"
  },
  {
    id: 2,
    patientNumber: "PAC002", 
    name: "Carlos Rodríguez",
    age: 45,
    gender: "Masculino",
    diagnosis: "Diabetes Tipo 2",
    room: "102B",
    admissionDate: "2024-11-12",
    status: "Activo"
  },
  {
    id: 3,
    patientNumber: "PAC003",
    name: "Ana López",
    age: 28,
    gender: "Femenino", 
    diagnosis: "Embarazo de alto riesgo",
    room: "201A",
    admissionDate: "2024-11-08",
    status: "Activo"
  },
  {
    id: 4,
    patientNumber: "PAC004",
    name: "José Martínez",
    age: 67,
    gender: "Masculino",
    diagnosis: "Neumonía",
    room: "103C",
    admissionDate: "2024-11-14",
    status: "Recuperación"
  },
  {
    id: 5,
    patientNumber: "PAC005",
    name: "Elena Silva",
    age: 52,
    gender: "Femenino",
    diagnosis: "Artritis Reumatoide",
    room: "202B",
    admissionDate: "2024-11-09",
    status: "Activo"
  },
  {
    id: 6,
    patientNumber: "PAC006",
    name: "Roberto Herrera",
    age: 41,
    gender: "Masculino",
    diagnosis: "Fractura de tibia",
    room: "301A",
    admissionDate: "2024-11-13",
    status: "Recuperación"
  }
];

// Mock API functions with enhanced error handling and server simulation
export const mockAPI = {
  // Simulate server errors randomly for testing
  _shouldSimulateError: () => {
    // 5% chance of server error for demonstration
    return Math.random() < 0.05;
  },

  // Get all patients
  getAllPatients: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server errors occasionally
        if (mockAPI._shouldSimulateError()) {
          reject({
            status: 500,
            message: "Error interno del servidor. Por favor, inténtelo de nuevo más tarde.",
            details: "No se pudo conectar con la base de datos de pacientes"
          });
          return;
        }

        resolve({
          data: patients,
          status: 200,
          message: "Pacientes obtenidos exitosamente",
          timestamp: new Date().toISOString()
        });
      }, Math.random() * 800 + 200); // Variable network delay (200-1000ms)
    });
  },

  // Get patient by ID with enhanced error handling
  getPatientById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate input
        if (!id || isNaN(parseInt(id))) {
          reject({
            status: 400,
            message: "ID de paciente inválido",
            details: "El ID debe ser un número válido"
          });
          return;
        }

        // Simulate server errors occasionally
        if (mockAPI._shouldSimulateError()) {
          reject({
            status: 500,
            message: "Error interno del servidor al buscar el paciente",
            details: "Problema temporal en la base de datos. Inténtelo nuevamente."
          });
          return;
        }

        const patient = patients.find(p => p.id === parseInt(id));
        if (patient) {
          resolve({
            data: patient,
            status: 200,
            message: "Paciente encontrado exitosamente",
            timestamp: new Date().toISOString()
          });
        } else {
          reject({
            status: 404,
            message: "Paciente no encontrado",
            details: `No existe ningún paciente con el ID: ${id}`,
            suggestions: ["Verifique el ID del paciente", "Consulte la lista completa de pacientes"]
          });
        }
      }, Math.random() * 600 + 200);
    });
  },

  // Search patients with enhanced functionality
  searchPatients: (searchTerm) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Validate input
        if (typeof searchTerm !== 'string') {
          reject({
            status: 400,
            message: "Término de búsqueda inválido",
            details: "El término de búsqueda debe ser texto"
          });
          return;
        }

        // Simulate server errors occasionally
        if (mockAPI._shouldSimulateError()) {
          reject({
            status: 500,
            message: "Error en el servicio de búsqueda",
            details: "Problema temporal en el sistema de búsqueda. Inténtelo de nuevo."
          });
          return;
        }

        const trimmedTerm = searchTerm.trim().toLowerCase();
        
        if (trimmedTerm.length === 0) {
          resolve({
            data: patients,
            status: 200,
            message: "Mostrando todos los pacientes",
            searchTerm: ""
          });
          return;
        }

        const filteredPatients = patients.filter(patient => 
          patient.name.toLowerCase().includes(trimmedTerm) ||
          patient.patientNumber.toLowerCase().includes(trimmedTerm) ||
          patient.diagnosis.toLowerCase().includes(trimmedTerm) ||
          patient.room.toLowerCase().includes(trimmedTerm)
        );
        
        resolve({
          data: filteredPatients,
          status: 200,
          message: `${filteredPatients.length} paciente${filteredPatients.length !== 1 ? 's' : ''} encontrado${filteredPatients.length !== 1 ? 's' : ''}`,
          searchTerm: searchTerm,
          totalResults: filteredPatients.length,
          timestamp: new Date().toISOString()
        });
      }, Math.random() * 500 + 100); // Faster search response
    });
  },

  // Health check endpoint for connection testing
  healthCheck: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.1) { // 10% chance of service unavailable
          reject({
            status: 503,
            message: "Servicio temporalmente no disponible",
            details: "El sistema está en mantenimiento. Inténtelo en unos minutos."
          });
        } else {
          resolve({
            status: 200,
            message: "Sistema operativo",
            timestamp: new Date().toISOString(),
            uptime: "99.9%"
          });
        }
      }, 100);
    });
  }
};
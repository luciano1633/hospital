# Hospital Patient Management System - Copilot Instructions

This is a complete React-based hospital patient management application that allows users to view and manage patient information.

## Project Overview
- **Type**: Single Page Application (SPA)
- **Frontend**: React 19.2.0 with React Router for navigation
- **Styling**: Custom CSS with responsive design
- **Backend**: Mock REST API for patient data simulation
- **Build Tool**: Vite for fast development and building

## Architecture
```
src/
├── components/     # Reusable UI components (Navbar)
├── pages/         # Main application pages (Home, PatientList, PatientDetail, About)
├── data/          # Mock API and data management
├── App.jsx        # Main application component with routing
└── main.jsx       # Application entry point
```

## Key Features Implemented
✅ Patient list view with search functionality
✅ Individual patient detail pages
✅ Responsive navigation with React Router
✅ Mock REST API with realistic hospital data
✅ Professional hospital-themed UI/UX
✅ Responsive design for all devices
✅ Search and filter capabilities
✅ Loading states and error handling

## Development Guidelines
- Use functional components with React hooks
- Implement React Router for all navigation
- Follow the established CSS naming conventions
- Maintain the hospital theme color palette
- Ensure all components are responsive
- Use the mock API for all data operations
- Follow the established file structure

## Mock API Functions
- `mockAPI.getAllPatients()` - Get all patients
- `mockAPI.getPatientById(id)` - Get specific patient
- `mockAPI.searchPatients(term)` - Search patients

## CSS Variables
- Primary: #2c3e50
- Secondary: #3498db
- Accent: #e74c3c
- Success: #27ae60
- Background: #f8f9fa

Project is ready for development and deployment.
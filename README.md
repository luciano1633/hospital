# 🏥 Sistema de Gestión Hospitalaria

Una aplicación web moderna para la gestión de pacientes hospitalarios, desarrollada con React, CSS, JavaScript y React Router.

## 📋 Descripción del Proyecto

Este sistema permite a los usuarios consultar y gestionar información de pacientes en un entorno hospitalario. Incluye funcionalidades para:

- **Lista de Pacientes**: Visualización completa de todos los pacientes registrados
- **Detalles del Paciente**: Información detallada de cada paciente individual
- **Búsqueda**: Sistema de búsqueda por nombre, número de paciente o diagnóstico
- **Backend Mock**: API REST simulada para pruebas y desarrollo
- **Navegación**: Implementación de React Router para una experiencia fluida

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 19.2.0
- **Routing**: React Router Dom 6.26.2
- **Build Tool**: Vite 7.2.2
- **Styling**: CSS3 con diseño responsivo
- **Linting**: ESLint para calidad de código
- **Mock Backend**: JavaScript con simulación de API REST

## 📁 Estructura del Proyecto

```
hospital/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── PatientList.jsx
│   │   ├── PatientList.css
│   │   ├── PatientDetail.jsx
│   │   ├── PatientDetail.css
│   │   ├── About.jsx
│   │   └── About.css
│   ├── data/
│   │   └── mockAPI.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── copilot-instructions.md
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 16.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/usuario/hospital-nombre-apellido-siglaCurso.git
   cd hospital-nombre-apellido-siglaCurso
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y visita `http://localhost:3000`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta ESLint para verificar el código

## 🎯 Funcionalidades Principales

### 🏠 Página de Inicio
- Presentación del sistema hospitalario
- Estadísticas rápidas
- Acceso directo a funcionalidades principales
- Diseño atractivo con información del sistema

### 👥 Lista de Pacientes
- Visualización de todos los pacientes registrados
- Información básica: nombre, edad, número de paciente
- Tarjetas informativas con estado del paciente
- Búsqueda en tiempo real por nombre, número o diagnóstico
- Estadísticas dinámicas (total, activos, en recuperación)

### 👤 Detalles del Paciente
- Información completa del paciente seleccionado
- Datos personales, médicos y de ingreso
- Navegación con breadcrumbs
- Cálculo automático de días hospitalizado
- Acciones rápidas (placeholder para funcionalidades futuras)

### 🔍 Sistema de Búsqueda
- Búsqueda instantánea mientras escribes
- Filtrado por múltiples campos
- Resultados destacados visualmente

## 📊 Backend Mock (API Simulada)

El sistema incluye una API REST simulada con las siguientes funciones:

- `getAllPatients()` - Obtiene todos los pacientes
- `getPatientById(id)` - Obtiene un paciente específico
- `searchPatients(term)` - Busca pacientes por término

### Datos de Ejemplo
El sistema incluye 6 pacientes de prueba con información diversa para demostrar todas las funcionalidades.

## 🎨 Diseño y UI/UX

- **Diseño Responsivo**: Adaptable a móviles, tablets y desktop
- **Colores Hospitalarios**: Paleta profesional y amigable
- **Navegación Intuitiva**: Barra de navegación clara con estado activo
- **Animaciones Suaves**: Transiciones y efectos visuales agradables
- **Accesibilidad**: Diseño pensado para uso profesional

## 🔧 Configuración de Desarrollo

### Estructura de Carpetas
- `src/components/` - Componentes reutilizables
- `src/pages/` - Páginas principales de la aplicación
- `src/data/` - Mock API y datos de prueba
- `src/assets/` - Recursos estáticos

### Estándares de Código
- ESLint configurado para React
- Prettier para formateo consistente
- Componentes funcionales con hooks
- CSS modular por componente

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Previsualización Local
```bash
npm run preview
```

## 📝 Características Técnicas

- **SPA (Single Page Application)** con React Router
- **Estado Local** manejado con React Hooks
- **Componentización** modular y reutilizable
- **CSS Personalizado** sin frameworks externos
- **Mock Backend** para desarrollo independiente
- **Responsive Design** mobile-first

## 🎓 Propósito Educativo

Este proyecto fue desarrollado como parte del curriculum académico para demostrar:
- Conocimientos en React y JavaScript moderno
- Implementación de React Router
- Diseño de interfaces responsivas
- Simulación de APIs REST
- Mejores prácticas en desarrollo frontend

## 📧 Información Académica

- **Proyecto**: Sistema de Gestión Hospitalaria
- **Tecnologías**: HTML, CSS, JavaScript, React, React Router
- **Tipo**: Aplicación Web Frontend con Backend Mock
- **Estado**: Proyecto de demostración funcional

---

Desarrollado con ❤️ para la gestión hospitalaria moderna

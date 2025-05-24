# Proyecto Dashboard SPA

Una aplicación de panel de control (Dashboard) moderna y responsive, construida con React, Tailwind CSS y Vite, que incluye funcionalidades de Analytics, Gestión de Facturas, Nómina, Chatbot y Configuración de Usuario con modo claro/oscuro.

---

## 📝 Contenido

1. [Características](#-características)  
2. [Tecnologías](#-tecnologías)  
3. [Instalación](#-instalación)  
4. [Estructura del Proyecto](#-estructura-del-proyecto)  
5. [Uso](#-uso)  
6. [Metodologías](#-metodologías)  
7. [Mejoras Futuras](#-mejoras-futuras)  
8. [Contribuir](#-contribuir)  

---

## 🚀 Características

- **Dashboard con Sidebar y Header**  
  - Navegación entre Analytics, Invoices, Payroll, Chatbot y Settings.  
  - Perfil de usuario, avatar y sección de logout.  
- **Modo Claro/Oscuro**  
  - Toggle persistente en `localStorage`.  
  - Clases Tailwind `dark:` para variantes de estilo.  
- **Analytics Interactivo**  
  - KPIs (Ventas, Ingresos, Nuevos Clientes…).  
  - Gráficos de líneas y barras (`recharts`) responsivos.  
- **Gestión de Facturas**  
  - Tabla filtrable y paginable.  
  - Subcategorías (Todas, Completado, Pendiente, Cancelado).  
- **Chatbot**  
  - Conversación con timestamps, auto-scroll y limpieza de chat.  
  - Avatares de usuario y bot, esquema de burbujas.  
- **Configuración de Usuario**  
  - Editar perfil y cambiar contraseña con formularios elegantes.  
  - Navegación “Volver” a Settings.  
- **Nómina**  
  - Buscador de empleados.  
  - Tabla detallada y gráfico de barras de salarios.  

---

## 🛠️ Tecnologías

- **Framework**: [React](https://reactjs.org/)  
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)  
- **Bundler/Dev Server**: [Vite](https://vitejs.dev/)  
- **Iconos**: [lucide-react](https://lucide.dev/)  
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)  
- **Gráficos**: [Recharts](https://recharts.org/)  
- **Routing**: [React Router](https://reactrouter.com/)  
- **Estado**: Hooks (`useState`, `useEffect`, `useMemo`)  
- **Testing (sugerido)**: Jest + React Testing Library  

---

## ⚙️ Instalación

1. Clona el repositorio  
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instala dependencias
    ```bash
    npm install
    # o
    yarn install
    ```
3. Ejecuta en modo desarrollo
    ```bash
    npm run dev
    # o
    yarn dev
    ```

4. Compila para producción
  ```bash
    npm run build
    # o
    yarn build
    ```

##  📁 Estructura del Proyecto  
```bash
src/
├── api/                 # Configuración de axios u otras APIs
├── components/          # Componentes UI reutilizables
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Table.jsx
│   └── …
├── layouts/             # Layouts de página (DashboardLayout.jsx)
├── pages/               # Vistas principales (AnalyticsPage, InvoicesPage…)
├── hooks/               # Hooks personalizados (useInvoices…)
├── store/               # Estado global (useAuth…)
├── assets/              # Imágenes, fuentes, estilos globales
└── App.jsx              # Enrutamiento y punto de entrada
```

## 🎯 Uso
- Navega con el sidebar para acceder a cada módulo.
- En Analytics, visualiza KPIs y gráficos de tendencia.
- En Invoices, filtra y pagina tu listado de facturas.
- En Payroll, busca empleados y revisa detalles de nómina.
- En Chatbot, mantén conversaciones con auto-scroll y limpieza de chat.
- En Settings, edita tu perfil, cambia la contraseña y alterna el tema.


##  📐 MetMetodologías
- Component-Based Architecture: UI dividida en componentes encapsulados.
- Mobile-First & Responsive: Diseño adaptable usando utilidades de Tailwind.
- Dark/Light Mode: Gestión de tema con clase dark aplicada al <html>.
- State Management con Hooks: Mantiene estado y efectos de forma declarativa.
- Routing SPA: Navegación sin recarga completa de página.

##  🔮 Mejoras Futuras
- Integrar pruebas automáticas (Jest, React Testing Library).
- Añadir internacionalización (i18n) y soporte de múltiples idiomas.
- Mejorar accesibilidad (a11y) con ARIA y navegación por teclado.
- Implementar CI/CD (GitHub Actions, CircleCI).
- Permitir drag-and-drop en dashboard para reorganizar widgets.

##  🤝 Contribuir
- Haz un fork del proyecto.
- Crea una rama de feature (git checkout -b feature/nueva-caracteristica).
- Haz tus cambios y commits (git commit -m 'Agrega nueva característica').
- Envía un push a tu rama (git push origin feature/nueva-caracteristica).
- Abre un Pull Request describiendo tus cambios.


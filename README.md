# Cinema App

## Enlace de clase 30-05-26
https://drive.google.com/file/d/15WSrgDMcBEasKs8L9UlzDGxGS4D5qKSD/view?usp=sharing

Aplicación de ejemplo en React que muestra una interfaz de cine con navegación entre páginas de inicio, información y contacto. Esta guía explica cómo ejecutar el proyecto localmente y qué incluir si deseas colaborar o extender la app.

## 🚀 Características principales

- Proyecto creado con Vite y React 19
- Enrutamiento con `react-router-dom`
- Estilos modulares por componentes
- Dependencia de `bootstrap` para estilos rápidos y responsivos

## 🧰 Requisitos

- Node.js 18 o superior
- npm 10 o superior (o `pnpm`/`yarn` si prefieres)

## ⬇️ Instalación

1. Clona el repositorio o descarga el proyecto.
2. En la carpeta del proyecto ejecuta:

```bash
npm install
```

## ▶️ Ejecutar en modo desarrollo

```bash
npm run dev
```

Luego abre el navegador en la URL que indique Vite (por ejemplo `http://localhost:5173`).

## 📦 Generar versión de producción

```bash
npm run build
```

## 🔍 Vista previa de producción

```bash
npm run preview
```

Esto levanta un servidor local con la versión optimizada de la aplicación.

## 🧹 Lint

```bash
npm run lint
```

Revisa el código con ESLint para detectar problemas de sintaxis y estilo.

## 📁 Estructura del proyecto

- `src/`
  - `components/` — componentes reutilizables como `Navbar`, `Footer`, `Card`, `Stats` y `Accordion`
  - `pages/` — páginas principales de la app (`Home`, `About`, `Contact`)
  - `App.jsx` — punto central de la aplicación y rutas
  - `main.jsx` — entrada principal de React
- `public/` — archivos estáticos que se sirven tal cual
- `vite.config.js` — configuración de Vite
- `package.json` — dependencias y scripts del proyecto

## 🛠 Dependencias principales

- `react` / `react-dom`
- `react-router-dom`
- `bootstrap`
- `vite`

## 💡 Consejos

- Si necesitas agregar nuevas páginas, crea un nuevo componente en `src/pages/` y registra la ruta en `App.jsx`.
- Para componentes reutilizables, añade una carpeta propia bajo `src/components/`.
- Mantén los estilos en archivos `.css` separados junto a cada componente para mayor claridad.

## 📌 Nota

Este repositorio está preparado para desarrollo local inmediato con Vite. Si usas otro gestor de paquetes, adapta los comandos a `pnpm` o `yarn` según tu preferencia.
 
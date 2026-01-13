# Hola Mundo - NestJS + React Native (Expo)

Proyecto monorepo que incluye un backend NestJS y una aplicación móvil React Native con Expo, ambos mostrando "Hola mundo".

## Estructura del Proyecto

```
examen/
├── backend/          # Aplicación NestJS
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   ├── package.json
│   └── tsconfig.json
├── mobile/          # Aplicación React Native con Expo
│   ├── App.tsx
│   ├── package.json
│   ├── app.json
│   └── tsconfig.json
├── package.json     # Scripts para gestionar ambos proyectos
└── README.md
```

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Para la app móvil: Expo CLI instalado globalmente (`npm install -g expo-cli`) o usar npx

## Instalación

### Instalar todas las dependencias

```bash
npm run install:all
```

### Instalar dependencias por separado

**Backend:**
```bash
npm run backend:install
```

**Mobile:**
```bash
npm run mobile:install
```

## Ejecución

### Backend NestJS

El backend se ejecuta en el puerto 3000 y expone un endpoint GET `/` que retorna `{ message: "Hola mundo" }`.

```bash
npm run backend:start
```

El servidor estará disponible en: http://localhost:3000

### Aplicación Móvil (Expo)

```bash
npm run mobile:start
```

Esto iniciará el servidor de desarrollo de Expo. Podrás:
- Escanear el código QR con la app Expo Go en tu dispositivo móvil
- Presionar `a` para abrir en Android emulator
- Presionar `i` para abrir en iOS simulator
- Presionar `w` para abrir en el navegador web

## Tecnologías Utilizadas

### Backend
- **NestJS** - Framework Node.js progresivo
- **TypeScript** - Superset tipado de JavaScript
- **Express** - Framework web (incluido en NestJS)

### Frontend
- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Herramientas y servicios para React Native
- **TypeScript** - Superset tipado de JavaScript

## Características

- ✅ Backend NestJS con endpoint "Hola mundo"
- ✅ CORS habilitado para conexiones desde la app móvil
- ✅ App React Native con Expo mostrando "Hola mundo"
- ✅ Configuración TypeScript en ambos proyectos
- ✅ Scripts de gestión en el monorepo

## Desarrollo

### Backend

El backend está configurado con:
- Hot reload en modo desarrollo (`start:dev`)
- Endpoint GET `/` que retorna el mensaje "Hola mundo"
- CORS habilitado para permitir conexiones desde cualquier origen

### Mobile

La app móvil está configurada con:
- Expo SDK 49
- React Native 0.72
- TypeScript
- Componente simple que muestra "Hola mundo" centrado en pantalla

## Subir a GitHub

El repositorio local ya está inicializado con Git. Para subirlo a GitHub:

1. Crea un nuevo repositorio en GitHub (https://github.com/new)
2. No inicialices con README, .gitignore o licencia
3. Ejecuta los siguientes comandos (reemplaza `TU_USUARIO` y `NOMBRE_REPO` con tus valores):

```bash
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git branch -M main
git push -u origin main
```

## Notas

- Asegúrate de tener Node.js instalado antes de ejecutar los comandos
- Para la app móvil, necesitarás tener Expo Go instalado en tu dispositivo o un emulador/simulador configurado
- El backend debe ejecutarse en el puerto 3000 (configurado en `backend/src/main.ts`)


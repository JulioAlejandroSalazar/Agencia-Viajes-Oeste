# Aplicación de Autenticación – React + Vite

Este proyecto es una aplicación web simple desarrollada con **React y Vite**, cuyo objetivo es implementar un flujo básico de autenticación utilizando formularios de **registro** y **login**, cumpliendo los requisitos de la actividad.

## 🚀 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript (ES6)

---

## 📋 Funcionalidades

- Formulario de **registro** con:
  - Correo electrónico
  - Contraseña
- Formulario de **login** con:
  - Correo electrónico
  - Contraseña
- Validación de campos vacíos
- Validación básica de formato de email
- Simulación de autenticación con token
- Almacenamiento del token en `localStorage`
- Redirección según estado de autenticación
- Vista protegida (Home)
- Cierre de sesión

---

## 🔐 Autenticación y uso de ReqRes

Para esta actividad se utiliza **ReqRes** como referencia para el flujo de autenticación y manejo de tokens.

Debido a que ReqRes es un servicio de prueba y presenta restricciones al ser consumido directamente desde aplicaciones frontend sin un backend intermedio, la respuesta del endpoint de login fue **simulada** utilizando las credenciales de ejemplo documentadas por la plataforma.

Esto permite cumplir con el objetivo de la actividad:
- Uso de email y contraseña
- Recepción y almacenamiento de un token
- Control de acceso a vistas protegidas

La lógica de autenticación puede ser reemplazada por una conexión real a un backend.

### Credenciales de ejemplo

```txt
Email:    eve.holt@reqres.in
Password: cityslicka
```

## 🏠 Vistas de la aplicación

- **/register** → Registro de usuario  
- **/login** → Inicio de sesión  
- **/home** → Vista protegida (requiere autenticación)

---

## ▶️ Ejecución del proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
http://localhost:5173
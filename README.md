# Aplicación de Autenticación y Gestión de Solicitudes de Viaje  
**React + Vite + Node.js + Express + JWT + GitHub OAuth**

Este proyecto corresponde al **frontend** de una aplicación web desarrollada con **React y Vite**, integrada con un **backend propio en Node.js y Express.js**, cuyo objetivo es implementar un flujo completo de **autenticación de usuarios** y servir como base para un **sistema de gestión de solicitudes de viaje**.

La solución fue desarrollada con un **enfoque SSR (Server-Side Rendering)** desde el backend para el renderizado y entrega del contenido, y consume una **API REST** construida con datos simulados (**mocks**), cumpliendo los requisitos de la actividad.

---

## 🚀 Tecnologías utilizadas

### Frontend
- React  
- Vite  
- React Router DOM  
- Tailwind CSS  
- JavaScript (ES6)  
- React Hook Form  
- Zod  

### Backend
- Node.js  
- Express.js  
- JWT (JSON Web Token)  
- OAuth 2.0 (GitHub)  
- API REST con datos simulados (mocks)  

---

## ⚙️ Configuración del entorno

Crear un archivo `.env` en la raíz del proyecto frontend con el siguiente contenido:

```
VITE_API_URL=http://localhost:3001/api  
VITE_GITHUB_CLIENT_ID=tu_client_id  
```


---

## 📋 Funcionalidades implementadas

### ✔ Autenticación de usuarios
- Registro de usuarios mediante formulario
- Inicio de sesión con email y contraseña
- Inicio de sesión con GitHub (OAuth 2.0)
- Autenticación basada en JWT
- Persistencia de sesión usando `localStorage`
- Protección de rutas privadas
- Cierre de sesión

---

### ✔ Validación de formularios
- Validación de campos obligatorios
- Validación de formato de correo electrónico
- Uso de **Zod** para definir esquemas de validación
- Validaciones aplicadas tanto en el **frontend** como en el **backend**
- Centralización de reglas de validación para reducir errores y mejorar la consistencia de los datos

---

### ✔ Gestión de solicitudes de viaje
El sistema considera la gestión de solicitudes de viaje, permitiendo:

- Registro de solicitudes de viaje mediante formularios
- Listado de solicitudes registradas
- Generación automática y correlativa del identificador de solicitud
- Manejo de datos como:
  - Identificación del cliente (DNI)
  - Nombre del cliente
  - Origen y destino del viaje
  - Tipo de viaje (negocios, turismo u otros)
  - Fechas y horas de salida, regreso y registro
  - Estado de la solicitud (pendiente, en proceso, finalizada)

Toda la información es gestionada a través de una **API REST con datos simulados (mocks)**, sin persistencia en una base de datos real.

---

## 🔐 Autenticación basada en JWT

- El backend genera un token JWT tras el inicio de sesión
- El token es almacenado en `localStorage`
- Se utiliza para autorizar el acceso a vistas protegidas
- Permite controlar el estado de sesión del usuario

---

## 🏠 Vistas principales de la aplicación

- **/register** → Registro de usuario  
- **/login** → Inicio de sesión (email / GitHub)  
- **/auth/github/callback** → Callback OAuth de GitHub  
- **/home** → Vista protegida (requiere autenticación)  

---

## ▶️ Ejecución del proyecto

### 1. Instalar dependencias

```
npm install  
```

---

#### 2. Iniciar el servidor de desarrollo

``` 
npm run dev  
```

---

#### 3. Abrir en el navegador

http://localhost:5173

---

---

## 🔗 Integración con Backend

Este frontend está diseñado para integrarse con un backend desarrollado en **Node.js + Express**, el cual:

- Expone una API REST para autenticación y gestión de solicitudes
- Utiliza datos simulados (mocks) como mecanismo de persistencia temporal
- Implementa validaciones tanto del lado del servidor como del cliente
- Permite escalar fácilmente hacia una base de datos real o servicios en la nube

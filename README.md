### Aplicación de Autenticación – React + Vite + GitHub OAuth

Este proyecto corresponde al **frontend** de una aplicación web desarrollada con **React y Vite**, cuyo objetivo es implementar un flujo completo de autenticación de usuarios, integrándose con un **backend propio en Node.js**, e incorporando tanto **autenticación tradicional** como **autenticación con GitHub (OAuth 2.0)**.

La aplicación consume una API REST para el registro, inicio de sesión y verificación de sesión mediante **JWT**.

---

### 🚀 Tecnologías utilizadas

- React  
- Vite  
- React Router DOM  
- Tailwind CSS  
- JavaScript (ES6)  
- React Hook Form  
- Zod  

---

### ⚙️ Configuración del entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
VITE_API_URL=http://localhost:3001/api  
VITE_GITHUB_CLIENT_ID=tu_client_id  
```

---

### 📋 Funcionalidades implementadas

#### ✔ Registro de usuarios
- Formulario de registro con:
  - Correo electrónico  
  - Contraseña  
- Validaciones en tiempo real con **React Hook Form + Zod**  
- Envío de datos al backend mediante API REST  
- Manejo de errores provenientes del servidor  

---

#### ✔ Inicio de sesión tradicional
- Formulario de login con email y contraseña  
- Validación de campos obligatorios  
- Autenticación contra el backend  
- Almacenamiento del token JWT en `localStorage`  
- Redirección automática a vistas protegidas  

---

#### ✔ Inicio de sesión con GitHub (OAuth 2.0)
- Botón de inicio de sesión con GitHub  
- Redirección al flujo OAuth de GitHub  
- Manejo del callback (`/auth/github/callback`)  
- Recepción del token JWT generado por el backend  
- Almacenamiento del token y redirección automática  

---

#### ✔ Gestión de sesión
- Persistencia de sesión mediante `localStorage`  
- Protección de rutas privadas  
- Redirección según estado de autenticación  
- Cierre de sesión eliminando el token  

---

### 🔐 Autenticación basada en JWT

- El token JWT es recibido desde el backend tras el login  
- El token se almacena en `localStorage`  
- Se utiliza para controlar el acceso a vistas protegidas  

---

### 🏠 Vistas de la aplicación

- **/register** → Registro de usuario  
- **/login** → Inicio de sesión (email / GitHub)  
- **/auth/github/callback** → Callback OAuth de GitHub  
- **/home** → Vista protegida (requiere autenticación)  

---

### ▶️ Ejecución del proyecto

#### 1. Instalar dependencias

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

### 🔗 Integración con Backend

Este frontend está diseñado para integrarse con un backend desarrollado en **Node.js + Express**, permitiendo:

- Registro de usuarios  
- Inicio de sesión tradicional  
- Inicio de sesión con GitHub OAuth  
- Verificación de sesión mediante JWT  
- Acceso seguro a vistas protegidas  

La arquitectura permite escalar fácilmente el sistema a otros proveedores OAuth o a una base de datos real.

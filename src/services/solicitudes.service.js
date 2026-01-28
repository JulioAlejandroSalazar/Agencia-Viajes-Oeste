const API_URL = "http://localhost:3001/api/solicitudes";

export async function crearSolicitud(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al crear solicitud");
  }

  return response.json();
}

export async function obtenerSolicitudes() {
  const response = await fetch(API_URL);
  return response.json();
}

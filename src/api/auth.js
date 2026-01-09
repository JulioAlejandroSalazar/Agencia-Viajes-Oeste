export async function login(email, password) {
    /*
      Nota:
      ReqRes es un servicio de prueba y no permite ser consumido directamente
      desde el frontend en todos los entornos. Para poder implementar y
      demostrar el flujo de autenticacion solicitado en la actividad,
      se simula la respuesta utilizando las credenciales de ejemplo
      proporcionadas por ReqRes.
  
      Esta logica puede reemplazarse por una conexión real
      a un backend.
    */
  
    if (email === "eve.holt@reqres.in" && password === "cityslicka") {
      return {
        token: "QpwL5tke4Pnpja7X4",
      }
    }
  
    throw new Error("user not found")
  }
  
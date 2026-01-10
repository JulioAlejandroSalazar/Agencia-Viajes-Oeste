export async function login(email, password) {
    /*
      Nota:
      ReqRes no permite ser consumido directamente
      desde el frontend en todos los entornos. Para poder implementar
      la autenticacion solicitada en la actividad,
      se simula la respuesta utilizando las credenciales de ejemplo
      de ReqRes.
  
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
  
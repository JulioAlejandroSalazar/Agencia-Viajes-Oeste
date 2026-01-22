import api from "./axios";

export async function login(email, password) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return {
      token: response.data.data.token.token,
    };
  } catch (error) {
    throw new Error("Credenciales inválidas");
  }
}

export async function register(email, password) {
  try {
    const response = await api.post("/auth/register", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Error al registrar usuario");
  }
}

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

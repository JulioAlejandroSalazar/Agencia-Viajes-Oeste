import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api/axios"

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/auth/me")
        setUser(response.data.data)
      } catch (error) {
        localStorage.removeItem("token")
        navigate("/login")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          ¡Bienvenido!
        </h1>

        {user && (
          <>
            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-500 text-sm">
              Usuario ID: {user.id}
            </p>
          </>
        )}

        <p className="text-gray-600">
          Has iniciado sesión correctamente.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/solicitudes")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Registrar solicitud
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "http://localhost:3001/api/solicitudes/ssr")
            }
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Ver solicitudes (SSR)
          </button>

          <button
            onClick={logout}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}

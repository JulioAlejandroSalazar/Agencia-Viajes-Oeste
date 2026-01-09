import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          ¡Bienvenido!
        </h1>
        <p className="text-gray-600 mb-6">
          Has iniciado sesión correctamente.
        </p>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

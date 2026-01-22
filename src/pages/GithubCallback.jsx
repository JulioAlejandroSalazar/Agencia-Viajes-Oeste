import { useEffect, useRef, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import AuthLayout from "../components/AuthLayout"

export default function GithubCallback() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const hasProcessedRef = useRef(false)

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    if (hasProcessedRef.current) return
    hasProcessedRef.current = true

    const code = searchParams.get("code")

    if (!code) {
      setError("Código de autorización no encontrado")
      setTimeout(() => navigate("/login"), 2000)
      return
    }

    // Limpia URL para eliminar el codigo sensible
    window.history.replaceState(
      {},
      document.title,
      "/auth/github/callback"
    )

    const handleGithubLogin = async () => {
      try {
        const response = await axios.post(
        "http://localhost:3001/api/auth/github",
        { code }
        )

        const token = response.data?.data?.token

        if (!token) {
        throw new Error("Token no recibido")
        }

        localStorage.setItem("token", token)
        setSuccess("Inicio de sesión exitoso con GitHub")
        setTimeout(() => navigate("/home"), 1500)

      } catch (err) {
        console.error(err)
        setError("Error al autenticar con GitHub")
        setTimeout(() => navigate("/login"), 2000)
      }
    }

    handleGithubLogin()
  }, [navigate, searchParams])

  return (
    <AuthLayout title="Autenticando con GitHub">
      <div className="space-y-4 text-center">
        {!error && !success && (
          <p className="text-gray-600">
            Verificando tu cuenta de GitHub, por favor espera...
          </p>
        )}

        {success && (
          <p className="text-green-600 font-medium">{success}</p>
        )}

        {error && (
          <p className="text-red-500 font-medium">{error}</p>
        )}
      </div>
    </AuthLayout>
  )
}

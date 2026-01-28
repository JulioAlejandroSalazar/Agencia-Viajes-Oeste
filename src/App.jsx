import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import GithubCallback from "./pages/GithubCallback"
import ProtectedRoute from "./components/ProtectedRoute"
import Solicitudes from "./pages/Solicitudes"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/auth/github/callback" element={<GithubCallback />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/solicitudes"
        element={
          <ProtectedRoute>
            <Solicitudes />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App

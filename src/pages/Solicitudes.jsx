import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  crearSolicitud,
  obtenerSolicitudes
} from "../services/solicitudes.service";

const estadoInicial = {
  dni: "",
  nombreCliente: "",
  email: "",
  origen: "",
  destino: "",
  tipoViaje: "turismo",
  fechaSalida: "",
  fechaRegreso: "",
  estado: "pendiente"
};

export default function Solicitudes() {
  const navigate = useNavigate();
  const [form, setForm] = useState(estadoInicial);
  const [solicitudes, setSolicitudes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarSolicitudes();
  }, []);

  async function cargarSolicitudes() {
    const data = await obtenerSolicitudes();
    setSolicitudes(data);
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function validarFormulario() {
    if (!form.dni || !form.nombreCliente || !form.email) {
      setError("Todos los campos obligatorios deben completarse");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Formato de email inválido");
      return false;
    }

    setError("");
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      await crearSolicitud(form);
      setForm(estadoInicial);
      cargarSolicitudes();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
            <div className="flex justify-between mb-6">
                <button
                    onClick={() => navigate("/home")}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                    ← Volver al Home
                </button>

                <button
                    onClick={() =>
                    (window.location.href =
                        "http://localhost:3001/api/solicitudes/ssr")
                    }
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                    Ver Solicitudes (SSR)
                </button>
            </div>

            <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Registro de Solicitud de Viaje
            </h1>

            {error && (
                <p className="text-red-600 text-sm mb-3 text-center">
                {error}
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
                <input className="input" name="dni" placeholder="DNI" value={form.dni} onChange={handleChange} />
                <input className="input" name="nombreCliente" placeholder="Nombre cliente" value={form.nombreCliente} onChange={handleChange} />
                <input className="input" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input className="input" name="origen" placeholder="Origen" value={form.origen} onChange={handleChange} />
                <input className="input" name="destino" placeholder="Destino" value={form.destino} onChange={handleChange} />

                <select className="input" name="tipoViaje" value={form.tipoViaje} onChange={handleChange}>
                <option value="turismo">Turismo</option>
                <option value="negocios">Negocios</option>
                <option value="otros">Otros</option>
                </select>

                <input className="input" type="datetime-local" name="fechaSalida" value={form.fechaSalida} onChange={handleChange} />
                <input className="input" type="datetime-local" name="fechaRegreso" value={form.fechaRegreso} onChange={handleChange} />

                <div className="flex gap-4 justify-center text-sm">
                {["pendiente", "en proceso", "finalizada"].map(e => (
                    <label key={e} className="flex items-center gap-1">
                    <input type="radio" name="estado" value={e} checked={form.estado === e} onChange={handleChange} />
                    {e}
                    </label>
                ))}
                </div>

                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                Registrar solicitud
                </button>
            </form>

            <hr className="my-6" />

            <h2 className="text-xl font-semibold mb-3 text-gray-700">
                Solicitudes registradas
            </h2>

            <ul className="space-y-2 text-sm">
                {solicitudes.map(s => (
                <li key={s.id} className="bg-gray-50 p-3 rounded-md">
                    <strong>#{s.id}</strong> — {s.nombreCliente} — {s.origen} → {s.destino} ({s.estado})
                </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

// src/components/LandingPage.jsx
import logo from '../assets/logo.png'; // Ajusta la ruta si es necesario

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-blue-700 text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Booky Logo" className="h-8 w-8" />
          <span className="font-bold text-xl">Booky</span>
        </div>
        <div className="space-x-4">
          <button className="hover:underline">Iniciar Sesión</button>
          <button className="border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-700 transition">
            Registrarse
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-400 to-indigo-600 text-white p-8">
        <h1 className="text-4xl font-extrabold mb-4 max-w-xl">
          Organiza y controla tus libros pendientes, en lectura o ya leídos
        </h1>
        <p className="mb-8 max-w-md">
          Booky te ayuda a registrar, organizar y consultar tus libros según su estado para que nunca pierdas el control de tu hábito de lectura.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Comenzar
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center p-4 text-sm">
        &copy; 2025 Booky. Todos los derechos reservados.
      </footer>
    </div>
  );
}

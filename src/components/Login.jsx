
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-indigo-600 px-4">
      <div className="max-w-md w-full bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">
          Iniciar Sesión
        </h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-700 mb-2 font-semibold">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu email"
              className="w-full p-3 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-blue-700 mb-2 font-semibold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded border border-blue-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

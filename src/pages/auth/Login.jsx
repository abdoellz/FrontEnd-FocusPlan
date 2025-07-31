import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = AuthController((state) => state.login);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Login...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await login(email, password, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Login",
        text: "Selamat datang kembali",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: err.response?.data?.message || "Email atau password salah",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full">
        
        {/* FORM LOGIN */}
        <div className="bg-orange-50 p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
            Masuk
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">

            {/* EMAIL FIELD */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email :
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD FIELD */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password :
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* ERROR MESSAGE */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300"
            >
              Masuk
            </button>

            {/* LINK TO REGISTER */}
            <p className="text-sm text-center mt-4 text-gray-700">
              Tidak punya akun?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-medium"
              >
                Daftar disini
              </Link>
            </p>
          </form>
        </div>

        {/* ILUSTRASI GAMBAR */}
        <div className="bg-white hidden md:flex items-center justify-center p-8">
          <img
            src="/src/assets/image3.svg"
            alt="Login Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

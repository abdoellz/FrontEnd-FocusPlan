import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";
import Illustration from "/src/assets/image3.svg"; // Pastikan path ini benar

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Register...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await register(form, navigate);
      Swal.fire({
        icon: "success",
        title: "Berhasil Register",
        text: "Pendaftaran berhasil, silakan login",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal Register",
        text: err.response?.data?.message || "Pendaftaran gagal, silakan coba lagi nanti",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-white shadow-xl rounded-2xl overflow-hidden max-w-5xl w-full">

        {/* FORM REGISTER */}
        <div className="bg-orange-50 p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
            Daftar
          </h2>

          <form onSubmit={handleRegister} className="space-y-6">

            {/* NAMA LENGKAP */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap :
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nama lengkap"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700"
              />
            </div>

            {/* EMAIL */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email :
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700"
              />
            </div>

            {/* PASSWORD */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password :
              </label>
              <input
                type="password"
                name="password"
                placeholder="Masukkan password"
                value={form.password}
                onChange={handleChange}
                minLength={6}
                required
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700"
              />
            </div>

            {/* ERROR */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300"
            >
              Daftar
            </button>

            {/* LINK TO LOGIN */}
            <p className="text-sm text-center mt-4 text-gray-700">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-600 hover:underline font-medium">
                Login di sini
              </Link>
            </p>
          </form>
        </div>

        {/* ILUSTRASI */}
        <div className="bg-white hidden md:flex items-center justify-center p-8">
          <img
            src={Illustration}
            alt="Register Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;

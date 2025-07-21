import { Link } from "react-router-dom";

function App() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <div
        className="flex items-center min-h-screen py-10 2xl:py-20 2xl:px-60 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/bg1.png')" }}
      >
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:space-x-5 w-full">
          <div className="flex justify-center flex-col">
            <div className="flex justify-end xl:hidden">
              <img src="/src/assets/image1.svg" className="w-[35rem]" alt="" />
            </div>

            <h1
              className="font-michroma xl:text-6xl text-center xl:text-start text-5xl text-orange-500"
              data-aos="fade-up"
            >
              FocusPlan.
            </h1>
            <p
              className="text-black font-[Offside] text-lg xl:text-start text-center max-w-xl"
              data-aos="fade-up"
            >
              Aplikasi to-do list yang membantu kamu tetap fokus dan menyelesaikan tugas tepat waktu.
            </p>

            <div
              data-aos="fade-up"
              className="pt-5 flex xl:justify-start justify-center"
              data-aos-duration="1400"
            >
              <Link
                to="/login"
                className="bg-orange-500 font-roboto font-medium text-white px-8 py-2 shadow-md rounded-lg hover:bg-orange-600 transition"
              >
                Join with us
              </Link>
            </div>
          </div>

          <div className="xl:flex justify-end hidden">
            <img src="/src/assets/image1.svg" className="xl:w-[35rem] w-[20rem]" alt="" />
          </div>
        </div>
      </div>

      {/* SECTION SEPARATOR */}
      <div className="h-2 bg-gradient-to-r from-orange-200 via-white to-orange-200" />

      {/* SECTION 2: Fitur Utama */}
      <div
        className="bg-gray-900 py-40 2xl:px-60 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/bg3.png')" }}
      >
        <h1
          className="font-poppins font-bold text-4xl xl:text-5xl text-white text-center"
          data-aos="fade-up"
        >
          Kelola <span className="text-orange-600">Harimu Jadi Lebih Baik</span>
        </h1>

        {/* Bagian Fitur 1 */}
        <div
          className="grid xl:grid-cols-2 grid-cols-1 mt-16 xl:space-x-16"
          data-aos="fade-up"
        >
          <div>
            <img
              src="/src/assets/image2.svg"
              className="rounded-lg shadow-xl xl:mb-0 mb-3"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-poppins font-semibold xl:text-3xl text-2xl mb-3 xl:text-start text-orange-500">
              Fokus Lebih Baik, Selesaikan Lebih Banyak
            </h1>
            <p className="text-black font-mono text-lg xl:text-start text-justify">
              Todo Bee membantumu mencatat, menjadwalkan, dan menyelesaikan semua tugas pentingmu setiap hari. Tidak ada lagi tugas yang terlupa, semua tercatat rapi dalam satu aplikasi yang mudah digunakan.
            </p>
          </div>
        </div>

        {/* Bagian Fitur 2 */}
        <div
          className="grid xl:grid-cols-2 grid-cols-1 mt-20 xl:space-x-16 xl:text-end"
          data-aos="fade-up"
        >
          <div className="md:hidden">
            <img
              src="/src/assets/image2.svg"
              className="rounded-lg shadow-xl mb-3"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-poppins font-semibold text-orange-500 xl:text-3xl text-justify xl:text-end text-2xl mb-3">
              Pantau Progres, Capai Target
            </h1>
            <p className="text-black font-mono text-lg text-justify xl:text-end">
              Tandai tugas yang sudah selesai, lihat apa saja yang tertunda, dan atur ulang prioritasmu dengan mudah. Todo Bee hadir untuk membantumu tetap produktif dan disiplin, kapan saja dan di mana saja.
            </p>
          </div>
          <div className="hidden md:block">
            <img
              src="/src/assets/image3.svg"
              className="rounded-lg shadow-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

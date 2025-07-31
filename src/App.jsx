import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App({ backgroundImage = 'src/assets/bg3.png' }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const backgroundImageStyle = (url) => ({
    backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('${url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  return (
    <>
      {/* Hero Section */}
      <div
        className="flex items-center min-h-screen py-20 2xl:px-60 px-6"
        style={backgroundImageStyle(backgroundImage)}
      >
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 w-full">
          <div className="flex justify-center flex-col">
            <div className="flex justify-end xl:hidden mb-6">
              <img src="/src/assets/bg3.png" className="w-[25rem]" alt="hero mobile" />
            </div>

            <h1
              className="font-michroma font-bold text-5xl xl:text-6xl text-orange-600 drop-shadow-md"
              data-aos="fade-down"
            >
              FocusPlan.
            </h1>

            <p
              className="text-black font-[Offside] text-xl mt-4 mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Aplikasi to-do list yang membantu kamu tetap fokus dan menyelesaikan tugas tepat waktu.
            </p>

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="flex xl:justify-start justify-center"
            >
              <Link
                to="/login"
                className="bg-orange-500 font-michroma text-white px-8 py-3 rounded-lg hover:bg-orange-600 shadow-lg transition"
              >
                Join with us
              </Link>
            </div>
          </div>

           <div data-aos="fade-left">
            <img src="/src/assets/image1.svg" alt="tentang kami" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Tentang Kami */}
      <div className="w-full bg-[#ffffff] py-20 px-6 xl:px-60" id="tentangkami">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="font-michroma font-bold text-5xl xl:text-6xl text-orange-600 drop-shadow-md pb-4">
              Tentang
            </h2>
            <p  className="text-black font-[Offside] text-xl mt-4 mb-6">
              FocusPlan adalah aplikasi to-do list yang dibuat untuk membantu kamu tetap fokus, menyelesaikan tugas tepat waktu, dan meraih produktivitas maksimal.
            </p>
          </div>
          <div data-aos="fade-left">
            <img src="/src/assets/image2.svg" alt="tentang kami" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

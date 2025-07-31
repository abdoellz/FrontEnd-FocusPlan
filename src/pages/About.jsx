import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen px-6 py-16 bg-white flex flex-col items-center justify-center 2xl:px-60">
      <h2
        className="text-white text-2xl font-bold mb-1 text-center pb-12"
        data-aos="fade-down"
      >
        Tentang Saya
      </h2>

      <h1
        className="text-7xl font-tittle font-[newsreader] text-orange-500 text-center mb-10 "
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Abdulah Khofid
      </h1>

      <div className="flex flex-col xl:flex-row items-center justify-center gap-10">
        <div
          className="xl:w-1/3 text-lg text-gray-800 text-justify leading-relaxed"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <p className="text-black font-[newsreader] text-xl mt-4 mb-6  ">
            Halo! Saya Abdulah Khofid, seorang yang percaya bahwa kunci
            produktivitas adalah perencanaan yang baik dan konsisten dalam
            menjalankan tugas. Dengan latar belakang di bidang Rekayasa
            Perangkat Lunak, saya menciptakan aplikasi to-do list ini untuk
            membantu diri saya sendiri – dan Anda – agar tetap fokus,
            terorganisir, dan efisien setiap hari.
          </p>
          <p className="text-black font-[newsreader] text-xl mt-4 mb-6">
            Melalui aplikasi ini, saya berharap dapat memberikan solusi
            sederhana namun efektif untuk mencatat, mengatur, dan menyelesaikan
            berbagai tugas, baik dalam pekerjaan, studi, maupun kehidupan
            sehari-hari.
          </p>
          <p className="text-black font-[newsreader] text-xl mt-4 mb-6 ">
            Terima kasih telah menggunakan aplikasi ini. Semoga bermanfaat dan
            membantu hari-harimu menjadi lebih terstruktur!
          </p>
        </div>

        <div
          className="xl:w-1/3 w-full"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            src="/src/assets/setelan rapi.jpeg"
            alt="Abdulah Khofid"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

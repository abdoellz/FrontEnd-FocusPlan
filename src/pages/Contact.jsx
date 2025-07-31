function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <div className="py-40 xl:px-60 px-6">
        {/* Kontak Visual Kiri-Kanan */}
        <div className="grid xl:grid-cols-2 grid-cols-1 items-center gap-10">
          {/* Teks Kontak Saya */}
         <div className="text-left" data-aos="fade-right">
  <h1 className="text-9xl text-orange-600 font-serif leading-snug">
    Kontak<br />Saya
  </h1>
</div>


          {/* Daftar Kontak */}
          <div
            className="bg-orange-100 p-10 rounded-xl shadow-xl"
            data-aos="fade-left"
          >
            <ul className="text-orange-600 text-xl space-y-4 font-[Offside]">
              <li className="flex justify-between">
                <span>• Email</span> <span>: Abdukkhofath@gmail.com</span>
              </li>
              <li className="flex justify-between">
                <span>• WhatsApp</span> <span>: 0857 2335 5381</span>
              </li>
              <li className="flex justify-between">
                <span>• Instagram</span> <span>: @goendelzn_</span>
              </li>
              <li className="flex justify-between ">
                <span>• X</span> <span>: dadangruhay_</span>
              </li>
              <li className="flex justify-between">
                <span>• Github</span> <span>: abdoellz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MAP */}
        {/* <h1
                className="font-michroma font-bold text-5xl xl:text-6xl text-orange-600 drop-shadow-md text-center"
                data-aos="fade-down"
              >
                FocusPlan.
              </h1> */}
      {/* <div className="pt-10 pb-20 px-6 xl:px-60">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.5495115589295!2d106.92013712615166!3d-6.915432129213436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6849d234eb57e1%3A0x63a7feb68b88d92d!2sDAPUR%20MUNGIL%20PUSAT!5e0!3m2!1sid!2sid!4v1751924156507!5m2!1sid!2sid"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </div>
  );
}

export default Contact;

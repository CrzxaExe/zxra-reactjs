import React from "react";
import Footer from "./Footer";

function Gallery() {
  document.title = "Zxra Gallery";

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">
          Gallery
        </div>
        <div className="before:content-['|'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">
          Kreatifitas
        </div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap -mt-7"></section>

      <Footer />
    </div>
  );
}

export default Gallery;

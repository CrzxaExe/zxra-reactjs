import React from "react";
import { Link } from "react-router-dom";
import jsonData from "../all.json";

function Apps() {
  document.title = "Zxra Apps";
  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">Apps</div>
        <div className="before:content-['|'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">
          Aplikasi yang tersedia di sini
        </div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap gap-2 -mt-1">
        {jsonData.apps.map((e, i) => (
          <Link
            to={e.link}
            key={i}
            className="lg:w-[10%] w-[24%] bg-nav aspect-square rounded-xl transition duration-300 ease-in-out hover:opacity-[0.8] overflow-hidden"
          >
            <h1 className="text-tprime w-full h-[74%] text-[2.8rem] lg:text-[2.0rem] flex justify-center items-center relative bg-navlogo">
              <i className={e.img}></i>
            </h1>
            <b className="w-full flex h-[28%] items-center justify-center text-xs lg:text-xs">
              {e.name}
            </b>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Apps;

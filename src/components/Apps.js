import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../all.json';

function Apps() {
  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">Aplikasi</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">Aplikasi yang tersedia di sini</div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap justify-between -mt-1">
        {jsonData.apps.map(e => (
          <Link to={e.link} className="lg:w-[20%] w-[50%] bg-nav aspect-video rounded overflow-hidden relative block">
            <b className="transition-all duration-500 ease-in-out absolute z-[1] px-3 pr-5 py-2 hover:pl-[30%] left-0 bg-gradient-to-r from-prime/[1] text-base tracking-tighter to-prime/[0.75] h-full flex items-center justify-center rounded-r-[15%] whitespace-pre-wrap">{e.name}</b>
            <img className="object-cover absolute top-0" src={e.img} alt={e.name}/>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Apps;

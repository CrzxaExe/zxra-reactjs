import React from 'react';
import { Link } from 'react-router-dom';
import lg from '../img/logo.png';

function Home() {
  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">Beranda</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl invisible lg:visible -mt-2 text-tter">Tempat memulai sesuatu</div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap -mt-7">
        <div className="w-full lg:w-1/3 self-center text-left mt-1">
          <h1 className="text-xl font-medium mt-6">Code..<span className="font-bold text-tsec text-3xl tracking-wider block font-sans -mt-2">Zxra Create</span></h1>
          <h2 className="text-sm font-mono -mt-2 tracking-widest mb-2">Eazier Your Life With Us</h2>
          <div className="w-full bg-tprime h-1 rounded"></div>
          <p className=" py-4 px-2 text-xs text-slate cz-line mt-3 text-left mb-4">Berikan inovasi kalian bersama kami di web ini<br/>Buat inovasimu menjadi nyata</p>

          <Link to="project" className="bg-tsec py-1 px-5 rounded mx-auto mt-2 text-['Valorant'] text-prime border-2 border-tsec hover:bg-prime hover:text-tsec transition-all duration-300 ease-in-out">Project</Link>
        </div>
        <div className="w-full lg:w-1/3"></div>
        <div className="lg:w-1/3 self-end w-0 lg:mt-5 mb-2 relative lg:h-[80px]">
          <img src={lg} alt="Zxra Logo" className="lg:w-2/3 mx-auto w-0 lg:-mt-[5rem] absolute lg:-ml-[60px] pl-3" />
        </div>
      </section>

      <section className="mt-4">
        <div>
          <b>Siapa itu <span className="text-tsec">Zxra</span>?</b>
          <p className="text-sm indent-2.5">Zxra adalah sekumpulan orang dengan kemampuan diluar nalar manusia yang memiliki tujuan yang sama yaitu memudahkan orang lain dengan beragam project yang telah dikeluarkan. Namun kami memiliki banyak kekurangsn seperti terlalu malas untuk up project dan lain sebagainya.</p>
        </div>
        <div className="mt-6 flex flex-wrap w-full items-start">
          <div className="self-center w-full lg:w-1/2 pr-2">
            <b>Project</b>
            <p className="text-sm">Masih terbilang sedikit namun kami akan terus berkarya menciptakan sesuatu yang baru bersama. Dan bahasa yang sering kami gunakan adalah JavaScript</p>
          </div>
          <div className="self-end w-full lg:w-1/2 pl-1 mt-3">
            <b>Sosial Media</b>
            <p className="text-sm">Anda beminat menghubungi kami? Tenang saja kami memiliki beberapa sosial media. Berikut beberapa sosial media kami:</p>
            <div className="flex mt-1">
              <div className="px-[4px] rounded border-[1px] border-tprime text-sm flex items-center justify-center mr-1">
                <i className='bx bxl-facebook' style={{color:'#ffffff'}}></i>
              </div>
              <div className="px-[4px] rounded border-[1px] border-tprime text-sm flex items-center justify-center mr-1">
                <i className='bx bxl-whatsapp' style={{color:'#ffffff'}}></i>
              </div>
              <div className="px-[4px] rounded border-[1px] border-tprime text-sm flex items-center justify-center mr-1">
                <i className='bx bxl-youtube' style={{color:'#ffffff'}}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
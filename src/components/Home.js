import React from 'react';
import { Link } from 'react-router-dom';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Badge from '@mui/material/Badge';
import TextLine from "./TextLine";
import Footer from "./Footer";
import lg from '../img/logo.png';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import InterestsIcon from '@mui/icons-material/Interests';
import SourceIcon from '@mui/icons-material/Source';
import TerminalIcon from '@mui/icons-material/Terminal';

function Home() {
  let langData = {
    labels: [
      'Html',
      'JavaScript',
      'TypeScript',
      'Lainnya'
    ],
    datasets: [{
      label: 'Project',
      data: [4, 8, 3, 2],
      backgroundColor: [
        'rgb(240, 136, 0)',
        'rgb(255, 205, 86)',
        'rgb(13, 184, 138)',
        'rgb(200, 200, 200)',
      ],
      hoverOffset: 4
    }],
  };

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">Beranda</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl invisible lg:visible -mt-2 text-tter">Tempat memulai sesuatu</div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap -mt-7">
        <div className="w-full lg:w-2/3 self-center text-left mt-1">
          <h1 className="text-xl font-medium mt-6">Code..<span className="font-bold text-tsec text-3xl tracking-wider block font-sans -mt-2">Zxra Create</span></h1>
          <h2 className="text-sm font-mono -mt-2 tracking-widest mb-2">Eazier Your Life With Us</h2>
          <div className="w-full bg-tprime h-1 rounded"></div>
          <p className=" py-4 px-2 text-xs text-slate cz-line mt-3 text-left mb-4">Berikan inovasi kalian bersama kami di web ini<br/>Buat inovasimu menjadi nyata</p>

          <Link to="project" className="bg-tsec py-1 px-5 rounded mx-auto mt-2 text-['Valorant'] text-prime border-2 border-tsec hover:bg-prime hover:text-tsec transition-all duration-300 ease-in-out">Project</Link>
        </div>
        <div className="lg:w-1/3 self-end w-0 lg:mt-5 mb-7 relative lg:h-[80px]">
          <img src={lg} alt="Zxra Logo" className="lg:w-2/3 mx-auto w-0 lg:-mt-[5rem] absolute lg:-ml-[60px] pl-3" />
        </div>
      </section>

      <section className="mt-4 lg:mt-9">
        <div className="bg-nav py-3 px-2">
          <PersonalVideoIcon className="bg-prime rounded p-1 text-tsec ml-2" sx={{ fontSize: 40 }} /><br/>
          <b className="text-lg font-['Valorant'] ml-2">Siapa itu <span className="text-tsec">Zxra</span>?</b>
          <p className="text-sm indent-2.5 px-3 text-justify">Zxra adalah sekumpulan orang dengan kemampuan diluar nalar manusia yang memiliki tujuan yang sama yaitu memudahkan orang lain dengan beragam project yang telah dikeluarkan. Namun kami memiliki banyak kekurangan seperti terlalu malas untuk up project dan lain sebagainya.</p>
        </div>

        <TextLine name="Yang Kami Punya--"/>

        <div className="mt-3 flex flex-wrap w-full items-start">
          <div className="self-center w-full  bg-nav rounded px-2 py-3 mb-2">
            <TerminalIcon className="bg-prime rounded p-1 text-tsec ml-2" sx={{ fontSize: 40 }} /><br/>
            <b className="px-3 lg:text-lg">Bahasa Pemograman</b>
            <div className="flex flex-wrap w-full items-start">
            <div className="w-full lg:w-1/2 h-full" ><Doughnut data={langData} options={{
              borderColor: 'rgba(0,0,0,0)',
              radius: 90,
              color: '#fff',
              plugins: {
                legend: {
                  fullSize: true,
                  padding: 20,
                  labels: {
                    font: { size: 10, },
                  },
                },
              },
            }} /></div>
            <p className="text-xs px-3 mt-8 lg:mt-0 text-justify w-full lg:w-1/2 bg-prime rounded-2 px-3 py-2 whitespace-pre-line break-normal">
              {`Tabel tersebut merupakan histori bahasa yang kami gunakan pada project-project kami saat ini.

              Kami akan selalu belajar tentang bahasa pemrograman yang ada, mengingat banyaknya bahasa pemrograman yang ada.

              @Zxra/CrzxaExe3
              `}
            </p>
            </div>
          </div>
          <div className="self-center w-full  bg-nav rounded px-2 py-3 mb-2">
            <SourceIcon className="bg-prime rounded p-1 text-tsec ml-2" sx={{ fontSize: 40 }} /><br/>
            <b className="px-3 lg:text-lg">Open Source Repo</b>
            <p className="text-sm px-3 text-justify">Kebanyakan project kami bersifat open source dan bisa digunakan siapa saja, namun untuk beberapa project, kami hanya sedikit membatasi penggunaanya. Kami juga akan selalu memperbarui kualitas koding kita(kalo tidak malas). Dokumentasi project juga dapat diakses dan mudah untuk dipahami(mungkin)</p>
          </div>
          <div className="self-center w-full lg:w-[49.3%] lg:mr-[0.7%] bg-nav rounded px-2 py-3">
            <BackupTableIcon className="bg-prime rounded p-1 text-tsec ml-2" sx={{ fontSize: 40 }} /><br/>
            <b className="px-3 lg:text-lg">Project</b>
            <p className="text-sm px-3 text-justify">Masih terbilang sedikit namun kami akan terus berkarya menciptakan sesuatu yang baru bersama</p>
            <a href="project" className="px-3 pb-2 pt-4 mt-1 text-tsec font-mono hover:text-navlogo text-xs lg:text-sm">Lihat Semua...</a>
          </div>
          <div className="self-end w-full lg:w-[49.3%] lg:ml-[0.7%] pl-1 mt-2 lg:mt-0 bg-nav rounded px-2 py-3">
            <Badge badgeContent={3} color="primary" className="lg:mt-1"><InterestsIcon className="bg-prime rounded p-1 text-tsec ml-2" sx={{ fontSize: 40 }} /></Badge><br/>
            <b className="px-3 lg:text-lg">Sosial Media</b>
            <p className="text-sm px-3 text-justify">Anda beminat menghubungi kami? Tenang saja kami memiliki beberapa sosial media seperti:</p>
            <div className="flex mt-1 px-3">
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

      <Footer right={{ link: "/gallery", text: "Gallery" }}/>
    </div>
  );
}

export default Home;
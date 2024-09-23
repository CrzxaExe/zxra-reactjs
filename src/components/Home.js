import React from "react";
import { Link } from "react-router-dom";
import "chart.js/auto";
import Badge from "@mui/material/Badge";
import Footer from "./Footer";
import lg from "../img/logo.png";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import InterestsIcon from "@mui/icons-material/Interests";
import SourceIcon from "@mui/icons-material/Source";

function Home() {
  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">
          Beranda
        </div>
        <div className="before:content-['|'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl invisible lg:visible -mt-2 text-tter">
          Tempat memulai sesuatu
        </div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap -mt-7">
        <div className="w-full lg:w-2/3 self-center text-left mt-1">
          <h1 className="text-xl font-medium mt-6">
            Code..
            <span className="font-bold text-tsec text-3xl tracking-wider block font-sans -mt-2">
              Zxra Create
            </span>
          </h1>
          <h2 className="text-sm font-mono -mt-2 tracking-widest mb-2">
            Eazier Your Life With Us
          </h2>
          <div className="w-full bg-tprime h-1 rounded"></div>
          <p className=" py-4 px-2 text-xs text-slate cz-line mt-3 text-left mb-4">
            Berikan inovasi kalian bersama kami di web ini
            <br />
            Buat inovasimu menjadi nyata
          </p>

          <div className="flex flex-row gap-1">
            <Link
              to="project"
              className="bg-tsec py-1 px-5 rounded text-prime border-2 border-tsec hover:bg-prime hover:text-tsec transition-all duration-300 ease-in-out"
            >
              <b className="font-['Valorant']">Project</b>
            </Link>
            <Link
              to="apps"
              className="bg-tsec py-1 px-5 rounded text-prime border-2 border-tsec hover:bg-prime hover:text-tsec transition-all duration-300 ease-in-out"
            >
              <b className="font-['Valorant']">Apps</b>
            </Link>
            <Link
              to="about"
              className="bg-tsec py-1 px-5 rounded text-prime border-2 border-tsec hover:bg-prime hover:text-tsec transition-all duration-300 ease-in-out"
            >
              <b className="font-['Valorant']">I</b>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 self-end w-0 lg:mt-5 mb-7 relative lg:h-[80px]">
          <img
            src={lg}
            alt="Zxra Logo"
            className="lg:w-2/3 mx-auto w-0 lg:-mt-[5rem] absolute lg:-ml-[60px] pl-3"
          />
        </div>
      </section>

      <section className="mt-4 lg:mt-9">
        <div className="py-3 px-2">
          <PersonalVideoIcon
            className="bg-nav rounded p-1 text-tsec"
            sx={{ fontSize: 40 }}
          />
          <b className="text-lg font-['Valorant'] px-2">
            Siapa itu <span className="text-tsec">Zxra</span>?
          </b>
          <p className="text-sm indent-2.5 px-3 ml-5 text-justify border-0 border-l pt-1">
            Zxra adalah sekumpulan orang dengan kemampuan diluar nalar manusia
            yang memiliki tujuan yang sama yaitu memudahkan orang lain dengan
            beragam project yang telah dikeluarkan. Beberapa project mungkin
            sudah dapat anda lihat disini. Namun kami memiliki banyak kekurangan
            seperti terlalu malas untuk up project dan lain sebagainya.
            {/*<iframe
              src="https://discord.com/widget?id=1278365565819293756&theme=dark"
              width="320"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>*/}
          </p>
        </div>

        <div className="mt-1 flex flex-wrap w-full items-start">
          <div className="self-center w-full px-2 py-3 mb-2">
            <SourceIcon
              className="bg-nav rounded p-1 text-tsec"
              sx={{ fontSize: 40 }}
            />
            <b className="lg:text-lg px-2">Open Source Repo</b>
            <p className="text-sm px-3 p-1 ml-4 border-0 border-l text-justify">
              Kebanyakan project kami bersifat open source dan bisa digunakan
              siapa saja, namun untuk beberapa project, kami hanya sedikit
              membatasi penggunaanya. Kami juga akan selalu memperbarui kualitas
              koding kita(kalo tidak malas). Dokumentasi project juga dapat
              diakses dan mudah untuk dipahami(mungkin)
            </p>
          </div>
          <div className="self-center w-full lg:max-w-[49.3%] lg:mr-[0.7%] px-2 py-3">
            <BackupTableIcon
              className="bg-nav rounded p-1 text-tsec"
              sx={{ fontSize: 40 }}
            />
            <b className="px-2 lg:text-lg">Project</b>
            <p className="text-sm px-2 pt-1 ml-4 text-justify border-0 border-l">
              Masih terbilang sedikit namun kami akan terus berkarya menciptakan
              sesuatu yang baru bersama
              <a
                href="project"
                className="pt-2 text-tsec font-mono hover:text-navlogo text-xs lg:text-sm block"
              >
                Lihat Semua...
              </a>
            </p>
          </div>
          <div className="self-end w-full lg:w-[49.3%] lg:ml-[0.7%] pl-1 mt-2 lg:mt-0 px-2 py-3">
            <Badge badgeContent={3} color="primary" className="lg:mt-1">
              <InterestsIcon
                className="bg-nav rounded p-1 text-tsec"
                sx={{ fontSize: 40 }}
              />
            </Badge>
            <b className="px-2 lg:text-lg">Sosial Media</b>
            <p className="text-sm px-2 ml-1 border-0 border-l text-justify">
              Anda berminat menghubungi kami? Tenang saja kami memiliki beberapa
              sosial media seperti:
              <div className="flex ml-5">
                <a
                  href="https://www.facebook.com/crzx.zxra"
                  className="px-[4px] rounded border-[1px] border-tprime text-sm flex items-center justify-center mr-1"
                >
                  <i
                    className="bx bxl-facebook"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  href="https://wa.me/62895392851501"
                  className="px-[4px] rounded border-[1px] border-tprime text-sm flex items-center justify-center mr-1"
                >
                  <i
                    className="bx bxl-whatsapp"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a
                  href="https://youtube.com/@crzxdsubscribe?si=6N-fu5epVTvdD4Dn"
                  className="px-[4px] rounded border-[1px] border-tprime text-sm flex items-center justify-center mr-1"
                >
                  <i
                    className="bx bxl-youtube"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;

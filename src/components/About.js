import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Footer from "./Footer";

import pkgs from '../../package.json';

function About() {
  let codeString = `
  import Zxra from '@zxra/cz-dx';
  `;

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <title>About Zxra</title>
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">About</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">Tentang kami</div>
      </header>

      <section id="about" className="w-full py-2 -mt-2 text-xs text-tprime">
        <SyntaxHighlighter language="javascript" style={coy} customStyle={{ backgroundColor: '#083344', color: '#cffafe' }} className="text-white cz-white">
          {codeString}
        </SyntaxHighlighter>

        <div>
          <b className="text-sm lg:text-lg text-tsec">Zxra Create</b>
          <p className="text-xs lg:text-sm whitespace-pre-line break-normal w-full px-4 mb-4">
            Sekelompok orang yang memiliki tujuan yang sama untuk memudahkan orang lain dalam berbagai hal yang berhubungan dengan IT.<br/><br/>
            <span className="text-active">Latar Belakang</span>
            <p className="px-4 pt-2 border-l border-tprime">Awalnya kami hanya ingin membuat project untuk memudahkan kami dalam membuat automisasi untuk sebuah aplikasi. Pada saat itu kami masih belum terpikirkan untuk membuat grup ini. Selang beberapa minggu setelahnya, salah satu dari kami mulai terpikirkan dan dinamai <span className="text-tsec font-bold px-1">Zxra</span> yang dipimpin oleh @CrzxaExe3</p><br/>
            <span className="text-active mt-3">Berdiri</span>
            <p className="px-4 pt-2 border-l border-tprime">12 Juli 2021, merupakan tanggal lahirnya grup ini</p>
          </p>
        </div>

        <div>
          <b className="text-sm lg:text-lg text-tsec">Tentang Web</b>
          <p className="text-xs lg:text-sm whitespace-pre-line break-normal w-full px-4">
          {`Website ini dibuat dengan menggunakan React.js
            Web versi v${pkgs.version}

            Dependensi:
            ${Object.keys(pkgs.dependencies).map(r => {
              let dep = pkgs.dependencies[r]
              return "• "+ r +" v"+ dep
            }).join('\n')}
          `}</p>
        </div>
      </section>

    <Footer left={{ link: "/project", text: "Project" }}/>
    </div>
  );
}

export default About;

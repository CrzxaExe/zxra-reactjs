import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextLine from '../../TextLine';
import PrKonten from '../PrKonten';
import BzbMechanics from './BzbMechanics';
import BzbQuest from './BzbQuest';
import jsonData from '../../../all.json';

function Bzb() {
  const [ktn, setKtn] = useState(false);
  const { img, act, des, name, ver, stats: { app, lang, content } } = jsonData.project.find(e => e.name === "Better Zxra Bedrock")

  const [down, setDown] = useState([]);

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async () => {
    const gets = await axios.get("https://raw.githubusercontent.com/CrzxaExe/quick-bzb/master/download.json");
    setDown(gets.data.reverse())
  }

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1 lg:h-[93vh] overflow-hidden scroll:invisible truncate -mb-[6rem]">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec"><span className="lg:hidden">BZB</span><span className="hidden lg:block">Better Zxra Bedrock</span></div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">Lets enchant your journey</div>
      </header>

      <section id="home" className="w-full py-2 flex flex-wrap flex-row-reverse -mt-2 text-sm h-[94%] overflow-y-hidden">
        <PrKonten content={content} open={ktn} openFunc={setKtn}/>

        <div className="w-full lg:w-[74%] lg:h-full overflow-scroll pb-[10vw]">
          <img src={img} className="w-full lg:w-[80%] mx-auto mt-4 rounded-[6px] lg:rounded-[10px] block px-1" alt={name} />

          <TextLine name="Ringkasan"/>

          <p className="px-2 lg:px-7 w-full text-xs lg:text-sm">
            <span className="block"><i className='bx bx-mobile-landscape mr-1' style={{color:'#ffffff'}}  ></i> {app}</span>
            <span className="block">{act ? (<i className='bx bxs-check-circle mr-1 text-sm' style={{color:'#ffffff'}}  > <span>Active</span></i>):(<i className='bx bxs-error-circle mr-1 text-sm' style={{color:'#ffffff'}}  > <span>Inactive</span></i>)}</span>
            <span className="block"><i className='bx bx-code-curly mr-1 text-sm' style={{color:'#ffffff'}}  ></i> {lang.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(", ")}</span>
            <span className="block"><i className='bx bx-package mr-1 text-sm' style={{color:'#ffffff'}}  ></i> Versi {ver}</span>
            <span className="block bg-nav rounded px-2 py-1 whitespace-pre"><i className='bx bx-note mr-1 text-sm' style={{color:'#ffffff'}}  ></i><p className="pb-3">{des}</p></span>
          </p>

          <TextLine name="Unduh"/>

          <div className="text-xs lg:text-sm px-2 lg:px-7 w-full">
            <span>Versi yang tersedia, klik untuk menuju link download</span>
            <table className="table-fixed w-full rounded">
              <thead className="text-sm lg:text-base bg-navlogo mt-9">
                <tr>
                  <th className="px-3 py-2 tracking-wide text-left">Nama</th>
                  <th className="px-3 py-2 tracking-wide text-left">Versi</th>
                  <th className="px-3 py-2 tracking-wide text-left">Mc Versi</th>
                  <th className="px-3 py-2 tracking-wide text-center">Download</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {down.map((e, i) => (
                  <tr key={i}>
                    <th className="px-3 py-2 tracking-wide text-left font-['Valorant']">{i === 0 ? (<span className="text-active">* </span>) : ""}{e.name}{e.build ? `-B${e.build}` : ""}</th>
                    <th className="px-3 py-2 tracking-wide text-left font-mono">{e.versi}</th>
                    <th className="px-3 py-2 tracking-wide text-left font-mono">{e.mc}</th>
                    <th className="px-3 py-2 tracking-wide text-center"><a className="text-active underline" href={e.link}>Link</a></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <TextLine name="Fitur"/>

          <BzbMechanics/>
          <BzbQuest/>
        </div>
      </section>

    </div>
  );
}

export default Bzb;

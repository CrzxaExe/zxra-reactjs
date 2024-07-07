import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../all.json';
import Footer from "./Footer";

function Project() {
   const [data, setData] = useState([])

   useEffect(() => {
     setData(jsonData.project)
   }, [])

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem]">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">Project</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">Daftar project kami</div>
      </header>

      <section id="in" className="w-full py-2 grid grid-cols-3 lg:grid-cols-5 gap-2 grid-floa-dense mt-2">
       {data.sort((a,b) => a.name.localeCompare(b.name)).map((e,i) => (
         <ProjectList name={e.name} link={e.link} lang={e.stats.lang} app={e.stats.app} act={e.act} ver={e.ver} des={e.des} img={e.img} />
       ))}
      </section>

    <Footer/>
    </div>
  );
}

const ProjectList = ({ name, lang, app, ver, act, des, img, link }) => {
  return (
    <Link to={link ? link : "#"} className="cz-transition bg-navLogo aspect-square rounded relative z-0">
      {img ? (<img loading="lazy" className="transition-all duration-300 ease-in-out object-cover hover:opacity-[0.5] aspect-square rounded" src={img} alt={name}/>) : (<div className="bg-nav w-full aspect-square"></div>)}
      <div className="absolute top-0 px-2 py-3 font-bold text-[0.6rem] lg:text-[0.72rem] font-['valorant'] -tracking-[0.06rem] text-white block">
        <b className="py-1 px-2 bg-nav rounded">{name}</b>
        <span className="block ml-1">{act ? (<i className='bx bxs-check-circle text-active mr-1 text-sm' style={{color:'#22d3ee'}}  > <span className="hidden lg:inline ml-1">Active</span></i>):(<i className='bx bxs-error-circle text-inactive mr-1 text-sm' style={{color:'#fdba74'}}  > <span className="hidden lg:inline ml-1">Inactive</span></i>)}</span>
      </div>
      <div className="absolute bottom-0 px-2 py-1 text-[0.5rem] lg:text-[0.58rem]">
        <span className="font-mono rounded bg-nav px-1">v{ver}</span><br/>
        <div className="hidden lg:inline-flex items-center rounded bg-nav px-1 mb-[0.1rem]"><i className='bx bx-code-curly mr-1 text-sm' style={{color:'#ffffff'}}  ></i> {lang.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(", ")}</div>
        <div className="flex items-center rounded bg-nav px-1"><i className='bx bx-mobile-landscape mr-1 text-sm' style={{color:'#ffffff'}}  ></i> {app}</div>
      </div>
    </Link>
  )
}

export default Project;

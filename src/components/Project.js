import React, { useEffect, useState } from 'react';
import jsonData from '../all.json';

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

      <section id="in" className="w-full py-2 grid grid-cols-3 lg:grid-cols-5 gap-2 grid-floa-dense -mt-4">
       {data.sort((a,b) => a.name.localeCompare(b.name)).map((e,i) => (
         <ProjectList name={e.name} lang={e.stats.lang} app={e.stats.app} act={e.act} ver={e.ver} des={e.des} img={e.img} />
       ))}
      </section>

    </div>
  );
}

const ProjectList = ({ name, lang, app, ver, act, des, img }) => {
  return (
    /*<div className="w-full px-3 py-2 bg-navlogo rounded mt-2 lg:w-[48%] mx-1">
      <div className="font-bold font-mono text-xs lg:text-sm py-[6px] px-2 bg-nav rounded flex items-center inline-flex">{act ? (<i className='bx bxs-check-circle text-active mr-1 text-sm' style={{color:'#22d3ee'}}  ></i>):(<i className='bx bxs-error-circle text-inactive mr-1 text-sm' style={{color:'#fdba74'}}  ></i>)}<b>{name}</b></div>
      {img ? (<img loading="lazy" className="mt-2 w-full cz-project-img aspect-[2/1] lg:aspect-[3/1] object-cover rounded" src={img} alt={name} />) : (<div className="w-full bg-prime rounded lg:aspect-[3/1] mt-2 mb-auto"></div>)}
      <p className="text-xs py-3 mt-2 px-2 bg-prime leading-[0.76rem] font-sans rounded whitespace-pre">{des}</p>
      <div className="bg-nav w-full px-3 py-1 text-xs mt-2">
    </div>*/
    <div className="cz-transition bg-navLogo aspect-square rounded relative z-0">
      {img ? (<img loading="lazy" className="object-cover aspect-square rounded" src={img} alt={name}/>) : (<div className="bg-nav w-full aspect-square"></div>)}
      <div className="absolute top-0 px-2 py-3 font-bold text-[0.6rem] lg:text-[0.72rem] font-['valorant'] -tracking-[0.06rem] text-white block">
        <b className="py-1 px-2 bg-nav rounded">{name}</b>
        <span className="block ml-1">{act ? (<i className='bx bxs-check-circle text-active mr-1 text-sm' style={{color:'#22d3ee'}}  > <span className="hidden lg:inline ml-1">Active</span></i>):(<i className='bx bxs-error-circle text-inactive mr-1 text-sm' style={{color:'#fdba74'}}  > <span className="hidden lg:inline ml-1">Inactive</span></i>)}</span>
      </div>
      <div className="absolute bottom-0 px-2 py-1 text-[0.5rem] lg:text-[0.58rem]">
        <span className="font-mono rounded bg-nav px-1">v{ver}</span><br/>
        <div className="hidden lg:inline-flex items-center rounded bg-nav px-1 mb-[0.1rem]"><i className='bx bx-code-curly mr-1 text-sm' style={{color:'#ffffff'}}  ></i> {lang.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(", ")}</div>
        <div className="flex items-center rounded bg-nav px-1"><i className='bx bx-mobile-landscape mr-1 text-sm' style={{color:'#ffffff'}}  ></i> {app}</div>
      </div>
    </div>
  )
}

export default Project;

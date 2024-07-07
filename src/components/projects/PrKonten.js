// eslint-disable-next-line
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PrKonten({ content, open, openFunc }) {
  useEffect(() => {
    let kons = document.querySelector("#czkonten"), bRot = document.querySelector("#czkontenbar");
    if(open) {
      kons.classList.remove("hidden")
      bRot.classList.remove("-rotate-45")
      bRot.classList.add("rotate-45")
    } else {
      kons.classList.add("hidden")
      bRot.classList.add("-rotate-45")
      bRot.classList.remove("rotate-45")
    }
  }, [open])

  return (
    <div className="w-full relative lg:w-[23%] lg:ml-[2%] py-2 px-3 bg-nav overflow-y-scroll transition-all duration-300 ease-in-out" onClick={() => openFunc(!open)}>
      <b>Konten</b>

      <div id="czkontenbar" className="border-0 border-l-[2px] transition-all duration-500 ease-in-out border-b-[2px] w-[11px] h-[11px] absolute right-5 top-2 origin-center-left lg:hidden -rotate-45"></div>

      <div id="czkonten" className="hidden mt-4 lg:mt-1 flex flex-wrap flex-col font-mono text-xs lg:block lg:text-sm bg-prime rounded-[4px] py-1">
        {content.map(e => (<Link to={e.link ? e.link : "#"} className="block lg:px-2 border-l-2 pl-2 border-0 mr-1 text-tter" >{e.name}</Link> ))}
      </div>
    </div>
  );
}

export default PrKonten;

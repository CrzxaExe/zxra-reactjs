import React, { useEffect } from 'react';
import NavLine from "./NavLine";
import lg from '../img/logo.png';

const Nav = ({ nav, setNav }) => {

  function toPage(path) {
    if(window.location.pathname.replace("/","") === path.replace("/", "")) return;

    window.location.href = path;
  }

  function navToggle() {
    setNav(!nav)
  }

  useEffect(() => {
    let bars = document.querySelector("#nav"), bgdn = document.querySelector("#navdark");;
    if(nav) {
      bars.classList.add("w-[9.7rem]")
      bars.classList.remove("w-[2.3rem]")
      bgdn.classList.add("bg-prime/[0.8]")
      bgdn.classList.remove("bg-prime/[0]")
      bgdn.classList.remove("hidden")
    } else {
      bars.classList.remove("w-[9.7rem]")
      bars.classList.add("w-[2.3rem]")
      bgdn.classList.remove("bg-prime/[0.8]")
      bgdn.classList.add("bg-prime/[0]")
      bgdn.classList.add("hidden")
    }
  }, [nav])
  

  return (
    <nav id="nav" className="transition-all duration-500 ease-in-out fixed pl-2 lg:pl-4 lg:pr-3 h-[100%] w-[2.5rem] border-transparent lg:border-tprime lg:w-[10.5rem] bg-nav lg:bg-nav/[0.4] transition duration-300 ease-in-out truncate pt-[0.2rem] lg:pt-[3.5rem] z-[12] lg:mb-[2.8%] lg:h-full cz-nav overflow-x-hidden overflow-y-scroll mt-[2.5rem] lg:mt-0">
      <div className="w-[99%] lg:w-full -mt-5 lg:-mt-[0.2rem]" onClick={() => navToggle()}>
        <b className="-mt-2 lg:mt-7 text-2xl invisible lg:visible">Menu</b>
        <img src={lg} alt="Zxra Logo" className="mx-auto w-[2.3rem] lg:w-0 bg-navlogo p-[8px] lg:p-0 rounded absolute right-0 lg:relative -mt-2" />
      </div>
      
      <NavLine name="Route"/>

      <div className="flex flex-col mt-9 lg:mt-2 text-sm w-[90%] lg:w-full font-['Valorant'] -tracking-[0.06rem]">
        <div to="home" className="mb-1 flex items-center text-[1.06rem] truncate -ml-1 rounded lg:-ml-2 lg:hover:ml-0 px-2 py-[4px] bg-transparent hover:bg-navlogo transition-all ease-in-out duration-300" onClick={() => toPage("/")}>
          <i className='bx bxs-home mr-1 text-[1.14rem]' style={{color:'#ffffff'}}  ></i>
          <div className="tooltip ml-1">Beranda</div>
        </div>
        <div className="mb-1 flex items-center text-[1.06rem] truncate -ml-1 rounded lg:-ml-2 lg:hover:ml-0 px-2 py-[4px] bg-transparent hover:bg-navlogo transition-all ease-in-out duration-300" onClick={() => toPage("gallery")}>
          <i className='bx bxs-photo-album mr-1 text-[1.14rem]' style={{color:'#ffffff'}}  ></i>
          <div className="tooltip ml-1">Gallery</div>
        </div>
        <div className="mb-1 flex items-center text-[1.06rem] truncate -ml-1 rounded lg:-ml-2 lg:hover:ml-0 px-2 py-[4px] bg-transparent hover:bg-navlogo transition-all ease-in-out duration-300" onClick={() => toPage("project")}>
          <i className='bx bxs-folder mr-1 text-[1.14rem]' style={{color:'#ffffff'}}  ></i>
          <div className="tooltip ml-1">Project</div>
        </div>
        <div className="mb-1 flex items-center text-[1.06rem] truncate -ml-1 rounded lg:-ml-2 lg:hover:ml-0 px-2 py-[4px] bg-transparent hover:bg-navlogo transition-all ease-in-out duration-300" onClick={() => toPage("about")}>
          <i className='bx bxs-copyright mr-1 text-[1.14rem]' style={{color:'#ffffff'}}  ></i>
          <div className="tooltip ml-1">About</div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

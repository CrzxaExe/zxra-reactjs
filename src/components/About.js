import React, { useEffect, useRef } from 'react';

function About() {
  let jsPro = useRef(null), htmlPro = useRef(null);

  useEffect(() => {
  }, []);
  
  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <title>About Zxra</title>
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">About</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">Tentang kami</div>
      </header>

      <section id="about" className="w-full py-2 -mt-2">
        <div className="bg-nav p-2 flex flex-wrap w-full text-xs">
          <div className="w-[10%] flex flex-col">
            <span>JS</span>
            <span>Html</span>
          </div>
          <div className="flex flex-col w-[80%]">
            <div ref={jsPro}></div>
            <div ref={htmlPro}></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;

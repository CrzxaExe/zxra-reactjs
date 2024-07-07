import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import TopBar from "./components/TopBar";

// Project Components
// BZB
import Bzb from "./components/projects/bzb/Bzb";
import BzbMechanics from "./components/projects/bzb/BzbMechanics";

import BzbWeb from "./components/projects/BzbWeb";

const Home = lazy(() => import("./components/Home"))
const Project = lazy(() => import("./components/Project"))

function App() {
  const [nav, setNav] = useState(false);
  return (
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <TopBar/>
        <Nav nav={nav} setNav={setNav}/>

        <div id="navdark" className="w-full h-[100vh] bg-prime/[0] cz-transition fixed lg:hidden top-0 left-0 z-[0]"></div>
        <div className="container w-full pr-[18px] px-6 pl-[13%] lg:pl-[16.5%] overflow-x-hidden overflow-y-scroll h-screen pb-[8%] scroll-smooth">
          <Routes>
            <Route index element={<Home/>} />
            <Route exact path="gallery" element={<Gallery/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="project" element={<Project/>} />
            <Route exact path="/" element={<Home/>} />

            <Route exact path="project/bzb-web" element={<BzbWeb/>} />

            <Route exact path="project/bzb/" element={<Bzb/>} />
            <Route exact path="project/bzb/mechanics" element={<BzbMechanics full={true} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
import About from "./components/About";
import Apps from "./components/Apps";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import TopBar from "./components/TopBar";

// Project Components
// BZB
import Bzb from "./components/projects/bzb/Bzb";
import BzbMechanics from "./components/projects/bzb/BzbMechanics";
import BzbUi from "./components/projects/bzb/BzbUi";
import BzbQuest from "./components/projects/bzb/BzbQuest";

import BzbWeb from "./components/projects/BzbWeb";
import Chatlify from "./components/projects/Chatlify";
import CzDb from "./components/projects/CzDb";
import CzPortofolio from "./components/projects/CzPortofolio";
import KhyroDc from "./components/projects/KhyroDc";
import KhyroWa from "./components/projects/KhyroWa";
import Mkx from "./components/projects/Mkx";
import Xdzr from "./components/projects/Xdzr";
import ZxraDustry from "./components/projects/ZxraDustry";
import ZxraLib from "./components/projects/ZxraLib";
import ZxraRest from "./components/projects/ZxraRest";

// App Component
import Fbdl from "./components/apps/Fbdl";

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
            <Route exact path="apps" element={<Apps/>} />
            <Route exact path="project" element={<Project/>} />
            <Route exact path="/" element={<Home/>} />

            <Route exact path="apps/fbdl" element={<Fbdl/>} />

            <Route exact path="project/bzb-web" element={<BzbWeb/>} />
            <Route exact path="project/Chatlify" element={<Chatlify/>} />
            <Route exact path="project/cz-db" element={<CzDb/>} />
            <Route exact path="project/cz-portofolio" element={<CzPortofolio/>} />
            <Route exact path="project/khyro-dc" element={<KhyroDc/>} />
            <Route exact path="project/khyro-wa" element={<KhyroWa/>} />
            <Route exact path="project/mkx" element={<Mkx/>} />
            <Route exact path="project/xdzr" element={<Xdzr/>} />
            <Route exact path="project/ZxraDustry" element={<ZxraDustry/>} />
            <Route exact path="project/ZxraLib" element={<ZxraLib/>} />
            <Route exact path="project/ZxraRest" element={<ZxraRest/>} />

            <Route exact path="project/bzb/" element={<Bzb/>} />
            <Route exact path="project/bzb/mechanics" element={<BzbMechanics full={true} />} />
            <Route exact path="project/bzb/ui" element={<BzbUi full={true} />} />
            <Route exact path="project/bzb/quest" element={<BzbQuest full={true} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
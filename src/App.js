import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense, useState } from 'react';
//import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import TopBar from "./components/TopBar";

// Project Components
import Bzb from "./components/projects/Bzb";

const Home = lazy(() => import("./components/Home"))

function App() {
  const [nav, setNav] = useState(false);
  return (
    <Suspense fallback={<Loading/>}>
      <TopBar/>
      <Nav nav={nav} setNav={setNav}/>

      <div id="navdark" className="w-full h-[100vh] bg-prime/[0] cz-transition fixed lg:hidden top-0 left-0 z-[0]"></div>
      <div className="container w-full pr-[18px] px-6 pl-[13%] lg:pl-[16.5%] overflow-x-hidden overflow-y-scroll h-screen pb-[8%]">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route exact path="gallery" element={<Gallery/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter basename="/project">
          <Routes>
            <Route exact path="/" element={<Project/>} />
            <Route exact path="bzb" element={<Bzb/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
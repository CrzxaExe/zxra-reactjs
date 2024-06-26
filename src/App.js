import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
//import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import TopBar from "./components/TopBar";

const Home = lazy(() => import("./components/Home"))

function App() {
  return (
    <Suspense fallback={<div>Load</div>}>
      <TopBar/>
      <Nav/>
      <div className="container w-full pr-[18px] px-6 pl-[10.7%] lg:pl-[16.5%] overflow-x-hidden overflow-y-scroll h-screen pb-[8%]">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route exact path="gallery" element={<Gallery/>} />
            <Route exact path="project" element={<Project/>} />
            <Route exact path="about" element={<About/>} />
            <Route exact path="/" element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
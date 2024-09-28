import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";
import About from "./components/About";
import Apps from "./components/Apps";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Loading from "./components/view/Loading";
import TopBar from "./components/view/TopBar";

// Project Components
// BZB
import Bzb from "./components/projects/bzb/Bzb";
import BzbGuild from "./components/projects/bzb/BzbGuild";
import BzbMechanics from "./components/projects/bzb/BzbMechanics";
import BzbMob from "./components/projects/bzb/BzbMob";
import BzbUi from "./components/projects/bzb/BzbUi";
import BzbQuest from "./components/projects/bzb/BzbQuest";
import BzbWeapon from "./components/projects/bzb/BzbWeapon";
import BzbWorld from "./components/projects/bzb/BzbWorld";

import Mkx from "./components/projects/Mkx";
import ZxraRest from "./components/projects/ZxraRest";

import ProjectPage from "./components/ProjectPage";

// App Component
import Fbdl from "./components/apps/Fbdl";
import Gemini from "./components/apps/Gemini";

const Home = lazy(() => import("./components/Home"));
const Project = lazy(() => import("./components/Project"));

function App() {
  const [nav, setNav] = useState(false);

  document.title = "Zxra Create";

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <TopBar />
        <Nav nav={nav} setNav={setNav} />

        <div
          id="navdark"
          className="w-full h-[100vh] bg-prime/[0] cz-transition fixed lg:hidden top-0 left-0 z-[5]"
        ></div>
        <div className="container w-full pr-[18px] px-6 pl-[13%] lg:pl-[16.5%] overflow-x-hidden overflow-y-scroll h-screen pb-[8%] scroll-smooth">
          <Routes>
            <Route index element={<Home />} />
            <Route exact path="gallery" element={<Gallery />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="apps" element={<Apps />} />
            <Route exact path="project" element={<Project />} />
            <Route exact path="/" element={<Home />} />

            <Route exact path="apps/fbdl" element={<Fbdl />} />
            <Route exact path="apps/gemini" element={<Gemini />} />

            <Route
              exact
              path="project/Chatlify"
              element={<ProjectPage page="Chatlify" />}
            />
            <Route
              exact
              path="project/cz-db"
              element={<ProjectPage page="Cz DB" />}
            />
            <Route
              exact
              path="project/khyro-bot"
              element={<ProjectPage page="Khyro Bot" />}
            />
            <Route exact path="project/mkx" element={<Mkx />} />
            <Route
              exact
              path="project/XDzr"
              element={<ProjectPage page="XDzr" />}
            />
            <Route
              exact
              path="project/ZxraDustry"
              element={<ProjectPage page="ZxraDustry" />}
            />
            <Route
              exact
              path="project/ZxraLib"
              element={<ProjectPage page="ZxraLib" />}
            />
            <Route exact path="project/ZxraRest" element={<ZxraRest />} />

            <Route exact path="project/bzb/" element={<Bzb />} />
            <Route
              exact
              path="project/bzb/entity"
              element={<BzbMob full={true} />}
            />
            <Route
              exact
              path="project/bzb/guild"
              element={<BzbGuild full={true} />}
            />
            <Route
              exact
              path="project/bzb/mechanics"
              element={<BzbMechanics full={true} />}
            />
            <Route
              exact
              path="project/bzb/ui"
              element={<BzbUi full={true} />}
            />
            <Route
              exact
              path="project/bzb/quest"
              element={<BzbQuest full={true} />}
            />
            <Route
              exact
              path="project/bzb/weapon"
              element={<BzbWeapon full={true} />}
            />
            <Route
              exact
              path="project/bzb/world"
              element={<BzbWorld full={true} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

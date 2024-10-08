import React from "react";
import TextLine from "../view/TextLine";
import jsonData from "../../all.json";

function Mkx() {
  const {
    img,
    act,
    des,
    name,
    ver,
    stats: { app, lang },
  } = jsonData.project.find((e) => e.name === "MKx");

  document.title = name;

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1 lg:h-[93vh] -mb-[6rem]">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">
          <span className="lg:hidden">MKx</span>
          <span className="hidden lg:block">Machine Khyro Xdzr</span>
        </div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">
          Bot untuk segala kebutuhan
        </div>
      </header>

      <section
        id="home"
        className="w-full py-2 flex flex-wrap flex-row-reverse -mt-2 text-sm h-[94%]"
      >
        <div className="w-full pb-[10vw]">
          <img
            src={img}
            className="w-full lg:w-[30%] mx-auto mt-4 rounded-[6px] lg:rounded-[10px] block px-1"
            alt={name}
          />

          <TextLine name="Ringkasan" />

          <p className="px-2 lg:px-7 w-full text-xs lg:text-sm">
            <span className="block">
              <i
                className="bx bx-mobile-landscape mr-1"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              {app}
            </span>
            <span className="block">
              {act ? (
                <i
                  className="bx bxs-check-circle mr-1 text-sm"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  <span>Active</span>
                </i>
              ) : (
                <i
                  className="bx bxs-error-circle mr-1 text-sm"
                  style={{ color: "#ffffff" }}
                >
                  {" "}
                  <span>Inactive</span>
                </i>
              )}
            </span>
            <span className="block">
              <i
                className="bx bx-code-curly mr-1 text-sm"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              {lang
                .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
                .join(", ")}
            </span>
            <span className="block">
              <i
                className="bx bx-package mr-1 text-sm"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              Versi {ver}
            </span>
            <span className="block bg-nav rounded px-2 py-1 whitespace-pre-wrap mt-2">
              <i
                className="bx bx-note mr-1 text-sm"
                style={{ color: "#ffffff" }}
              ></i>
              <p className="pb-3">{des}</p>
            </span>
          </p>

          <TextLine name="Repo" />

          <p className="py-1 px-3 text-xs lg:text-sm">
            Link repo ada di github kami. khusus untuk whatsapp bot, kami belum
            membuka repo kami untuk publik.
            <a
              href="https://github.com/CrzxaExe/Mkx-Discord-Bot"
              className="text-tsec text-xs block py-3"
            >
              https://github.com/CrzxaExe/Mkx-Discord-Bot
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Mkx;

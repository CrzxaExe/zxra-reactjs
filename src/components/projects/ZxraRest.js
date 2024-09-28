import React from "react";
import TextLine from "../view/TextLine";
import jsonData from "../../all.json";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

function ZxraRest() {
  const {
    act,
    des,
    ver,
    stats: { app, lang },
  } = jsonData.project.find((e) => e.name === "Zxra Rest");

  document.title = "Zxra Rest";

  const endpoint1 = [
    {
      name: "cats",
      method: "get",
      req: [],
    },
    {
      name: "khodam",
      method: "get",
      req: [],
    },
    {
      name: "fbdl",
      method: "post",
      req: [
        {
          name: "link",
          type: "string",
        },
      ],
    },
    {
      name: "gemini",
      method: "post",
      req: [
        {
          name: "prompt",
          type: "string",
        },
      ],
    },
    {
      name: "performance",
      method: "get",
      req: [],
    },
  ];

  const output = `// Output

{
  "title": "Zxra Rest",
  "version": "VERSION",
  "endpoint": "ENDPOINT",
  "result": {}
}`;

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1 lg:h-[93vh] -mb-[6rem]">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem]">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">
          Zxra Rest
        </div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">
          Rest API Zxra
        </div>
      </header>

      <section
        id="home"
        className="w-full py-2 flex flex-wrap flex-row-reverse -mt-2 text-sm h-[94%]"
      >
        <div className="w-full pb-[10vw]">
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

          <TextLine name="Ingin Menggunakan juga?" />

          <div className="px-3 py-4">
            <p>
              API ini tersedia secara publik dan tidak menggunakan limit, namun
              kami membatasi penerimaan banyak request karena alasan finansial
              lah. Namun kami akan selalu meningkatkan performa API kami menjadi
              sebaik mungkin.
              <br />
              <br />
              Silahkan gunakan API kecil kami dengan gratis tanpa memerlukan
              Apikey
              <br />
              <a
                href="https://zxra-rest.vercel.app/"
                className="text-tsec block my-2"
              >
                https://zxra-rest.vercel.app/
              </a>
              Kami juga sedang mengembangkan untuk versi keduanya namun yang
              berbeda yaitu versi ini kami menggunakan library yang bernama
              Elysia.js
            </p>

            <SyntaxHighlighter
              showLineNumbers={true}
              className="rounded mt-2 font-xs"
              language="json"
              customStyle={{ backgroundColor: "#44403c" }}
              style={coy}
            >
              {output}
            </SyntaxHighlighter>

            <TextLine name="Endpoint v1 " />
            <ul className="list-disc pl-3">
              {endpoint1
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((e, i) => {
                  return (
                    <li className="mb-2 p-2 rounded bg-darkprime/[0.4]" key={i}>
                      <b>{e.name}</b>
                      <span className="block mt-1">
                        Method {e.method.toUpperCase()}
                      </span>
                      {e.req.length >= 1 ? (
                        <p className="block">
                          Require:
                          <br />
                          {e.req.map((r) => {
                            return (
                              <span className="block pl-2">
                                {r.name} {r.type}
                              </span>
                            );
                          })}
                        </p>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ZxraRest;

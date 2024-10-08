// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsonData from "./bzbMech";

const BzbMechanics = ({ full }) => {
  return (
    <div className="pb-2 mt-2">
      {full ? (
        <Link
          className="px-2 py-1 bg-nav rounded mt-[2.5rem] mb-5 inline-block"
          to="/project/bzb"
        >
          Kembali
        </Link>
      ) : (
        ""
      )}

      <b className="text-xl lg:text-2xl text-tsec block">
        {full ? "BZB | Mekanik" : "Mekanik"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Bosen dengan mekanik original Minecraftnya? Kami menambahkan beberapa
        mekanik baru yang mungkin akan kalian inginkan didalam Minecraft, namun
        fitur ini masih belum stabil dan akan selalu di update untuk mengurangi
        bug yang ada di mekanik-mekanik tersebut. Fitur ini termasuk penting
        dalam addon ini, jadi jangan sampai diabaikan karena akan sangat
        berpengaruh terhadap gameplaymu
        {!full ? (
          <>
            {" "}
            Dokumentasi semua mekanik addon ini ada{" "}
            <Link className="text-tsec underline" to="mechanics">
              disini
            </Link>
            .{" "}
          </>
        ) : (
          ""
        )}
        Berikut beberapa penjelasan mekanik yang ada di addon ini
        {full ? "" : " secara singkat"}:
        {full ? (
          <div className="bg-nav px-3 py-2 mt-4">
            <b>Konten</b>
            <div>
              {jsonData
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((e) => (
                  <a
                    className="before:content-['#'] text-active block"
                    href={"#" + e.id}
                  >
                    {" "}
                    {e.name}
                    {e.cs ? " <Belum Selesai>" : ""}
                  </a>
                ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {jsonData
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => {
            if (e.cs && !full) return <></>;
            return (
              <div className="mt-5 h-full" id={e.id}>
                <b className="text-sm">
                  {e.name}
                  {e.cs ? " <Belum Selesai>" : ""}
                </b>
                {e.ctn.map((r) => {
                  let split = r.split("/"),
                    first = split[0],
                    form = "";

                  if (!split[1]) return <p className="mt-2">{r}</p>;
                  if (!full) return <></>;
                  switch (first) {
                    case "full":
                      form = <p className="mt-4">{split[1]}</p>;
                      break;
                    case "mono":
                      form = <p className="mt-2 font-mono">{split[1]}</p>;
                      break;
                    case "bold":
                      form = (
                        <p className="mt-3 text-sm lg:text-base font-bold text-tsec">
                          {split[1]}
                        </p>
                      );
                      break;
                    case "sub":
                      form = (
                        <p className="px-2 pt-3 border-0 border-l">
                          {split[1]}
                        </p>
                      );
                      break;
                    case "subpart":
                      form = (
                        <p className="px-4 pt-3 border-0 border-l ml-4 font-mono text-xs">
                          {split[1]}
                        </p>
                      );
                      break;
                    case "source":
                      form = (
                        <SyntaxHighlighter
                          showLineNumbers={true}
                          className="rounded mt-2 font-xs hidden"
                          language="javascript"
                          customStyle={{ backgroundColor: "#44403c" }}
                          style={coy}
                        >
                          {split[1]}
                        </SyntaxHighlighter>
                      );
                      break;
                    default:
                      return <></>;
                  }
                  return form;
                })}
              </div>
            );
          })}
      </p>
    </div>
  );
};

export default BzbMechanics;

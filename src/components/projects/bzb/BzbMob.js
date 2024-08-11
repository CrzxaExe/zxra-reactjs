import React from "react";
import { Link } from "react-router-dom";
import jsonData from "./mob.json";

const BzbMob = ({ full }) => {
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
        {full ? "BZB | Entity" : "Entity"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Kami buatkan sedikit entity yang akan menemani survival kalian. <br />
        Semua mob vanilla juga kami rombak semuanya dan kami naikan pula
        difficulty tiap mob. Vanilla mob memilki ability yang unik yang akan
        membuat gameplay lebih bervariasi.
        {!full ? (
          <>
            {" "}
            Selengkapnya ada{" "}
            <Link className="text-tsec underline" to="entity">
              disini
            </Link>
            .{" "}
          </>
        ) : (
          ""
        )}
      </p>

      {full ? (
        <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
          Semua mob yang ada telah memiliki mekaniknya sendiri. Jika kalian
          tidak bisa beradaptasi, maka kehidupan karakter anda yang akan
          mengalami kesusahan. Namun loot dari mob akan lebih gacor serta lebih
          bervariasi lagi drop yang didapat.
          <br /> <br />
          Berikut beberapa mob yang telah kami tambahkan dan juga kami
          tingkatkan:
        </p>
      ) : (
        ""
      )}

      <div>
        {full
          ? jsonData
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((e) => {
                return (
                  <div className="bg-nav px-3 py-2 pt-1 rounded mb-2">
                    <b className="text-tsec text-sm lg:text-lg">{e.name}</b>
                    <p className="text-xs whitespace-pre-wrap font-mono">
                      {`Tipe mob       : ${e.family
                        .map((r) =>
                          r
                            .split("_")
                            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                            .join(" ")
                        )
                        .join(", ")}\nDarah          : ${
                        e.health
                      } HP\nKecepatan      : ${
                        e.movespeed
                      } Blok/detik\n\nOriginal       : ${
                        e.vanilla ? "Vanilla" : "Addon"
                      }\nTelur Spawn    : ${
                        e.spawnable ? "Iya" : "Tidak"
                      }\nMuncul natural : ${
                        e.natural ? "Iya" : "Tidak"
                      }\nKondisi Spawn  : ${e.spawnTrigger
                        .map((r) => r.charAt(0).toUpperCase() + r.slice(1))
                        .join(", ")}\n\nKemampuan      : ${
                        e.ability ? e.ability : "Tidak Ada"
                      }\nKeahlian(Skill):\n${
                        e.skill.length > 0
                          ? e.skill.map((d) => "* " + d).join("\n")
                          : "Tidak Ada"
                      }`}
                    </p>
                  </div>
                );
              })
          : ""}
      </div>
    </div>
  );
};

export default BzbMob;

import React from "react";
import { Link } from "react-router-dom";

const BzbTem = ({ full }) => {
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
        {full ? "BZB | Senjata / Weapon" : "Senjata / Weapon"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Senjata didalam sini memiliki beberapa jenis dan juga raritynya
        masing-masing. Jenis senjata ada 2 yaitu normal dan Spesial.
        <br />
        <br />
        Senjata Normal berarti seperti senjata pada umumnya dan tidak memliki
        efek khusus.
        <br />
        <br />
        Senjata Spesial memiliki efek khusus disetiap senjata, mulai dari pasif,
        tipe, rarity dan skill senjata.
        {!full ? (
          <>
            {" "}
            Selengkapnya ada{" "}
            <Link className="text-tsec underline" to="weapon">
              disini
            </Link>
            .{" "}
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default BzbTem;

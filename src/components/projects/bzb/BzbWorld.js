import React from "react";
import { Link } from "react-router-dom";

const BzbWorld = ({ full }) => {
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
        {full ? "BZB | Dunia (World)" : "Dunia / World"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Proses pembuatan dunia Minecraft kami tingkatkan mulai dari bioma,
        struktur dan lainnya sudah kami update sedikit untuk meningkatkan
        kualitas bermain kamu.
        {!full ? (
          <>
            {" "}
            Selengkapnya ada{" "}
            <Link className="text-tsec underline" to="world">
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

export default BzbWorld;

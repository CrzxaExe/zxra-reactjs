import React from "react";
import { Link } from "react-router-dom";

const BzbNotify = ({ full }) => {
  return (
    <div className="pb-2 mt-2" id="notify">
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
        Pemberitahuan / Notify
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Fitur ini menghadirkan pesan untuk pemberitahuan tentang suatu peristiwa
        tertentu seperti perubahan cuaca, lokasi kematian pemain dan lain
        sebagainya
      </p>
    </div>
  );
};

export default BzbNotify;

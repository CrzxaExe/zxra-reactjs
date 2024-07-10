import React from 'react';
import { Link } from 'react-router-dom';

const BzbUi = ({ full }) => {

  return (
    <div className="pb-2 mt-2">
      {full ? (<Link className="px-2 py-1 bg-nav rounded mt-[2.5rem] mb-5 inline-block" to="/project/bzb">Kembali</Link>) : ""}

      <b className="text-xl lg:text-2xl text-tsec block">
        {full ? "BZB | Tatap Muka / UI" : "Tatap Muka / UI"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Kami menawarkan tampilan UI simpel dan minimalist. 
        Disertai nuasa normal dari kami yang mungkin akan membuat anda menyukai style kami.
        Beberapa layar juga sudah kami lakukan full modifikasi.
        Blok juga ada beberapa yang kami tambahkan seperti variasi ataupun animasi baru dari blok mau itu dari addon ini ataupun vanilla Minecraft. 
        {!full ? (<> Selengkapnya ada <Link className="text-tsec underline" to='ui'>disini</Link>. </>) : ""}
      </p>
    </div>
  )
};

export default BzbUi;

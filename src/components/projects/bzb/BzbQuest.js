import React from 'react';
import { Link } from 'react-router-dom';

const BzbQuest = ({ full }) => {

  return (
    <div className="pb-2 mt-2">
      {full ? (<Link className="px-2 py-1 bg-nav rounded mt-[2.5rem] mb-5 inline-block" to="/project/bzb">Kembali</Link>) : ""}

      <b className="text-xl lg:text-2xl text-tsec block">
        {full ? "BZB | Misi" : "Misi"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Sebagai addon genre RPG, tak lupa kita menambahkan fitur krusial yang satu ini.
        Dengan ini kalian bisa mencari uang untuk membeli sesuatu ataupun yang lain.
        Misi yang didapatkan beragam tipe, hadiah dan persyaratan.
        {!full ? (<> Dokumentasi dari fitur misi ada <Link className="text-tsec underline" to='quest'>disini</Link>. </>) : ""}
      </p>

      {full ? (
        <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
          Persyaratan misi memiliki minimal poin untuk dapat mengambil misi tersebut. 
          Dan disini kami menggunakan mekanik Reputasi sebagai persyaratan tersebut
        </p>
      ) : (<></>)}
    </div>
  )
};

export default BzbQuest;

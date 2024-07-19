import React from 'react';
import { Link } from 'react-router-dom';

const BzbMob = ({ full }) => {

  return (
    <div className="pb-2 mt-2">
      {full ? (<Link className="px-2 py-1 bg-nav rounded mt-[2.5rem] mb-5 inline-block" to="/project/bzb">Kembali</Link>) : ""}

      <b className="text-xl lg:text-2xl text-tsec block">
        {full ? "BZB | Entity" : "Entity"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Kami buatkan sedikit entity yang akan menemani survival kalian. 
        {!full ? (<> Selengkapnya ada <Link className="text-tsec underline" to='entity'>disini</Link>. </>) : ""}
      </p>
    </div>
  )
};

export default BzbMob;

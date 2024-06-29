import React from 'react';

const BzbMechanics = ({ full }) => {
  const index = [
    {
      name: "Kehausan (Thirst)"
    }
  ];

  return (
    <div className="pb-2 mt-2">
      {full ? (<a className="px-2 py-1 bg-nav rounded mt-[2.5rem] mb-5 inline-block" href="/project/bzb">Kembali</a>) : ""}

      <b className="text-xl lg:text-2xl text-tsec block">
        {full ? "BZB | Mekanik" : "Mekanik"}
      </b>

      <p className="text-xs lg:text-sm px-3 py-1 w-full whitespace-pre-wrap text-justify">
        Bosen dengan mekanik original Minecraftnya? Kami menambahkan beberapa mekanik baru yang mungkin akan kalian inginkan didalam Minecraft,
        namun fitur ini masih belum stabil dan akan selalu di update untuk mengurangi bug yang ada di mekanik-mekanik tersebut. 
        {!full ? (<> Dokumentasi semua mekanik addon ini ada <a className="text-tsec underline" href='/project/bzb/mechanics'>disini</a>. </>) : ""}
        Berikut beberapa mekanik yang ada di addon ini:

        {index.sort((a, b) => a.name.localeConpare(b.name)).map(e => (
          <div className="mt-5">
            <b>{e.name}</b>
          </div>
        ))}
      </p>
    </div>
  )
};

export default BzbMechanics;
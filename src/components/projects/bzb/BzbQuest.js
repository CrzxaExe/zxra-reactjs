import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from './quest';

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
          Dan disini kami menggunakan mekanik Reputasi sebagai persyaratan tersebut<br/><br/>
          Daftar misi:
        </p>
      ) : (<></>)}

      {full ? (
        <div className="pb-4 px-3 text-sm whitespace-pre-warp">
          {jsonData.sort((a, b) => a.rep < b.rep).map((e, i) => {
            return (
              <div className="pb-4">
                <b className="text-base text-tsec">{i+1}. {e.name}</b>
                <p className="pl-4">
                  {e.des}<br/>
                  <span className="bg-nav py-2 px-2 block -left-2 relative my-1">Minimal reputasi {e.rep}</span>
                  Tugas:<br/>
                  {e.task.map(r => (<>• {r.act.charAt(0).toUpperCase() + r.act.slice(1)} {r.target.replace("cz:","").replace(/_/g, " ")} {r.amount} kali<br/></>))}
                  <br/>
                  Hadiah:
                  {
                    e.reward.map(r => {
                      let split = r.type.split("/"), ret = "";
                      switch(split[0]) {
                        case "cash": ret = `• $${r.amount}`; break;
                        case "rep": ret = `• Reputasi +${r.amount}`; break;
                        case "voxn": ret = `• ${r.amount} Voxn`; break;
                        case "item":
                          let item = split[1].replace("cz:","").replace(/_/gi, " ").split(" ").map(f => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
                          ret = `• ${r.amount} Item ${item}`;
                          break;
                        default: ret = ""
                      }
                      return (<><br/>{ret}</>)
                    })
                  }
                </p>
              </div>
            )
          })}
        </div>
      ) : ""}
    </div>
  )
};

export default BzbQuest;

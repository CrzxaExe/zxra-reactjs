import React from "react";
import { Link } from "react-router-dom";
import imgGui from "./img/gui.jpg";
import imgStats from "./img/stat_menu.jpg";

const BzbUi = ({ full }) => {
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
        {full ? "BZB | Tatap Muka / UI" : "Tatap Muka / UI"}
      </b>

      <img alt="Gui" className="w-full py-4 rounded" src={imgGui} />

      <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
        Kami menawarkan tampilan UI simpel dan minimalist. Disertai nuasa normal
        dari kami yang mungkin akan membuat anda menyukai style kami. Beberapa
        layar juga sudah kami lakukan full modifikasi. Blok juga ada beberapa
        yang kami tambahkan seperti variasi ataupun animasi baru dari blok mau
        itu dari addon ini ataupun vanilla Minecraft.
        {!full ? (
          <>
            {" "}
            Selengkapnya tentang tampilan Minecraft bisa klik{" "}
            <Link className="text-tsec underline" to="ui">
              disini
            </Link>
            .{" "}
          </>
        ) : (
          ""
        )}
      </p>

      {full ? (
        <>
          <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
            Dari image tadi akan kami jelaskan tentang apa saja yang ada di gui
            dan juga perubahan yang terjadi di guinya.
            <br />
            <br />
            Element pada main gui:
            <ul className="pb-2">
              <li className="bg-nav px-4 py-2 rounded mt-2">
                <b>Chat</b>
                <p>
                  Elemen pesan yang muncul dan hilang memiliki animasi slide
                </p>
              </li>
              <li className="bg-nav px-4 py-2 rounded mt-2">
                <b>Paper Doll</b>
                <p>
                  Paper doll atau bisa disebut display kecil dari karakter anda
                  telah dipindahkan ke bagian
                </p>
              </li>
              <li className="bg-nav px-4 py-2 rounded mt-2">
                <b>Scoreboard</b>
                <p>
                  Papan skore dipindahkan dari yang awalnya dibagian kanan
                  tengah, sekarang telah dipindahkan ke bagian kanan bawah guna
                  menyesuaikan gui dan mengestetikan juga
                </p>
              </li>
              <li className="bg-nav px-4 py-2 rounded mt-2">
                <b>Stats</b>
                <p>
                  Status kamu sebagai pemain, menampilkan hal penting akan
                  dirimu. Beberapa fitur ini memiliki batas minimun lvl agar
                  fitur tersebut dapat bekerja atau tampil di bagian statusmu.
                  Berikut penjelasan tentang apa saja yang ada di dalam elemen
                  ini:
                  <br />
                  <br />
                  - Nama pemain
                  <br />
                  - Status spesialismu | Lvl & Xp
                  <br />
                  - Uang yang kamu punya
                  <br />
                  - Voxn yang kamu punya
                  <br />
                  - Persentase Stamina & Kehausan <br />
                  &nbsp; &nbsp;S singkatan dari Stamina diikuti persentase
                  <br />
                  &nbsp; &nbsp;T singkatan dari Thirst(Kehausan) diikuti
                  persentase
                  <br />- Suhu, Persentase Dirty(Kekotoran), Reputasi & Total
                  Pemain <br />
                  &nbsp; &nbsp;Suhu dari pemain
                  <br />
                  &nbsp; &nbsp;D singkatan dari Dirty(Kekotoran) diikuti
                  persentase
                  <br />
                  &nbsp; &nbsp;Rep singkatan dari Reputasi diikuti jumlah
                  reputasi pemain
                  <br />
                  &nbsp; &nbsp;AP singkatan dari Active Player(Pemain Aktif)
                  diikuti jumlah total pemain
                  <br />- View block id, di buka saat level spesialismu mencapai
                  lebih dari 6
                  <br />- Day(Hari) & Time(Waktu):
                  <br />
                  &nbsp; &nbsp;Day atau hari lalu diikuti jumlah hari dari
                  Minecraftnya
                  <br />
                  &nbsp; &nbsp;Time atau waktu diikuti jam dari hari tersebut
                </p>
              </li>
            </ul>
          </p>

          <b>Custom Form GUI</b>
          <img
            src={imgStats}
            className="w-full pt-1 pb-4 rounded"
            alt="Statistik"
          />

          <p className="text-xs lg:text-sm px-3 py-1 pb-3 w-full whitespace-pre-wrap text-justify">
            Server form ui memiliki beberapa variasi, variasi tersebut dapat
            digunakan jika key dari judul server form sama dengan key dari
            templatemya
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BzbUi;

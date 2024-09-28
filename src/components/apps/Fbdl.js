import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Fbdl() {
  document.title = "Fbdl";

  const [videoUrl, setVideoUrl] = useState();
  const [videoName, setVideoName] = useState("");

  const [link, setLink] = useState();

  const getFb = async (e) => {
    e.preventDefault();
    if (link === "" || !link)
      return toast.error("Masukan link video facebooknya");

    if (!link.startsWith("http")) return toast.error("Link tidak valid");

    toast.info("Mengambil video ");

    setLink("");

    try {
      let gets = await axios.post("https://zxra-rest.vercel.app/fbdl", {
        link: link,
      });
      let result = gets.data?.result;

      setVideoUrl(result?.HD);
      setVideoName(result?.Title);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, [videoUrl, videoName]);

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem] mb-5">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">
          FB Downloader
        </div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">
          Unduh video facebook anda
        </div>
      </header>

      <section id="home" className="w-full -mt-4 text-xs text-tprime">
        <p className="pb-3 text-xs text-justify">
          Pengunduh video Facebook untuk anda secara mudah dan simpel, sesimpel
          hubungan anda dengan doi. Tak perlu waktu lama, cobalah sekarang.
        </p>

        <ToastContainer theme="dark" position="bottom-right" autoClose={1000} />

        {videoUrl !== undefined ? (
          <a
            className="block text-tsec text-sm bg-nav py-2 px-3 max-w-[100%] truncate overflow-x-scroll"
            href={videoUrl}
          >
            <video src={videoUrl} className="w-full py-3" controls></video>
            <span className="text-tprime py-3 whitespace-pre-wrap">
              Link anda:
            </span>{" "}
            {videoName}
          </a>
        ) : (
          ""
        )}
        <form action="" className="bg-nav px-4 py-3">
          <label className="block text-tsec font-['Valorant'] text-xl lg:text-2xl mt-2 font-bold">
            Link
          </label>
          <div className="inline-flex flex-wrap w-full bg-prime rounded-[8px] justify-left items-start">
            <textarea
              type="text"
              placeholder="Masukan link"
              className="outline-none py-2 px-3 w-[88%] text-tprime bg-nav/[0] text-xs"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button
              className="bg-nav p-1 py-2 flex items-center justify-center rounded w-[10%] text-lg my-auto"
              onClick={(e) => getFb(e)}
            >
              <i className="bx bxs-send h-[100%]"></i>
            </button>
          </div>
        </form>

        <div className="mt-3 py-2">
          <h3 className="text-base font-bold text-tsec">
            Cara menggunakan Facebook Downloader
          </h3>
          <p className="py-2 text-xs">
            Caranya sebenarnya cukup simpel dan mudah. Berikut tata cara
            menggunakannya:
          </p>
          <ol className="list-decimal pl-3 py-2">
            <li>Salin tautan dari video Facebook.</li>
            <li>Tempelkan/masukan link tadi kedalam kolom "Masukan link".</li>
            <li>Lalu klik tombol kirim yang berada di kanan kolom tersebut.</li>
            <li>
              Tunggu prosess, dan jika tidak bisa ulangi sebanyak maksimal 3
              kali, kalau lebih dari itu berarti video tidak dapat di unduh.
            </li>
            <li>
              Jika sudah muncul tampilan dari video tersebut, maka kalian bisa
              download dengan klik link dibawah video atau di video
              tersebut(klik titik 3 di bagiam video).
            </li>
          </ol>
        </div>

        <div className="py-2">
          <h3 className="text-base font-bold text-tsec">
            Tidak Muncul Videonya?
          </h3>
          <p className="py-2 text-xs text-justify">
            Terkadang API milik kami bermasalah dan mungkin emang link yang anda
            masukan tidak bisa di download ataupun tidak dapat di ambil oleh
            API. Untuk itu kami masih perlu meningkatkan kualitas dari API kami.
            Berikut mungkin bisa jadi penyebab tidak munculnya video yang ingin
            anda unduh:
          </p>
          <ul className="pl-3 py-2 list-disc">
            <li>
              Url mereverensikan ke Instagram. Beberapa link tersebut terkadang
              memang tidak dapak di unduh di API kami.
            </li>
            <li>Url tidak valid.</li>
            <li>Parameter Url rusak.</li>
            <li>API kami sedang tidur mungkin.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Fbdl;

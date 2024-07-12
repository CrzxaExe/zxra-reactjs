import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Fbdl() {
  const [videoUrl, setVideoUrl] = useState();
  const [videoName, setVideoName] = useState("");

  const [link, setLink] = useState();

  const getFb = async (e) => {
    e.preventDefault();
    if(link === "" || !link) return toast.error('Masukan link video facebooknya');

    if(!link.startsWith("http")) return toast.error("Link tidak valid");

    toast.info('Mengambil video ')

    setLink("");

    try {
      let gets = await axios.post("https://zxra-rest.vercel.app/fbdl", {
        link: link,
      })
      let result = gets.data?.result;

      //console.table(result)

      //if(!result.HD) return;

      setVideoUrl(result?.HD)
      setVideoName(result?.Title)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
  }, [videoUrl,videoName])

  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] -z-1">
      <title>Facebook Downloader</title>
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem] mb-5">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">FB Downloader</div>
        <div className="before:content-['>'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">Unduh video facebook anda</div>
      </header>

      <section id="home" className="w-full py-2 -mt-2 text-xs text-tprime">
        <ToastContainer
	  theme='dark'
	  position='bottom-right'
	  autoClose={3000}
        />

        {videoUrl !== undefined ? (<a 
          className="block text-tsec text-sm bg-nav py-2 px-3 max-w-[100%] truncate overflow-x-scroll"
          href={videoUrl}>
          <span className="text-tprime">Link anda:</span> {videoName}
        </a>) : ""}
        <form action="" className="mt-4 bg-nav px-4 py-3">
          <label className="text-sm lg:text-lg text-tsec font-['Valorant'] text-xl lg:text-2xl mt-2 font-bold">Link</label>
          <div>
            <textarea type="text" placeholder="Masukan link" className="py-2 px-3 w-full text-tprime bg-prime text-xs focus:outline-navlogo" value={link} onChange={(e) => setLink(e.target.value)}/>
          </div>
          <button className="bg-prime py-3 px-4 rounded mt-3" onClick={(e) => getFb(e)}>Dapatkan</button>
        </form>
      </section>
    </div>
  );
}

export default Fbdl;

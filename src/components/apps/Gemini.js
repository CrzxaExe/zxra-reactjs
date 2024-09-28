import React, { useState } from "react";
import axios from "axios";

const Gemini = () => {
  const [chat, setChat] = useState({ chat: [] });
  const [prompt, setPrompt] = useState("");

  document.title = "Gemini";

  const changePrompt = () => {
    setPrompt(document.getElementById("prompt").value);
  };
  const createChat = ({ from, msg }) => {
    let newChat = { ...chat };
    newChat.chat.push({
      from,
      msg,
    });

    setChat(newChat);
  };
  const handlePrompt = async () => {
    try {
      let response = await axios.post("https://zxra-rest.vercel.app/gemini", {
        prompt,
      });

      createChat({ from: "Gemini", msg: response.data.result });
    } catch (err) {
      alert(err.message);
    }
  };
  const sendPrompt = () => {
    let newChat = { ...chat };
    newChat.chat.push({
      from: "User",
      msg: prompt,
    });

    handlePrompt();
    // alert(JSON.stringify(newChat));

    setChat(newChat);
    document.getElementById("prompt").value = "";
  };
  return (
    <div className="mt-[2.25rem] lg:mt-[1.6rem] w-full relative overflow-hidden max-h-screen">
      <header className="w-full pb-2 pt-4 lg:pt-7 flex lg:flex-col items-end lg:items-start mt-[0.5rem] mb-5">
        <div className="font-bold text-xl lg:text-2xl mr-3 text-tsec">
          Gemini AI
        </div>
        <div className="before:content-['|'] lg:before:content-[''] before:mr-2 lg:before:mr-0 before:text-xl -mt-2 text-tter">
          Bertanya dengan Gemini AI Google
        </div>
      </header>

      <hr className="-mt-5" />

      <section className="relative max-w-full px-2 h-[84vh] lg:h-[80vh] mt-[1rem]">
        <div className="bg-nav/[0] rounded-lg h-[93%] text-xs p-2 flex gap-2 flex-col overflow-y-scroll">
          <div className="bg-tter/[0.6] w-fit px-2 py-[2px] rounded-md">
            <b className="text-active">Gemini</b>
            <p className="whitespace-pre-wrap text-justify">
              Selamat datang, silahkan masukan prompt
            </p>
          </div>
          {chat.chat.map((e) => {
            return (
              <div className="bg-tter/[0.6] w-fit px-2 py-[2px] rounded-md">
                <b className="text-active">{e.from}</b>
                <p className="whitespace-pre-wrap text-justify">{e.msg}</p>
              </div>
            );
          })}
        </div>
        <div className="w-[99%] transition duration-300 ease-in-out absolute bottom-1 bg-tter/[0.4] mx-auto h-max-[50px] rounded-lg px-2 py-1 flex justify-between items-center">
          <textarea
            type="text"
            placeholder="Masukan prompt"
            id="prompt"
            onChange={changePrompt}
            className="min-h-[30px] h-[20px] placeholder:flex outline-0 placeholder:items-center placeholder:justify-center w-[93%] bg-nav/[0] placeholder:text-tprime
            p-1 text-sm"
          />
          <button
            onClick={sendPrompt}
            className="flex items-center bg-nav/[0] hover:bg-nav active:bg-active transition duration-300 ease-in-out justify-center w-[6.5%] text-center p-1 aspect-square rounded h-[20px]"
          >
            <i className="bx bx-send"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gemini;

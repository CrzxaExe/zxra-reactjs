import React, { useEffect, useState } from "react";

const TopBar = () => {
  let [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  });

  useEffect(() => {
    let clockInt = setInterval(() => {
      let date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
      });
    }, 1000);
    return () => clearInterval(clockInt);
  }, []);

  let convertTwoDigit = (number) => {
    return number.toLocaleString("en-Us", { minimumIntegerDigits: 2 });
  };

  return (
    <header className="fixed pb-1 pt-2 px-[2.3rem] bg-navlogo/[0.6] lg:bg-nav/[0.8] w-full cz-top z-[40] flex items-center">
      <div className="font-bold font-['Valorant'] text-lg self-start basis-11/12 text-left opacity-100">
        @Zxra
      </div>
      <span className="basis-1/12 text-sm font-['Valorant'] tracking-[0.05rem]">
        {convertTwoDigit(time.hours)}:{convertTwoDigit(time.minutes)}
      </span>
    </header>
  );
};

export default TopBar;

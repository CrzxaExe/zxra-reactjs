import React from "react";

function Footer({ left, right }) {
  return (
    <footer className="w-full mt-2 py-4 pb-[5rem] px-3 h-[20px] relative -z-1">
      {left ? (
        <a
          className="absolute left-0 text-tsec hover:text-navlogo text-sm -z-1"
          href={left.link}
        >
          {"< " + left.text}
        </a>
      ) : (
        <div></div>
      )}
      {right ? (
        <a
          className="absolute right-0 text-tsec hover:text-navlogo text-sm -z-1"
          href={right.link}
        >
          {right.text + " >"}
        </a>
      ) : (
        <div></div>
      )}
    </footer>
  );
}

export default Footer;

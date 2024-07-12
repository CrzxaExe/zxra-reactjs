import React from 'react';

const NavLine = ({ name }) => {
  return (
    <div className="w-full flex -mb-5 lg:-mb-1 text-sm items-center invisible lg:visible lg:mt-7 relative">
      <b className="whitespace-nowrap">{name}</b>
      <div className="w-full bg-tprime h-[0.8px] ml-1"></div>
    </div>
  )
}

export default NavLine;

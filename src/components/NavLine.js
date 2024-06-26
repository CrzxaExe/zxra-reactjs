import React from 'react';

const NavLine = ({ name }) => {
  return (
    <div className="w-full flex -mb-5 lg:-mb-2 text-sm items-center invisible lg:visible lg:mt-7">
      <b>{name}</b>
      <div className="w-full bg-tprime h-[1px] ml-1"></div>
    </div>
  )
}

export default NavLine;

import React from 'react';

const TextLine = ({ name }) => {
  return (
    <div className="w-full flex mb-2 lg:mb-1 text-sm items-center mt-7 lg:mt-6">
      <b className="whitespace-nowrap">{name}</b>
      <div className="w-full bg-tprime h-[1px] ml-1"></div>
    </div>
  )
}

export default TextLine;

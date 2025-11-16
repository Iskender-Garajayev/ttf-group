import React from 'react';

const Footer = () => {
  return (
    <footer className=" w-full flex justify-center items-center">
      <div className=" w-11/12 h-80 flex justify-between bg-slate-500 ">
        <div className=" w-2/5 h-full bg-orange-700">
          <h1>1</h1>
        </div>
        <div className=" w-1/4 h-full bg-red-400 ">
          <h1>2</h1>
        </div>
        <div className=" w-1/4 h-full bg-slate-700 flex content-center items-center ">
          <h1>3</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

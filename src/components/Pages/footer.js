import React from 'react';
import { FaS} from 'react-icons/fa6';
import { SlCallOut } from "react-icons/sl";

const Footer = () => {
  return (
      <div className="w-full p-4 text-center bg-slate-700 text-white flex justify-between">
        <div className="fotter-left flex items-center">
          <p>Copyright © 2023 </p> 
          <span className="font-bold flex items-center relative pl-2">
            <span className="text-[16px]">
              <FaS/>
            </span>
            <span className="absolute left-[22px]">hoppika</span>
          </span>
        </div>
        
        <div className="footer-right flex items-center gap-2 text-lg">
          <SlCallOut/>
          <p>Contact us</p>
        </div>
      </div>
  );
};

export default Footer;

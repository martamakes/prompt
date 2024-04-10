import React, { useState } from 'react';
import Link from "next/link";
import Navigation from "./Navigation";
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';

type Props = {
  activeItem: number;
}

const Header = ({ activeItem }: Props) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${active && "fixed top-0 left-0 bg-[#00000] z-[9999]"
        }`}
    >
      <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className="text-[#64ff4c]">Dis</span>trify
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Navigation activeItem={activeItem}>
          </Navigation>
        </div>
        <div className="flex items-center ml-10 ">
          <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer"></AiOutlineSearch>
          {/* Todo authentication */}
          <Link href="/sign-in">
            <CgProfile className='text-[25px] cursor-pointer' />
          </Link>
        </div>
      </div>
      {/* Todo if logged */}
      {/* For mobile Screen */}
      <div className="w-full sm:block md:hidden flex items-center justify-between">
        <div>
          <Link href="/">
            <h1>
              <Link href={"/"}>
                <h1 className="font-Inter text-3xl cursor-pointer">
                  <span className="text-[#64ff4c]">Dis</span>trify
                </h1>
              </Link>
            </h1>
          </Link>
        </div>
        <FaBars className='text-2xl cursor-pointer'
        onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Header
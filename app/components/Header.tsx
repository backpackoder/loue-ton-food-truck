"use client";

import Link from "next/link";
import { useState } from "react";

// Commons
import { ROUTES } from "@/commons/commons";

// Components
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-10 fixed top-0 left-0 w-full text-lg animation upToDownHeader sm:text-white">
      <nav
        className={`absolute ${
          open ? "translate-x-0" : "-translate-x-[calc(100%-50px)]"
        } top-0 left-0 flex justify-between text-white text-center duration-500
        sm:translate-x-0 sm:justify-between sm:w-full`}
      >
        <ul className="top-0 left-0 flex flex-col justify-center gap-2 w-full bg-[rgb(10,10,125)] p-2 rounded-br-lg sm:flex-row">
          <Logo />

          {Object.entries(ROUTES).map(([key, entries], index) => {
            return (
              <li key={index} className="flex items-center cursor-pointer hover:bg-[rgb(5,5,100)]">
                <Link
                  href={entries.URL}
                  className="flex items-center h-full py-1 px-2 hover:text-white"
                >
                  {entries.LABEL}
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className={` top-0 left-0 flex flex-col align-center justify-between w[50px] h-[50px] aspect-square
          bg-[rgb(10,10,125)] p-2 rounded-e-lg duration-500
          sm:hidden`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block h-1 w-full rounded-lg bg-white"></span>
          <span className="block h-1 w-full rounded-lg bg-white"></span>
          <span className="block h-1 w-full rounded-lg bg-white"></span>
        </div>
      </nav>
    </header>
  );
}

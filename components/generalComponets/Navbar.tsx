"use client";

import NavLinksMainData from "@/data/NavLinksMainData";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-24 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-4">
          <Link href="/" className="nav-logo relative ">
            <Image
              src="/logos/logo-tran.webp"
              alt="Logo"
              width={200}
              height={100}
              className="w-auto h-32"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-xl text-white font-bold">
          {NavLinksMainData.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 && (
                <li className="text-white-80 font-normal" aria-hidden="true">
                  -
                </li>
              )}
              <li className="nav-item">
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-base font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "border-b-2 border-red-600 text-white shadow-lg shadow-red-600/20"
                      : "text-gray-300 hover:text-white hover:border-b-2 hover:border-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            </Fragment>
          ))}
        </ul>
        <ul className="hidden lg:flex">
          <li className="nav-item">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 bg-red-600 text-white hover:bg-red-800 shadow-md ml-4"
            >
              Κλείσε Ραντεβού
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        <button
          className="lg:hidden p-2 text-white ml-auto transition-colors hover:text-red-500"
          aria-label="Άνοιγμα μενού"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-24 left-0 right-0 bg-white border-t rounded-b-2xl overflow-hidden animate-in slide-in-from-top duration-300 shadow-lg">
          <ul className="flex flex-col p-4 space-y-2">
            {NavLinksMainData.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base font-bold rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-red-500 bg-[#B9007C]/5 border-l-4 border-red-500"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-center text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-all active:scale-95"
              >
                Κλείσε ραντεβού
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

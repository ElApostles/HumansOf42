import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo42 from "@/public/42_logo.svg";

const victor = Victor_Mono({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Humans of 42",
  description: "Interviews with people around 42 Seoul",
};

function NaviBar() {
  return (
    <div className="w-full flex flex-row bg-gray-800">
      <Link className="p-4" href={"/"}>
        <div className="flex flex-row gap-2 rounded p-1 outline-none hover:outline hover:outline-white/30 text-white">
          <span className="">Humans of</span>
          <Image className="relative" src={logo42} alt={"42_logo"} width={32} />
        </div>
      </Link>
    </div>
  );
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${victor.className}`}>
      <body
        className={`bg-white/90 dark:bg-black/90 flex flex-col justify-center items-center text-gray-800 dark:text-gray-50/90 `}
      >
        <NaviBar />
        <div className="mx-8 md:mx-16 xl:mx-32 relative">{props.children}</div>
      </body>
    </html>
  );
}

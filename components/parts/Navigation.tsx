import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";
import AiIcon from "../icons/AiIcon";
import DarkModeIcon from "../icons/DarkModeIcon";
import BookmarkIcon from "../icons/BookmarkIcon";

export default function Navigation() {
  return (
    <div className="bg-zinc-800/40 z-20 flex items-center gap-2 backdrop-blur-lg fixed p-2 border border-white/5 rounded-full bottom-12 left-1/2 -translate-x-1/2">
      <Link
        href="/"
        className="bg-white/5 w-[50px] border border-white/5 h-[50px] flex justify-center rounded-full items-center"
      >
        <HomeIcon className="w-6" />
      </Link>

      <div className="relative">
        <AiIcon className="absolute top-3.5 left-4 text-white/50 w-[28px]" />
        <input
          type="text"
          className="py-3.5 focus:w-[360px] transition-all duration-300 font-[600] w-[240px] overflow-hidden pl-14 outline-none rounded-full bg-white/5 border border-white/10"
          placeholder="Magic Search"
        />
      </div>

      <div className="w-[2px] h-[30px] bg-white/15" />

      <div className="flex gap-1">
        <div className="w-[50px] active:scale-90 hover:border-white/5 border-transparent border transition duration-300 hover:bg-white/5 cursor-pointer h-[50px] flex justify-center rounded-full items-center">
          <DarkModeIcon className="w-6" />
        </div>
        <div className="w-[50px] active:scale-90 hover:border-white/5 border-transparent border transition duration-300 hover:bg-white/5 cursor-pointer h-[50px] flex justify-center rounded-full items-center">
          <BookmarkIcon className="w-6" />
        </div>
      </div>
    </div>
  );
}

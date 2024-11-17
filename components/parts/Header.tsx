import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-4xl mx-auto h-28 flex items-center gap-10">
      <Link href="/" className="font-bold text-4xl">
        Z
      </Link>

      <Link
        href="/"
        className="bg-white/20 hover:bg-white/10 transition flex items-center gap-4 border border-white/20 pl-4 px-3 py-1.5 rounded-full text-lg font-medium"
      >
        The latest post
        <ArrowRightIcon className="w-4" />
      </Link>
    </header>
  );
}

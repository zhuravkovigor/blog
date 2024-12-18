import InstagramIcon from "@/components/icons/InstagramIcon";
import OpenNewTabIcon from "@/components/icons/OpenNewTabIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import Article from "@/components/ui/Article";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

export default function Home() {
  return (
    <div className="container mt-[90px]">
      <h2 className="text-3xl leading-[44px] font-[600]">
        <span>
          Hi 👋 I&#39;m{" "}
          <img
            className="rounded-full w-10 h-10 grayscale inline-block object-cover"
            src="https://images.unsplash.com/photo-1458696352784-ffe1f47c2edc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />{" "}
          Igor, and this is my blog.
        </span>{" "}
        <span className="text-white/40">
          Here I share my great experience with other people as well as actively
          expert and demonstrate my finds found. I spend the main examiners over{" "}
          <Link
            href="/"
            className="text-white underline bg-white/10 hover:bg-white/20 transition duration-300 rounded-xl p-1.5"
          >
            #react
          </Link>
          ,{" "}
          <Link
            href="/"
            className="text-white underline bg-white/10 hover:bg-white/20 transition duration-300 rounded-xl p-1.5"
          >
            #framer-motion
          </Link>{" "}
          and{" "}
          <Link
            href="/"
            className="text-white underline bg-white/10 hover:bg-white/20 transition duration-300 rounded-xl p-1.5"
          >
            #next.js.
          </Link>
        </span>
      </h2>

      <div className="mt-[60px] flex gap-4">
        <Button suffix={<OpenNewTabIcon />}>About me</Button>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon className="w-5" />
        </IconButton>
      </div>

      <div className="mt-[120px]">
        <h2 className="text-2xl font-bold">All Articles</h2>
      </div>

      <div className="mt-[60px]">
        <h3 className="text-xl font-bold text-zinc-400">2024</h3>

        <div className="mt-[40px]">
          <Article href="/" />
          <Article href="/" />
          <Article href="/" />
          <Article href="/" />
        </div>
      </div>
    </div>
  );
}

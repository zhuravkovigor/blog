"use client";

import { AppRoutes } from "@/lib/constants";
import { usePathname } from "next/navigation";
import CoffeeIcon from "../icons/CoffeeIcon";
import HomeIcon from "../icons/HomeIcon";
import LanguageIcon from "../icons/LanguageIcon";
import StarsIcon from "../icons/StarsIcon";
import ThemeIcon from "../icons/ThemeIcon";
import IconButton from "../ui/IconButton";
import Input from "../ui/Input";
import Split from "../ui/Split";
import Tooltip from "../ui/Tooltip";

export default function Navigation() {
  const pathname = usePathname();

  const isHomePage = pathname === AppRoutes.HOME;

  return (
    <nav className="fixed bottom-4 left-1/2 p-[0.6rem] -translate-x-1/2 bg-[#3A3A3A]/30 backdrop-blur-sm border border-zinc-700 gap-1.5 flex items-center rounded-full">
      <Tooltip title="Home">
        <IconButton className={isHomePage ? "bg-white/15" : ""}>
          <HomeIcon size={2.6} />
        </IconButton>
      </Tooltip>
      <Split />
      <Input prefix={<StarsIcon />} />
      <Split />
      <IconButton>
        <LanguageIcon size={2.6} />
      </IconButton>
      <IconButton>
        <ThemeIcon size={2.6} />
      </IconButton>
      <Split />
      <IconButton>
        <CoffeeIcon size={2.3} />
      </IconButton>
    </nav>
  );
}

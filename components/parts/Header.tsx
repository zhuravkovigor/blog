import { APP_ROUTES } from "@/lib/constants";
import LogoIcon from "../icons/LogoIcon";
import CustomLink from "../ui/CustomLink";

export default function Header() {
  return (
    <header className="z-100 p-7 w-full flex items-center justify-between fixed max-w-6xl">
      <LogoIcon size={2} />

      <ul className="flex gap-3">
        <li>
          <CustomLink href={APP_ROUTES.GITHUB}>GitHub</CustomLink>
        </li>
        <li>
          <CustomLink href={APP_ROUTES.YOUTUBE}>YouTube</CustomLink>
        </li>
      </ul>
    </header>
  );
}

import { APP_ROUTES } from "@/lib/constants";
import LogoIcon from "../icons/LogoIcon";
import Container from "../ui/Container";
import CustomLink from "../ui/CustomLink";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <Container>
        <div className="flex justify-between h-24 items-center py-6">
          <div className="flex gap-2 items-center">
            <LogoIcon size={2} />

            <div className="flex gap-0.5 flex-col">
              <div className="text-xs text-zinc-200">
                © {new Date().getFullYear()} Zhuravkov Igor
              </div>
              <span className="text-xs text-zinc-500">Crafter with 🩶</span>
            </div>
          </div>

          <div className="flex space-x-3">
            <CustomLink href={APP_ROUTES.RSS}>RSS</CustomLink>
            <CustomLink href={APP_ROUTES.SITEMAP}>Sitemap</CustomLink>
            <CustomLink href={APP_ROUTES.SUPPORT_ME}>Support me</CustomLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}

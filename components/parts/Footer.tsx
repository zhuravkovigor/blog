import { SITE_CONFIG } from "@/lib/constants";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 h-32 ">
      <Container>
        <div className="flex justify-between items-center py-6">
          <div className="text-zinc-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name}
          </div>
          <div className="flex space-x-4">
            <a
              href={`${SITE_CONFIG.url}/rss.xml`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              RSS
            </a>
            <a
              href={`${SITE_CONFIG.url}/sitemap.xml`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

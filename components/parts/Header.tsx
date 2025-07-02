import LogoIcon from "../icons/LogoIcon";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="flex h-32 items-center justify-center">
      <Container>
        <LogoIcon className="text-zinc-400" size={2.6} />
      </Container>
    </header>
  );
}

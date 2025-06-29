import HomeIcon from "../icons/HomeIcon";
import StarsIcon from "../icons/StarsIcon";
import IconButton from "../ui/IconButton";
import Input from "../ui/Input";
import Split from "../ui/Split";

export default function Navigation() {
  return (
    <nav className="fixed bottom-4 left-1/2 p-[0.6rem] -translate-x-1/2 bg-black/30 backdrop-blur-sm border border-zinc-700 gap-1.5 flex items-center rounded-full">
      <IconButton>
        <HomeIcon size={2.8} />
      </IconButton>
      <Split />
      <Input prefix={<StarsIcon />} />
    </nav>
  );
}

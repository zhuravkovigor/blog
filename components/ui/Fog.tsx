import { classNames } from "@/lib/utils";

type FogProps = {
  side: "top" | "bottom";
  show?: boolean;
};

export default function Fog(props: FogProps) {
  const { side, show = true } = props;

  const fogClassNames = classNames(
    "fixed left-0 right-0 h-24 pointer-events-none z-10 transition-opacity duration-300 ease-in-out",
    {
      "top-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/90 to-transparent":
        side === "top",
      "bottom-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent":
        side === "bottom",
      "opacity-100": show,
      "opacity-0": !show,
    }
  );

  return <div className={fogClassNames} />;
}

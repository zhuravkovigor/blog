import { classNames } from "@/lib/utils";

type SplitProps = {
  className?: string;
};

export default function Split(props: SplitProps) {
  const { className } = props;

  const splitClassNames = classNames(
    "h-[1.5rem] w-[0.1rem] rounded-full bg-zinc-700",
    className
  );

  return <div className={splitClassNames} />;
}

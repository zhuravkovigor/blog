import { classNames } from "@/lib/utils";
import { ReactNode } from "react";

type IconProps = {
  suffix?: ReactNode;
  prefix?: ReactNode;
};

export default function Input(props: IconProps) {
  const { suffix, prefix } = props;

  const inputClassNames = classNames(
    "bg-white/20 placeholder:text-zinc-400 flex rounded-full h-[3.6rem] text-[1.3rem] outline-none px-4 border border-zinc-600",
    {
      "pl-14": !!prefix,
    }
  );

  return (
    <div className="relative">
      {prefix && (
        <div className="absolute pointer-events-none left-4 top-1/2 -translate-y-1/2">
          {prefix}
        </div>
      )}
      <input className={inputClassNames} placeholder="Ask me anything..." />
    </div>
  );
}

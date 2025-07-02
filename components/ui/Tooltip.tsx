import { ReactNode } from "react";
import ArrowIcon from "../icons/ArrowIcon";

type TooltipProps = {
  children: ReactNode;
  title?: string;
};

export default function Tooltip(props: TooltipProps) {
  const { children, title } = props;

  return (
    <div className="relative group">
      {title && (
        <div
          className="absolute group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 opacity-0 transition duration-300 text-sm bg-[#2D2D2D] border border-[#484848] -top-14 left-1/2 -translate-x-1/2 p-2 rounded-2xl px-3 pointer-events-none z-50"
          role="tooltip"
        >
          {title}
          <ArrowIcon className="absolute -bottom-[0.84rem] left-1/2 translate-x-[-50%+0.2rem] w-8" />
        </div>
      )}
      {children}
    </div>
  );
}

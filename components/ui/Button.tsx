import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { children, prefix, suffix } = props;

  return (
    <button className="bg-white/10 active:scale-95 hover:bg-white/20 transition duration-300 flex items-center gap-[20px] text-white/80 font-bold py-3 px-6 rounded-full">
      {prefix && <div className="w-[20px]">{prefix}</div>}
      {children}
      {suffix && <div className="w-[20px]">{suffix}</div>}
    </button>
  );
}

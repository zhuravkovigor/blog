import { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
};

export default function IconButton(props: IconButtonProps) {
  const { children } = props;

  return (
    <button className="w-12 flex items-center justify-center bg-white/10 hover:bg-white/20 transition duration-300 active:scale-95 rounded-full">
      <div className="w-9 self-center flex justify-center text-white/60">
        {children}
      </div>
    </button>
  );
}

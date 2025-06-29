import { classNames } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconButton(props: IconButtonProps) {
  const { className, ...other } = props;

  const buttonClassNames = classNames(
    "w-[3.6rem] flex hover:bg-white/15 transition duration-300 active:scale-90 items-center justify-center cursor-pointer aspect-square rounded-full",
    className
  );

  return <button className={buttonClassNames} {...other} />;
}

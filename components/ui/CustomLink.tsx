import { AppRoutesType } from "@/lib/types";
import { classNames } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: AppRoutesType;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function (props: Props) {
  const { className, href, target = "_blank", ...rest } = props;

  const linkClassNames = classNames(
    "hover:text-zinc-100 text-sm active:scale-95 hover:bg-white/5 p-1 px-2 rounded-md transition-all duration-300 text-zinc-300 flex gap-3 font-regular",
    className
  );

  return (
    <Link href={href} className={linkClassNames} target={target} {...rest} />
  );
}

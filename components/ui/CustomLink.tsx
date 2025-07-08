import { AppRoutesType } from "@/lib/types";
import { classNames } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: AppRoutesType;
};

export default function (props: Props) {
  const { className, href, ...rest } = props;

  const linkClassNames = classNames(
    "hover:text-zinc-300 transition-all duration-300 text-sm text-zinc-600 flex gap-3 font-thin",
    className
  );

  return <Link href={href} className={linkClassNames} {...rest} />;
}

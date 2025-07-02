import { classNames } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container(props: ContainerProps) {
  const { className, ...other } = props;

  const containerClassNames = classNames("max-w-xl mx-auto", className);

  return <div className={containerClassNames} {...other} />;
}

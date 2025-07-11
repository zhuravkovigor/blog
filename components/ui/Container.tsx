import { classNames } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container(props: ContainerProps) {
  const { className, ...rest } = props;
  const containerClassNames = classNames("px-32 max-w-5xl mx-auto", className);

  return <div className={containerClassNames} {...rest} />;
}

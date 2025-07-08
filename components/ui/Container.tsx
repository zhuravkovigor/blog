import { classNames } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container(props: ContainerProps) {
  const { className, ...rest } = props;
  const containerClassNames = classNames("px-32", className);

  return <div className={containerClassNames} {...rest} />;
}

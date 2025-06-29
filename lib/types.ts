import { SVGProps } from "react";

export type UnitType = "px" | "rem";

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

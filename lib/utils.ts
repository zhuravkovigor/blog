import { defaultSizeUnit } from "./constants";
import { UnitType } from "./types";

export function returnSizeWithUnit(
  size: number,
  unit: UnitType = defaultSizeUnit
) {
  return `${size}${unit}`;
}

export function classNames(
  ...args: (
    | string
    | undefined
    | null
    | { [className: string]: boolean }
    | (string | undefined | null)[]
  )[]
) {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === "string") return [arg];
      if (Array.isArray(arg)) return arg.filter(Boolean) as string[];
      if (typeof arg === "object") {
        return Object.entries(arg)
          .filter(([_, value]) => value)
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}

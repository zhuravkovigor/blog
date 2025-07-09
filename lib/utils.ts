import { ReactNode } from "react";
import { DEFAULT_STYLE_UNIT_TYPE } from "./constants";
import { AppRoutesType, AvailableUnits } from "./types";

// convert data to 05-11
export function formatShortDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}-${day}`;
}

export function classNames(
  ...classes: (string | undefined | { [key: string]: boolean | undefined })[]
): string {
  return classes
    .flatMap((cls) => {
      if (typeof cls === "string") return cls;
      if (typeof cls === "object" && cls !== null) {
        return Object.entries(cls)
          .filter(([_, value]) => !!value)
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}

export function createUrl(
  url: AppRoutesType,
  params?: Record<string, string | number | undefined>
): string {
  if (!params || Object.keys(params).length === 0) {
    return url;
  }

  let result: string = url;
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      result = result.replace(
        new RegExp(`:${key}(?=/|$)`, "g"),
        encodeURIComponent(String(value))
      );
    }
  });
  return result;
}

export function returnSizeWithUnit(
  size: number,
  unit: AvailableUnits = DEFAULT_STYLE_UNIT_TYPE
) {
  return `${size}${unit}`;
}

export function extractTableHeaders(children: ReactNode): string[] {
  let headers: string[] = [];

  if (Array.isArray(children)) {
    const thead = children.find((child: any) => child?.props?.children);
    if (thead) {
      const headerRow = Array.isArray(thead.props.children)
        ? thead.props.children.find((row: any) => row?.props?.children)
        : thead.props.children;

      if (headerRow?.props?.children) {
        const headerElements = Array.isArray(headerRow.props.children)
          ? headerRow.props.children
          : [headerRow.props.children];

        headers = headerElements
          .filter((header: any) => header?.props?.children)
          .map((header: any) => {
            const text =
              typeof header.props.children === "string"
                ? header.props.children
                : String(header.props.children);
            return text.trim();
          })
          .filter((text: any) => text.length > 0);
      }
    }
  }

  return headers;
}

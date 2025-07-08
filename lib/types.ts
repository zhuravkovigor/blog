import { HTMLAttributes } from "react";
import { APP_ROUTES } from "./constants";

// Generic тип для компонентов с настройками (не наследует BaseComponentProps)
export type ComponentWithSettings<T> = {
  settings?: T;
};

// Для совместимости со старым именем
export type PartsWithSettings<T> = ComponentWithSettings<T>;

export type AppRoutesType = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];

export type IconType = HTMLAttributes<SVGElement> & {
  size?: number;
};

export type AvailableUnits = "px" | "em" | "rem" | "vw" | "vh" | "%";

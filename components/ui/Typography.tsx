import { classNames } from "@/lib/utils";
import { ElementType, HTMLAttributes, ReactNode } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "caption"
  | "lead";

type TypographyProps = {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

const variantStyles: Record<TypographyVariant, string> = {
  h1: "text-4xl font-bold tracking-tight lg:text-5xl",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold tracking-tight",
  h4: "text-xl font-semibold tracking-tight",
  h5: "text-lg font-semibold",
  h6: "text-base font-semibold",
  p: "text-base leading-7",
  span: "text-base",
  label:
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  caption: "text-sm text-zinc-500",
  lead: "text-xl text-zinc-600",
};

export default function Typography(props: TypographyProps) {
  const { variant = "p", children, className, ...other } = props;

  const Component = variant as ElementType;

  const typographyClassNames = classNames(variantStyles[variant], className);

  return (
    <Component className={typographyClassNames} {...other}>
      {children}
    </Component>
  );
}

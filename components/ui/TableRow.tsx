import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export default function TableRow({ children, className = "" }: TableRowProps) {
  return <tr className={className}>{children}</tr>;
}

import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
}

export default function TableCell({ children }: TableCellProps) {
  return (
    <td className="border-b border-zinc-900 px-4 py-2.5">
      {children}
    </td>
  );
}

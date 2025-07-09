import { ReactNode } from "react";

interface TableBodyProps {
  children: ReactNode;
  headers: string[];
}

export default function TableBody({ children, headers }: TableBodyProps) {
  return (
    <table
      className="w-full text-sm text-zinc-300"
      style={{ tableLayout: "fixed" }}
    >
      <colgroup>
        {headers.map((_, index) => (
          <col key={index} style={{ width: `${100 / headers.length}%` }} />
        ))}
      </colgroup>
      {children}
    </table>
  );
}

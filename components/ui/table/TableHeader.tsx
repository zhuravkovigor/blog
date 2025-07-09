import { ReactNode } from "react";

interface TableHeaderProps {
  headers: string[];
}

export default function TableHeader({ headers }: TableHeaderProps) {
  if (headers.length === 0) {
    return null;
  }

  return (
    <div className="py-0 pb-0">
      <table
        className="w-full text-xs"
        style={{ tableLayout: "fixed" }}
      >
        <colgroup>
          {headers.map((_, index) => (
            <col
              key={index}
              style={{ width: `${100 / headers.length}%` }}
            />
          ))}
        </colgroup>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2.5 pt-1.5 text-left font-medium text-zinc-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}

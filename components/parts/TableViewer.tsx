import { extractTableHeaders } from "@/lib/utils";
import { ReactNode } from "react";
import TableBody from "../ui/table/TableBody";
import TableHeader from "../ui/table/TableHeader";

interface TableViewerProps {
  children: ReactNode;
}

export default function TableViewer({ children }: TableViewerProps) {
  const headers = extractTableHeaders(children);

  return (
    <div className="bg-zinc-900 p-1 mt-9 rounded-2xl border-2 border-zinc-800/50">
      <TableHeader headers={headers} />
      <div className="bg-black rounded-xl border border-zinc-800">
        <TableBody headers={headers}>{children}</TableBody>
      </div>
    </div>
  );
}

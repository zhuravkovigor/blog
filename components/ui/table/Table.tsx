import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export default function Table({ children, className = "" }: TableProps) {
  return (
    <div className="bg-zinc-900 p-1 mt-9 rounded-2xl border-2 border-zinc-800/50">
      <div className="bg-black rounded-xl border border-zinc-800">
        <table className={`w-full text-sm text-zinc-300 ${className}`}>
          {children}
        </table>
      </div>
    </div>
  );
}

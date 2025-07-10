import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./CopyButton";

interface CodeViewerProps {
  children: string;
  className?: string;
  language?: string;
}

export default function CodeViewer({
  children,
  className,
  language,
}: CodeViewerProps) {
  const match = /language-(\w+)/.exec(className || "");
  const detectedLanguage = match ? match[1] : language;

  if (!detectedLanguage) {
    return <code className={className}>{children}</code>;
  }

  return (
    <div className="bg-zinc-900 p-1 mt-9 rounded-2xl border-2 border-zinc-800/50">
      <div className="flex items-center justify-between px-2 py-2">
        <span className="text-xs block text-zinc-400 font-bold">
          {detectedLanguage}
        </span>
        <CopyButton>{String(children).replace(/\n$/, "")}</CopyButton>
      </div>

      <SyntaxHighlighter
        PreTag="div"
        language={detectedLanguage}
        showLineNumbers={true}
        style={materialDark}
        customStyle={{
          borderRadius: "0.7rem",
          fontSize: "0.875rem",
          margin: 0,
          backgroundColor: "#000",
          border: "0.1rem solid #222",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
        codeTagProps={{
          style: {
            background: "transparent",
            padding: "0",
            margin: "0",
          },
        }}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}

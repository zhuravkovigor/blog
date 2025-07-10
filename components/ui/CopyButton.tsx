"use client";

import { useState } from "react";
import CheckIcon from "../icons/CheckIcon";
import CopyIcon from "../icons/CopyIcon";

type CopyButtonProps = {
  children: string;
};

export default function CopyButton(props: CopyButtonProps) {
  const { children } = props;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  if (isCopied) {
    return <CheckIcon size={1} className="text-zinc-400" />;
  }

  return (
    <CopyIcon
      size={1}
      className="text-zinc-500 cursor-pointer hover:text-zinc-700"
      onClick={handleCopy}
    />
  );
}

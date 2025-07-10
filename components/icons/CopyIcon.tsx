import { IconType } from "@/lib/types";
import { returnSizeWithUnit } from "@/lib/utils";

export default function CopyIcon(props: IconType) {
  const { size = 3.6, ...rest } = props;

  const sizeWithUnit = returnSizeWithUnit(size);

  return (
    <svg
      fill="none"
      width={sizeWithUnit}
      height={sizeWithUnit}
      viewBox="0 0 24 24"
      {...rest}
    >
      <g stroke="currentColor" strokeWidth="2">
        <path d="m6 11c0-2.8284 0-4.2426 0.87868-5.1213s2.2929-0.87868 5.1213-0.87868h3c2.8284 0 4.2426 0 5.1213 0.87868s0.8787 2.2929 0.8787 5.1213v5c0 2.8284 0 4.2426-0.8787 5.1213s-2.2929 0.8787-5.1213 0.8787h-3c-2.8284 0-4.2426 0-5.1213-0.8787s-0.87868-2.2929-0.87868-5.1213v-5z" />
        <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" />
      </g>
    </svg>
  );
}

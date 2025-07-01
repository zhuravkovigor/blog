import { IconProps } from "@/lib/types";
import { returnSizeWithUnit } from "@/lib/utils";

export default function ThemeIcon(props: IconProps) {
  const { size = 2.6, ...other } = props;

  const sizeWithUnit = returnSizeWithUnit(size);

  return (
    <svg
      width={sizeWithUnit}
      height={sizeWithUnit}
      viewBox="0 0 28 28"
      fill="none"
      {...other}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.84 13.9999C21.84 18.3298 18.3299 21.8399 14 21.8399C9.67006 21.8399 6.15997 18.3298 6.15997 13.9999C6.15997 9.67 9.67006 6.15991 14 6.15991C16.0793 6.15991 18.0734 6.98591 19.5436 8.45619C21.014 9.92648 21.84 11.9206 21.84 13.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.52002 14C9.52002 16.4742 11.5258 18.48 14 18.48V9.52002C11.5258 9.52002 9.52002 11.5258 9.52002 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

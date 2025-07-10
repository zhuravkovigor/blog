import { IconType } from "@/lib/types";
import { returnSizeWithUnit } from "@/lib/utils";

export default function (props: IconType) {
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
      <path
        d="M4 12.6111L8.92308 17.5L20 6.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

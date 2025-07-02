import { IconProps } from "@/lib/types";

export default function ArrowIcon(props: IconProps) {
  const { size, ...other } = props;

  return (
    <svg fill="none" viewBox="0 0 22 21" {...other}>
      <path
        d="m14.392 7.496c1.1546 1.4e-4 1.8761 1.2497 1.2988 2.2496l-4.6134 7.9916c-0.5774 1-2.0211 0.9994-2.5985-6e-4l-4.6133-7.9904c-0.57742-1.0001 0.14409-2.2507 1.2986-2.2507l9.2277 4.6e-4z"
        fill="#2D2D2D"
        stroke="#484848"
      />
      <path
        d="m0.80005 7h17.5v3.1217h-1.9444s-4.0199 3.9181-4.1555 4.061l-4.1084 1.391-3.8917-4.891-3.4-0.561v-3.1217z"
        fill="#2D2D2D"
      />
      <path
        d="m0 10h0.5s2.2257 0.0846 3 0.5c0.88578 0.4752 2 2 2 2l1.5 2.5"
        stroke="#484848"
      />
      <path
        d="m19.8 10h-0.5s-2.2257 0.0846-3 0.5c-0.8858 0.4752-2 2-2 2l-1.5 2.5"
        stroke="#484848"
      />
    </svg>
  );
}

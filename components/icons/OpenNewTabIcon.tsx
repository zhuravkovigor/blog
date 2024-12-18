import { IconProps } from "@/shared/types";

export default function OpenNewTabIcon(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M13 11L22 2M22 2H16.6562M22 2V7.34375"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

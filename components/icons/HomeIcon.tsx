import { IconProps } from "@/lib/types";
import { returnSizeWithUnit } from "@/lib/utils";

export default function HomeIcon(props: IconProps) {
  const { size = 2.8, ...other } = props;

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
        d="M6.161 12.8433V18.0457C6.11342 20.0924 7.73303 21.7907 9.77971 21.8402H18.2223C20.269 21.7907 21.8886 20.0924 21.841 18.0457V12.8433C21.8433 11.3083 21.1272 9.86064 19.9056 8.93109L16.4784 6.85349C14.9559 5.92872 13.0451 5.92872 11.5224 6.85349L8.09636 8.93109C6.87483 9.86064 6.15868 11.3083 6.161 12.8433Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4135 17.5652C15.848 18.3307 14.9528 18.7824 14.001 18.7824C13.0493 18.7824 12.154 18.3307 11.5885 17.5652"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

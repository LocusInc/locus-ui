import * as React from "react";
import { colorMap, IconProps } from "./icon-colors";

export const ChevronRight: React.FC<IconProps> = ({
  color = "currentColor",
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={colorMap[color]}
        d="M6.1818 4.18179C6.35754 4.00605 6.64245 4.00605 6.81819 4.18179L9.81819 7.18179C9.90258 7.26618 9.94999 7.38064 9.94999 7.49999C9.94999 7.61934 9.90258 7.73379 9.81819 7.81819L6.81819 10.8182C6.64245 10.9939 6.35754 10.9939 6.1818 10.8182C6.00607 10.6424 6.00607 10.3575 6.1818 10.1818L8.86361 7.49999L6.1818 4.81819C6.00607 4.64245 6.00607 4.35753 6.1818 4.18179Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

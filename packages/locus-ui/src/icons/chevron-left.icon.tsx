import * as React from "react";
import { colorMap, IconProps } from "./icon-colors";

export const ChevronLeft: React.FC<IconProps> = ({
  color = "currentColor",
}) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M7.5 2.5L4 6L7.5 9.5"
        fill={colorMap[color]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

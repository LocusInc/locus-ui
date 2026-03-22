import * as React from "react";
import { colorMap, IconProps } from "./icon-colors";

export const ChevronUp: React.FC<IconProps> = ({ color = "currentColor" }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 7.5L6 4L9.5 7.5"
        fill={colorMap[color]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

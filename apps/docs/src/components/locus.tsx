interface LocusProps {
  color?: string;
  size?: number;
  className?: string;
}

const Locus = ({
  color = "currentColor",
  size = 250,
  className,
}: LocusProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    width={size}
    height={size}
    className={className}
    style={{ color, maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}
  >
    <defs>
      <symbol id="locus-symbol" viewBox="0 0 250.5932 205.0359">
        <path
          style={{
            strokeLinejoin: "round",
            transformOrigin: "120px 250px",
            fill: "currentColor",
            stroke: "transparent",
          }}
          d="M 45.244 197.974 C 50.619 202.112 58.476 208.394 61.66 202.86 C 76.996 186.103 88.234 179.497 108.428 175.787 C 113.827 175.274 113.024 172.749 114.473 162.856 C 121.861 100.16 169.969 54.625 231.353 43.924 C 240.845 42.269 257.062 40.221 247.862 34.918 C 187.653 -4.729 95.685 -10.172 30.811 16.34 C 23.908 19.161 22.206 23.696 18.644 29.677 C -16.208 88.188 0.724 163.699 45.244 197.974 Z"
        />
      </symbol>
    </defs>
    <use
      href="#locus-symbol"
      width="250.59320068359375"
      height="205.03590393066406"
      transform="matrix(0.999825, 0, 0, 0.999825, 129.979004, -0.04375)"
      style={{ transformOrigin: "120.021px 250.044px" }}
    />
    <use
      href="#locus-symbol"
      width="250.59320068359375"
      height="205.03590393066406"
      transform="matrix(0.5, 0.866025, -0.866025, 0.5, 130, -0.000021)"
      style={{ transformOrigin: "120px 250px" }}
    />
    <use
      href="#locus-symbol"
      width="250.59320068359375"
      height="205.03590393066406"
      transform="matrix(-0.5, 0.866025, -0.866025, -0.5, 130.000031, -0.000032)"
      style={{ transformOrigin: "120px 250px" }}
    />
    <use
      href="#locus-symbol"
      width="250.59320068359375"
      height="205.03590393066406"
      transform="matrix(-1, 0, 0, -1, 130.000061, 0.000017)"
      style={{ transformOrigin: "120px 250px" }}
    />
    <use
      href="#locus-symbol"
      width="250.59320068359375"
      height="205.03590393066406"
      transform="matrix(0.5, -0.866025, 0.866025, 0.5, 130.000015, 0.000034)"
      style={{ transformOrigin: "120px 250px" }}
    />
    <use
      href="#locus-symbol"
      width="250.59320068359375"
      height="205.03590393066406"
      transform="matrix(-0.5, -0.866025, 0.866025, -0.5, 130.000031, 0.000038)"
      style={{ transformOrigin: "120px 250px" }}
    />
  </svg>
);

export default Locus;

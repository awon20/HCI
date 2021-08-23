import React from "react";

export function SvgSketchBoxLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20em"
      height="20em"
      viewBox="0 0 193.5 223.565"
      {...props}
    >
      <g fill="#fff" stroke="#fff">
        <path
          d="M191.798 13.375a4.744 4.744 0 010 6.311l-8.591 9.332-16.473-17.878 8.591-9.332a3.894 3.894 0 015.823 0l10.65 11.558zm-14.414 21.954L160.91 17.451l-56.117 60.91a4.546 4.546 0 00-1 1.752l-6.627 21.579a2.372 2.372 0 00.5 2.284 1.947 1.947 0 002.1.541l19.884-7.2a4.078 4.078 0 001.614-1.073l56.117-60.91z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 161.151c0 8.513 7.812 15.414 17.449 15.414h127.956c9.637 0 17.449-6.9 17.449-15.414V99.497c0-2.838-2.6-5.138-5.816-5.138s-5.816 2.3-5.816 5.138v61.658c0 2.838-2.6 5.138-5.816 5.138H18.449c-3.212 0-5.816-2.3-5.816-5.138V48.111c0-2.838 2.6-5.138 5.816-5.138h75.61c3.212 0 5.816-2.3 5.816-5.138s-2.604-5.138-5.816-5.138h-75.61C8.812 32.697 1 39.597 1 48.111z"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="evenodd"
        />
        <text
          transform="translate(1 212.565)"
          fontSize={34}
          fontFamily="OpenSans, Open Sans"
          letterSpacing="0em"
        >
          <tspan x={0} y={0}>
            {" SketchBox "}
          </tspan>
        </text>
      </g>
    </svg>
  );
}
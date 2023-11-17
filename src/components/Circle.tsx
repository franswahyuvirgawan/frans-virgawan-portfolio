import React from "react";

function Circle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 200 200"
    >
      <path
        stroke="#fff"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M99.97 0v199.93M74.1 3.4l51.74 193.13M49.98 13.39l99.97 173.15M29.28 29.28l141.38 141.37M13.39 49.98l173.15 99.97M3.41 74.09l193.12 51.75M0 99.96h199.94M3.41 125.84l193.12-51.75M13.39 149.95l173.15-99.97M29.28 170.65L170.66 29.28M49.98 186.54l99.97-173.15M74.1 196.53L125.84 3.4M99.97 199.93V0M125.84 196.53L74.1 3.4M149.95 186.54L49.98 13.39M170.66 170.65L29.28 29.28M186.54 149.95L13.39 49.98M196.53 125.84L3.41 74.09"
      ></path>
    </svg>
  );
}

export default Circle;

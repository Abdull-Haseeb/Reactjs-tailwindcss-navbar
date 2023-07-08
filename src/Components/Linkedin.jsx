import React, { useRef } from "react";

export default function Linkedin() {
  const pathRef = useRef(null);

  const handleMouseEnter = () => {
    if (pathRef.current) {
      pathRef.current.style.fill = "#5AB0F7";
    }
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      pathRef.current.style.fill = "#4F46E5";
    }
  };

  return (
    <a
      href="https://www.linkedin.com/in/abdull-haseeb-b5735a222/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 20 20"
      >
        <title>Linkedin Profile</title>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="#4f46e5" transform="translate(-180 -7479)">
            <g transform="translate(56 160)">
              <path
                ref={pathRef}
                d="M144 7339h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V7339h-4v-13h4v1.462s1.255-2.202 4.083-2.202c2.829 0 4.917 1.726 4.917 5.298V7339zm-17.558-15.079a2.451 2.451 0 01-2.442-2.461 2.451 2.451 0 012.442-2.46 2.451 2.451 0 012.441 2.46 2.45 2.45 0 01-2.441 2.461zM124 7339h5v-13h-5v13z"
                style={{ fill: "#4f46e5", transition: "fill 0.3s" }}
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </a>
  );
}

import React, { useRef } from "react";

function Facebook() {
  const pathRef = useRef(null);

  const handleMouseEnter = () => {
    if (pathRef.current) {
      pathRef.current.style.fill = "#097EEB";
    }
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      pathRef.current.style.fill = "#4F46E5";
    }
  };

  return (
    <a
      href="https://www.facebook.com/profile.php?id=100094207308232"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="-5 0 20 20"
      >
        <title>Facebook Profile</title>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="#4f46e5" transform="translate(-385 -7399)">
            <g transform="translate(56 160)">
              <path
                ref={pathRef}
                d="M335.821 7259v-9h2.733l.446-4h-3.179v-1.948c0-1.03.027-2.052 1.466-2.052h1.458v-2.86c0-.043-1.253-.14-2.52-.14-2.645 0-4.302 1.657-4.302 4.7v2.3H329v4h2.923v9h3.898z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </a>
  );
}

export default Facebook;

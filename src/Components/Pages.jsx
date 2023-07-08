import React from "react";

export default function Pages() {
  return (
    <div>
      <div className="flex h-16 items-center justify-between">
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex font-bold text-base items-center gap-6 ">
              <li>
                <a
                  className="text-indigo-600  transition hover:text-indigo-600/75"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-indigo-600 transition hover:text-indigo-600/75"
                  href="/projects"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="text-indigo-600 transition hover:text-indigo-600/75"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

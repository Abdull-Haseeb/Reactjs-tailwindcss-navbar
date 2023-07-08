import React from "react";
import Upwork from "./Upwork";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";

export default function Links() {
  return (
    <div className="hidden sm:flex flex-row items-center space-x-6">
      <Upwork />
      <Facebook />
      <Linkedin />
    </div>
  );
}

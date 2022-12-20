import React from "react";
import User from "../assets/svg/User";

function LeftSelect({ open, svg, text }) {
  return (
    <div>
      <div
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 w-15 mt-2 bg-light-white
            `}
      >
        <div className="w-9">{svg}</div>
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {text}
        </span>
      </div>
    </div>
  );
}

export default LeftSelect;

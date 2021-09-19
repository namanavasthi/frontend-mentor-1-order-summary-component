import React from "react";
import icon from "./images/icon-music.svg";

export const Music = () => {
  return (
    <div className="bg-neutral-pale rounded-xl p-4 mt-5 flex flex-row text-sm">
      <img src={icon} alt="music icon" />
      <div className="flex flex-row justify-between flex-1">
        <div className="flex flex-col pl-4 justify-around">
          <span className="text-neutral-dark">Annual Plan</span>
          <span className="text-neutral-desaurated">$59.99/year</span>
        </div>
        <button className="text-primary-bright underline">Change</button>
      </div>
    </div>
  );
};

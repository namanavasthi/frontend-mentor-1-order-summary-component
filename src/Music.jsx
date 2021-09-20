import React from "react";
import icon from "./images/icon-music.svg";

export const Music = () => {
  return (
    <aside className="bg-neutral-pale rounded-xl p-4 mt-5 flex flex-row text-sm">
      <img src={icon} alt="music" />
      <div className="flex flex-row justify-between flex-1">
        <article className="flex flex-col pl-4 justify-around">
          <h2 className="text-neutral-dark font-bold">Annual Plan</h2>
          <span className="text-neutral-desaurated">$59.99/year</span>
        </article>
        <button className="text-primary-bright underline focus:opacity-60">Change</button>
      </div>
    </aside>
  );
};

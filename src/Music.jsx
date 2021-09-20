import React from "react";
import icon from "./images/icon-music.svg";

export const Music = () => {
  return (
    <article className="bg-neutral-pale rounded-xl p-4 mt-5 flex flex-row text-sm">
      <img src={icon} alt="music icon" />
      <article className="flex flex-row justify-between flex-1">
        <section className="flex flex-col pl-4 justify-around">
          <h2 className="text-neutral-dark font-bold">Annual Plan</h2>
          <span className="text-neutral-desaurated">$59.99/year</span>
        </section>
        <button className="text-primary-bright underline focus:opacity-60">Change</button>
      </article>
    </article>
  );
};

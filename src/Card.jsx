import React from "react";

export const Card = ({ children }) => {
  return (
    <article className="bg-white rounded-3xl overflow-hidden flex flex-col max-w-327 md:max-w-450 shadow-card">
      {children}
    </article>
  );
};

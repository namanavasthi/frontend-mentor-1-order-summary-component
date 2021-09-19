import React from "react";

export const Card = ({ children }) => {
  return <div className="bg-white rounded-3xl overflow-hidden flex flex-col max-w-327">{children}</div>;
};

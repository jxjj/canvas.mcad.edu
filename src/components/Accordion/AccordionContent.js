import React from "react";

export default ({ children, className = "" }) => {
  return <div className={`${className} accordion__content`}>{children}</div>;
};

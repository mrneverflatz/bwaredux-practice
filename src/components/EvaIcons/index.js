import React from "react";
import * as eva from "eva-icons";

export default function EvaIcons({
  icon,
  height,
  width,
  size,
  wrapperClassName,
}) {
  return (
    <span
      className={wrapperClassName}
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="${
          Number(size) || Number(width)
        }" height="${
          Number(size) || Number(height)
        }" viewBox="0 0 24 24">${eva.icons[icon].toString()}</svg>`,
      }}
    ></span>
  );
}

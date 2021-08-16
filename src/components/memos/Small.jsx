import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log(" show Again");

  return <small>{value}</small>;
});

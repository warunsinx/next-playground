import React from "react";

export default React.memo(function CountHolder({ count }: { count: number }) {
  console.log("render CountHolder");
  return <div>{count}</div>;
});

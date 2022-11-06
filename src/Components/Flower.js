import React from "react";

function Flowers({ flowerColors }) {
  if (flowerColors && flowerColors === "black") {
    throw new Error("Not a color");
  }
  return <div>{flowerColors}</div>;
}
export default Flowers;

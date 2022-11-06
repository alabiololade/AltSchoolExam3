import React from "react";
import Flower from "./Flower";
import ErrorBoundary from "./ErrorBoundary";

function ErrorPage({ flowerColors }) {
  if (flowerColors && flowerColors === "black") {
    throw new Error("Not a color");
  }
  return (
    <div className="App">
      <h1>Flower colors</h1>
      <ErrorBoundary>
        <Flower flowerColors="blue" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Flower flowerColors="green" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Flower flowerColors="black" />
      </ErrorBoundary>
    </div>
  );
}
export default ErrorPage;
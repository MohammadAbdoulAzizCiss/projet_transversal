import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/not-found.json";

function NotFound() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={400} height={400} />;
}

export default NotFound;

import React from "react";
import ProjectInput from "../../components/ProjectInput";
import Lottie from "react-lottie";
import animationData from "../../lotties/fly-on-rocket.json";

export default function LogIn() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let sysy = {
    width: "80%",
    display: "flex",
    alignItems: "center",
    color: "#19d6ac",
  };
  return (
    <div style={sysy}>
      <Lottie options={defaultOptions} height={400} width={400} />
      <ProjectInput
        type="text"
        disabled={true}
        placeholder="put something here"
      />
    </div>
  );
}

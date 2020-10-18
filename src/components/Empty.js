import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/empty-box.json";

function Empty({ message = "nothing here..." }) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let styles = {
    div: {
      margin: "2%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#949E94",
    },
    h1: {
      margin: "5%",
    },
  };

  return (
    <div style={styles.div}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <h1 style={styles.h1}>{message}</h1>
    </div>
  );
}

export default Empty;

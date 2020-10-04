import React from "react";

export default function ProjectForm({ children }) {
  let styles = {
    width: "25%",
    margin: "2%",
    padding: "2%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#19d6bd",
  };
  return <div style={styles}>{children}</div>;
}

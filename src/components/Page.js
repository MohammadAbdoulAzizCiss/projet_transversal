import React from "react";
import { Box } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const Page = ({ children, direction = "row" }) => {
  let PageLayout = styled(Box)({
    height: "100vh",
    display: "flex",
    flexDirection: direction,
  });

  return <PageLayout>{children}</PageLayout>;
};
export default Page;

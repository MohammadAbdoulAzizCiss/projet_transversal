import React from "react";
import { Box } from "@material-ui/core";
export default function Form({ children, submitHandler, btnName = "submit" }) {
  return (
    <Box
      boxShadow={3}
      height="50%"
      padding="5%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
}

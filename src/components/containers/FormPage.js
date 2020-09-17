import React from "react";
import { Box } from "@material-ui/core";

export default function FormPage({ left, right }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      {left}
      {right}
    </Box>
  );
}

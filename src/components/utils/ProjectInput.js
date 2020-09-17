import React from "react";
import { FormControl, TextField } from "@material-ui/core";
export default function ProjectInput({
  name,
  value,
  handler,
  type = "text",
  variant = "standard",
}) {
  return (
    <TextField
      label={name}
      variant={variant}
      value={value}
      onChange={handler}
      type={type}
    />
  );
}

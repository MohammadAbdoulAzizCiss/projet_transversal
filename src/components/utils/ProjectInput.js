import React from "react";
import { TextField } from "@material-ui/core";
export default function ProjectInput({
  name,
  value,
  handler,
  type = "text",
  variant = "standard",
  placeholder,
  required = false,
}) {
  return (
    <TextField
      margin="dense"
      name={name}
      label={name}
      variant={variant}
      value={value}
      onChange={handler}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
}

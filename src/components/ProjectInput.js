import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
export default function ProjectInput({
  name,
  value,
  handler,
  type = "text",
  variant = "standard",
  placeholder,
  required = false,
  disabled = false,
  fullWidth = false,
  readOnly = false,
}) {
  const toggleVisible = () => {
    let { type, visible } = password;
    let newType = type === "text" ? "password" : "text";
    let newVisible = !visible;
    setPassword({ type: newType, visible: newVisible });
  };
  let [password, setPassword] = React.useState({
    type: "password",
    visible: false,
  });
  return type === "password" ? (
    <TextField
    
      color={"primary"}
      margin="dense"
      name={name}
      label={name}
      variant={variant}
      value={value}
      onChange={handler}
      type={password.type}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      InputProps={{
        endAdornment: (
          <InputAdornment onClick={toggleVisible}>
            {password.visible ? <Visibility /> : <VisibilityOff />}
          </InputAdornment>
        ),
      }}
    />
  ) : (
    <TextField
      disabled={disabled}
      margin="dense"
      name={name}
      label={name}
      variant={variant}
      value={value}
      onChange={handler}
      type={type}
      placeholder={placeholder}
      required={required}
      fullWidth={fullWidth}
      readOnly={readOnly}
    />
  );
}

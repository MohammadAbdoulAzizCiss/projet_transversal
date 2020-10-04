import React from "react";

export default function MyInput({ type, value, handler }) {
  return (
    <div>
      <input type={type} value={value} onChange={handler} />
    </div>
  );
}

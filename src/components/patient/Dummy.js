import React, { useState } from "react";
import MyInput from "./MyInput";

export default Dummy = () => {
  let [value, setValue] = useState("hey there");
  return (
    <div>
      <MyInput
        type="text"
        value={value}
        handler={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

import React, { useState } from "react";
import Button from "@material-ui/core/Button";

export default function MyButtonWithHook() {
  const [count, updateCount] = useState(0);

  function handleClick() {
    updateCount(count + 1);
  }
  return (
    <Button variant="contained" onClick={handleClick}>
      {count}
    </Button>
  );
}

import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function MyButtonWithHook() {
  const [count, updateCount] = useState(0);

  function handleClick() {
    updateCount(count + 1);
  }

  useEffect(() => {
    document.title = count;
  });

  return (
    <Button variant="contained" onClick={handleClick}>
      {count}
    </Button>
  );
}

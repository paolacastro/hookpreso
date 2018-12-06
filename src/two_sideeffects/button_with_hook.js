import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ChatAPI from "internet/chats.js";

export default function MyButtonWithHook(props) {
  const [count, updateCount] = useState(0);
  const [isOnline, updateStatus] = useState(null);

  useEffect(() => {
    document.title = count;
  });

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  function handleClick() {
    updateCount(count + 1);
  }

  function handleStatusChange(status) {
    updateStatus(status.isOnline);
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      {count}
    </Button>
  );
}

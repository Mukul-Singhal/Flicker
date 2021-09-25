import React from "react";
import ChatLabel from "./ChatLabel";
import Messages from "./Messages";
import NewMessages from "./NewMessages";

import "./ChatSection.styles.css";

const ChatSection = () => {
  return (
    <div className="chat_section_container">
      <ChatLabel />
      <Messages />
      <NewMessages />
    </div>
  );
};

export default ChatSection;

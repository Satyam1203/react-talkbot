import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Message } from "./Message";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
  // background-image: linear-gradient( -45deg, #a8edea 0%, #fed6e3 100%);
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  width: 400px;
  min-width: 300px;
  margin: auto;
  padding: 0.5rem;
  height: 600px;
  border: 2px solid gainsboro;
  border-radius: 50px;
  overflow: hidden;
`;

const msgDemo = [
  {
    sent: true,
    msg: "Where can I visulaize sorting algorithms?",
  },
  {
    sent: false,
    msg: "I'm also looking for resources",
  },
  {
    sent: true,
    msg: "Hey! I just found one.",
  },
  {
    sent: false,
    msg: "Share it with me",
  },
  {
    sent: true,
    msg: "Visit https://sorting-visualization.now.sh",
  },
  {
    sent: false,
    msg: "Thanks dude!",
  },
  {
    sent: false,
    msg: "See you soon :)",
  },
];

function TalkBox({ containerStyle, msgWrapperStyle, ...props }) {
  const [showMessage, setMoreMessage] = useState(0);
  const messages = props.messages ?? msgDemo;
  const senderAvatar = props.senderAvatar ?? "🧑🏻";
  const receiverAvatar = props.receiverAvatar ?? "👨🏻‍💻";

  useEffect(() => {
    if (showMessage === messages.length) return;
    setTimeout(() => {
      setMoreMessage((lastVal) => lastVal + 1);
    }, 1600);
  });

  return (
    <Container height={messages.length * 100} style={containerStyle}>
      {messages.map((item, i) => {
        if (i < showMessage)
          return (
            <Message
              key={i}
              user={item.sent}
              msgWrapperStyle={msgWrapperStyle}
              avatar={item.sent ? senderAvatar : receiverAvatar}
            >
              {item.msg}
            </Message>
          );
        return null;
      })}
    </Container>
  );
}

export default TalkBox;

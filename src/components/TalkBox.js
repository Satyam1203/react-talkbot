import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HTMLReactParser from "html-react-parser";

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
  height: 625px;
  border: 2px solid gainsboro;
  border-radius: 50px;
  overflow: hidden;
`;

const msgDemo = [
  {
    sent: false,
    msg: "Hi, How can I build an impressive resume?",
  },
  {
    sent: true,
    msg: "Hello, Do you have a good Github Profile?",
  },
  {
    sent: false,
    msg: "Yeah, I do have one. All of my projects are on Github.",
  },
  {
    sent: true,
    msg:
      "Cool, You can head over to <a href='https://resume-github.vercel.app' style='color: #74c'>https://resume-github.vercel.app</a> and generate a resume with your username.",
  },
  {
    sent: false,
    msg: "Ohh, wow! I'll check it out.",
  },
  {
    sent: true,
    msg: "and the best part is you can customize it too.",
  },
  {
    sent: false,
    msg: "Great, Thanks buddy :)",
  },
];

const TalkBox = ({
  containerStyle,
  msgWrapperStyle,
  sentMsgWrapperStyle,
  receivedMsgWrapperStyle,
  ...props
}) => {
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
              sentMsgWrapperStyle={sentMsgWrapperStyle}
              receivedMsgWrapperStyle={receivedMsgWrapperStyle}
              avatar={item.sent ? senderAvatar : receiverAvatar}
            >
              {HTMLReactParser(item.msg)}
            </Message>
          );
        return null;
      })}
    </Container>
  );
};

export default TalkBox;

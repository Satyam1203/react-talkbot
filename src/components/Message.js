import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MsgDiv = styled.div`
  display: inline-block;
  width: 280px;
  padding: 14px;
  margin: 8px 16px;
  background-color: lightcoral;
  font-family: sans-serif;
  font-size: 1.2rem;
  border-radius: 10px;
`;

function Message({ children, user, avatar, msgWrapperStyle }) {
  return (
    <>
      {user ? (
        <motion.div
          initial={{ x: "100%", rotate: -10, scale: 0 }}
          animate={{ x: "0%", rotate: 0, scale: 1 }}
          transition={{ default: { duration: 0.7 } }}
        >
          <MsgDiv style={msgWrapperStyle}>{children}</MsgDiv>
          <span style={{ fontSize: "3rem" }} role="img" aria-label="avatar">
            {avatar}
          </span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: "-100%", rotate: 10, scale: 0 }}
          animate={{ x: "0%", rotate: 0, scale: 1 }}
          transition={{ default: { duration: 0.7 } }}
        >
          <span style={{ fontSize: "3rem" }} role="img" aria-label="avatar">
            {avatar}
          </span>
          <MsgDiv style={{ backgroundColor: "lightgreen", ...msgWrapperStyle }}>
            {children}
          </MsgDiv>
        </motion.div>
      )}
    </>
  );
}

export { Message };

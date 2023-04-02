import React, { useState, useEffect, useRef } from "react";

import Message from "./Message";
import SendMessage from "./SendMessage"; /// REMEMEBER - > ONLY BIG LETTERS IN THE BEGINING
import { useApiContext } from "../hooks/useApiContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "./Forum.css";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const { apiCall } = useApiContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiCall("messages");
        setMessages(data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [apiCall]);

  const handleAddMessage = (message) => {
    const newMessages = [...messages];
    newMessages.push({ user, text: message.text, _id: Math.random() });
    setMessages(newMessages);
  };

  return (
    <>
      <div className="main-forum">
        <div className="container-forum">
          <h2>Forum</h2>
          {messages &&
            messages.map((message) => (
              <Message key={message._id} message={message} />
            ))}
          <SendMessage handleAddMessage={handleAddMessage} scroll={scroll} />
          <span ref={scroll}></span>
        </div>
      </div>
    </>
  );
};

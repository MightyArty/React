import React, { useEffect, useState } from "react";
import "./Forum.css";
import { useApiContext } from "../hooks/useApiContext";
import { useAuthContext } from "../hooks/useAuthContext";

const style = {
  form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-red-500`,
};

const SendMessage = (props) => {
  const { handleAddMessage } = props;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { apiCall } = useApiContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiCall("messages");
        console.log(data?.messages);
        setMessages(data.messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [apiCall]);

  async function handleAddEvent() {
    try {
      const { data } = await apiCall("messages", "POST", {
        text: message,
        user: user._id,
      });
      handleAddMessage(data._message);
      console.log(data._message);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-forum">
      Enter your message
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Message"
      />
      <button className="button-forum" onClick={handleAddEvent}>
        Send
      </button>
    </div>
  );
};

export default SendMessage;

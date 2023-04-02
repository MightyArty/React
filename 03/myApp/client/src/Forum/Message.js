import "./Forum.css";

const Message = ({ message }) => {
  return (
    <div>
      <div className="message-forum">
        <div className="name-forum">{message?.user?.name}</div>
        <div>{message.text} </div>
      </div>
    </div>
  );
};

export default Message;

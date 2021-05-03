import React, { useState, useEffect } from "react";
import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import ScrollableFeed from "react-scrollable-feed";
import { useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { API } from "../../backend";
import "./Chat.css";

// Open a socket connection to the backend
const socket = socketIOClient(API, {
  autoConnect: false,
});

const Chat = (props) => {
  const { tid } = useParams();

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Chat Connected");
      socket.emit("join", tid);
    });
    props.fetchChatMessages(tid);

    socket.on("chats", (chats) => {
      props.setChatMessages(chats);
    });
  }, []);

  const [message, setMessage] = useState("");

  const onSubmit = () => {
    if (message.length > 0) {
      let chatMessage = {
        chatId: tid,
        message: message,
        username: props.username,
        userId: props.userId,
      };
      setMessage("");
      props.addChatMessage(chatMessage);
    }
  };

  const handleOnClose = () => {
    props.toggleChatView(false);
  };

  return (
    <Menu
      right
      isOpen={props.data.chatToggle}
      onClose={handleOnClose}
      customBurgerIcon={false}
    >
      <h2 className="mb-4">Chats</h2>
      <div
        className="overflow-auto"
        id="chat-messages"
        style={{ height: "85%", width: "100%" }}
      >
        <ScrollableFeed forceScroll={"true"}>
          {props.data.chatMessages &&
            props.data.chatMessages.map((chat) => {
              return (
                <div id="chat-messages-content" key={chat._id}>
                  <Card
                    body
                    text="light"
                    bg={props.userId === chat.userId ? "dark" : "secondary"}
                  >
                    <span
                      className={
                        props.userId === chat.userId
                          ? "d-flex text-secondary"
                          : "d-flex text-dark"
                      }
                    >
                      {chat.username}
                    </span>
                    {/* <span>{chat.message}</span> */}
                    <span>{chat.message}</span>
                  </Card>
                </div>
              );
            })}
        </ScrollableFeed>
      </div>
      <div
        id="message-input"
        className="mr-4"
        style={{ position: "fixed", bottom: "2%" }}
      >
        <InputGroup>
          <FormControl
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message"
          />
          <InputGroup.Append>
            <Button variant="secondary" type="submit" onClick={onSubmit}>
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </Menu>
  );
};

export default Chat;

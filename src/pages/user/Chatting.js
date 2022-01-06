import { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const ChattingUser = () => {
  const socket = useRef();
  const [message, setMessage] = useState("");
  const [broadCast, setBroadCast] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const name = "user";
  const [otherUser, setOtherUser] = useState(null);
  const [newMessage, setNewMessage] = useState([]);
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (image != null) {
      const data = new FormData();

      data.append("image", image[0]);

      axios
        .post("http://localhost:8000/upload", data)
        .then((res) => {
          socket.current.emit(
            "sendMessage",
            otherUser.socketId,
            message,
            res.data.file.filename
          );
          setImage(null);
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      socket.current.emit("sendMessage", otherUser.socketId, message, image);
      setImage(null);
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.files);
  };

  // const handleBroadCast = () => {
  //   socket.current.emit("sendMessage", message);
  // }

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", "user", 1);
  }, []);

  useEffect(() => {
    let findUser;
    socket.current.on("getUsers", (users) => {
      findUser = users.find((user) => {
        return user.name == name;
      });
      setCurrentUser(findUser);
    });
  }, []);

  useEffect(() => {
    let findOtherUser;
    socket.current.on("getUsers", (users) => {
      findOtherUser = users.find((user) => {
        return user.name != name;
      });
      setOtherUser(findOtherUser);
    });
  }, []);

  useEffect(() => {
    socket.current.on("getNewMessage", (message) => {
      setNewMessage((prev) => [...prev, message]);
    });
  }, []);

  // useEffect(() => {
  //   socket.current.on('getBroadCast', (text) => {
  //     setBroadCast(text)
  //   })

  //   console.log(broadCast)
  // }, [])

  return (
    <div className="p-5">
      Chatting Room {currentUser && currentUser.name}
      <br />
      {otherUser && otherUser.name}
      <div className="p-5 my-5 border border-gray-300 rounded-md">
        {newMessage.length > 0 &&
          newMessage.map((message, index) => {
            return (
              <div key={index}>
                {message.image && <img src={message.image} width={50}></img>}
                {message.text != "" && <p>{message.text}</p>}
              </div>
            );
          })}
      </div>
      <div className="mt-7">
        <input
          type="text"
          value={message}
          onChange={(e) => handleChange(e)}
          className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-md outline-none focus:outline-none"
          placeholder="Message"
        />
      </div>
      <div className="mt-7">
        <input
          type="file"
          onChange={(e) => handleImage(e)}
          className="w-full px-4 py-2 mt-5 border border-gray-300 rounded-md outline-none focus:outline-none"
          placeholder="Message"
        />
      </div>
      <div>
        <button
          onClick={() => handleSend()}
          className="px-4 py-2 mt-5 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChattingUser;

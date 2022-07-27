import io from 'socket.io-client'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const App = () => {

  // This must be a user id if has login
  const uuid = uuidv4();

  // Socket IO instance
  // Set also transport in websocket
  const socket = io('localhost:3300', { query: { uuid }, transports: ['websocket'] })

  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  // fetch and set incoming message
  useEffect(() => {
    socket.on("RECEIVED_PRIVATE_MESSAGE", (msg) => {
      setMessageReceived(msg);
    });
  }, [socket]);

  // Set a room and join a room
  const joinRoom = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.value.trim() != '') {
        setRoom(e.target.value);
        socket.emit("JOIN_ROOM", e.target.value);
      }
    }
  }

  // Set a message
  const myMessage = (e: any) => {
    if (e.target.value.trim() != '') {
      setMessage(e.target.value);
    }
  }

  // Send Message
  const sendMessage = () => {
    if (room != '') {
      socket.emit("SEND_PRIVATE_MESSAGE", {to: room, message: message});
    } else {
      alert("You must join or set a room");
    }
  }
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96 mt-9">
        <div className="
          input-group
          relative 
          flex 
          flex-wrap 
          items-stretch 
          w-full 
          mb-4
        ">
          <input
            type="text" 
            className="
              form-control 
              relative 
              flex-auto 
              min-w-0 
              block 
              w-full 
              px-3 
              py-1.5 
              text-base 
              font-normal 
              text-gray-700 
              bg-white 
              bg-clip-padding 
              border 
              border-solid 
              border-gray-300 
              rounded 
              transition 
              ease-in-out 
              m-0 
              focus:text-gray-700 
              focus:bg-white 
              focus:border-blue-600 
              focus:outline-none" 
            placeholder="Enter room..."
            onKeyDown={joinRoom}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 
              focus:bg-white 
              focus:border-blue-600 
              focus:outline-none
            "
            rows={3}
            placeholder="Your message"
            onChange={myMessage}
          ></textarea>
        </div>
        <div className="flex space-x-2 justify-center">
          <button
            onClick={sendMessage}
            type="button"
            className="
              inline-block 
              px-6 
              py-2.5 
              bg-blue-600 
              text-white 
              font-medium 
              text-xs 
              leading-tight 
              uppercase 
              rounded 
              shadow-md 
              hover:bg-blue-700 
              hover:shadow-lg 
              focus:bg-blue-700 
              focus:shadow-lg 
              focus:outline-none 
              focus:ring-0 
              active:bg-blue-800 
              active:shadow-lg 
              transition 
              duration-150 
              ease-in-out
            ">
            Send
          </button>
        </div>
        {messageReceived}
      </div>
    </div>
  );
}
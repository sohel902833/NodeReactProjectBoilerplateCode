import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const Socket = () => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const socket = io.connect("/");
    socket.on("msg", (data) => {
      setMsg(data.time);
    });
  }, []);

  return <div>Socket {msg}</div>;
};

export default Socket;

import React, { useState } from "react";
import "../styles/Chat.css";
import { BsRobot } from "react-icons/bs";
import { AiOutlineEnter } from "react-icons/ai";
import axios from "axios";
import {BeatLoader } from "react-spinners";
const Chat = () => {
  let [toggle, setToggle] = useState(false);
  let [value, setValue] = useState("");
  let [textMessages,setTextMessages] = useState([]);
  let [load,setLoad] = useState(false);

  //API data option
  const options = {
    method: "POST",
    url: "https://open-ai21.p.rapidapi.com/conversationgpt35",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "45b5abfdb7msh53551f05a69d03cp19d973jsna70f3a59c932",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: value,
        },
      ],
      web_access: false,
      stream: false,
    },
  };

  let ToggleChat = () => {
    // console.log("working")
    toggle ? setToggle(false) : setToggle(true);
  };

  async function ChatText() {
    try {
      setLoad(true);
      setTextMessages([...textMessages , {
        master : "user",
        message : value
      }])
      setValue('');
      const response = await axios.request(options);
      if(response){
        setTextMessages([...textMessages , {
          master : "bot",
          message : response.data.BOT
        }])
        setLoad(false)
        // console.log(textMessages);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="chatbot_container">
      <div className="chatbot_logo">
        <div className="logo_container" onClick={() => ToggleChat()}>
          <BsRobot />
        </div>
      </div>
      <div className={toggle ? "chat_div_display" : "chat_div"}>
        <div className="chat_header">
          <h4>ChatKaro</h4>
        </div>
        <div className="chat_body">
          {textMessages.map((i, index) => {
            return i.master == "user" ? (
              <div className="right" key={index}>
                <div className="right_message">{i.message}</div>
              </div>
            ) : (
              <div className="left" key={index}>
                <div className="left_message">{i.message}</div>
              </div>
            );
          })}
        </div>
        <div className="chat_footer">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => ChatText()}>
            <AiOutlineEnter />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

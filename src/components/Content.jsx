import React from "react";
import { useState } from "react";
import axios from "axios"
import "../styles/Content.css";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsTranslate } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { IoMdShareAlt } from "react-icons/io";
// import {BounceLoader} from "react-spinners";
import { BeatLoader } from "react-spinners";
import ProgressCircle from "./Progress";
const Content = () => {
  const [load, setLoad] = React.useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [voiceText,setVoiceText] = useState('');
  const [language,setLanguage] = useState('en');
  async function Load() {
    try {
      setLoad(true);
      let textData = "hello" + "How are you" + "Nice to meet you"
      let data = JSON.stringify(textData);
      console.log(data)
      const response = await axios.post("/api/record-audio", voiceText);

      if (response.status === 200 && response.data.audioUrl) {
        setAudioUrl(response.data.audioUrl);

        // Create an audio element
        const audio = new Audio(response.data.audioUrl);

        // Play the audio immediately
        audio.play();
        setLoad(false);
      }
    } catch (error) {
      setLoad(false)
      console.error(error);
    }
    // setTimeout(() => {
    //   setLoad(false);
    // }, 4000);
  }
  return (
    <div className="content_container">
      <div className="content_description">
        <div className="ico_container">
          <div className="share">
            <IoMdShareAlt />
          </div>
          <div className="mic">
            {load ? (
              <BeatLoader color="#2980b9" size={10} />
            ) : (
              <div>
                <BsFillMicFill onClick={() => Load()} />
                {audioUrl && (
                  <audio controls>
                    <source src={audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            )}
          </div>
          <div className="translate">
            <BsTranslate />
          </div>
        </div>
        <h2>Diplocorpae Rosae</h2>
        <div className="content_image">
          <img src="./images/crops.png" alt="crops" />
        </div>
        <p>
          Laborum irure tempor ex veniam aute nulla deserunt nulla magna.
          Cupidatat adipisicing cillum adipisicing proident incididunt cillum
          esse fugiat magna. Laborum Lorem labore ut dolore ut cillum quis
          fugiat. Quis nulla minim fugiat minim. Nisi sint duis adipisicing
          commodo officia est elit adipisicing aliquip. Nisi duis magna
          reprehenderit excepteur consectetur ullamco est laboris exercitation
          dolore. Culpa quis cillum sit occaecat consectetur labore deserunt
          nulla est irure deserunt.
        </p>
        <p>
          Proident ullamco id eiusmod et. Qui officia irure labore labore labore
          non. Ut pariatur in id cillum. Velit do aute deserunt aliqua irure
          ipsum aliquip. Excepteur ut consequat labore deserunt aute anim est
          id.
        </p>
        <div className="common_names">
          <h3>Common Name</h3>
          <ul>
            <li>Black spot</li>
          </ul>
        </div>
        <div className="blog_data">
          <div className="blog_title">
            <h3>Reference article on Internet</h3>
          </div>
          <Link className="link_tag" to="https://wikepedia.com/">
            <div className="link">
              <AiOutlineLink className="icon" />
              <h4>https://wikepedia.com</h4>
            </div>
          </Link>
        </div>
        <div className="progress_container">
          {/* <h3></h3> */}
          <ProgressCircle />
        </div>
      </div>
    </div>
  );
};

export default Content;

import React, { useState, useEffect } from "react";
import "./SpeechToText.css";
const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-in";

const SpeechToText = (props) => {
  /**
   * PROPS:
   *  1) setText @func allows to set text to value received
   *  2) text @var holds the current value
   */
  const [isListening, setIsListening] = useState(false);

  const { note, setNote, width, handleSubmit=()=>{},micOnly=false } = props;

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("Continue...");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      console.log("Inside..");
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const onlyMic = () =>{
    return(
      <i
      className={
        isListening
          ? "fa fa-microphone text-danger btn text-lg mic-on"
          : "fa fa-microphone text-dark btn"
      }
      style={{float:"right"}}
      aria-hidden="true"
      onClick={() => setIsListening(!isListening)}
    ></i>
    )
  }

  if(micOnly){
    return onlyMic();
  }
  else
  return (
    <div className=" mb-1" style={{ width: width}}>
      <div className="mic-box">
        <div className="row">
          <div className="col-2">
            {" "}
            <i
              className={
                isListening
                  ? "fa fa-microphone text-danger btn text-lg mic-on"
                  : "fa fa-microphone text-white btn"
              }
              aria-hidden="true"
              onClick={() => setIsListening(!isListening)}
            ></i>
          </div>
          <div className="col-8">
            {" "}
            <span className="text-white">{note}</span>
          </div>
          {/* <div className="col-2">
            <i class="fa fa-plus-circle text-white" aria-hidden="true" onClick={()=>handleSubmit()}></i>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;

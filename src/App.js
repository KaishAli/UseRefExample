import "./styles.css";
import React, { useRef, useState } from "react";

export default function App() {
  const kaish = useRef(null);
  const [show, setShow] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    if (kaish.current.value === "") {
      alert("please fill the empty field");
    } else {
      setShow(kaish.current.value);
    }
  }
  function clearData() {
    if (kaish.current.value) {
      setShow(kaish.current.null);
    }
  }
  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <div>
          <lable htmlfor="luckk"> Enter Your Name </lable>
          <br />

          <input
            placeholder="enter anything"
            type="text"
            id="luckk"
            ref={kaish}
          ></input>
          <br />

          <button>Submit</button>
          <p>{show ? kaish.current.value : ""}</p>
        </div>
      </form>
      <button onClick={clearData}>clear</button>
    </div>
  );
}

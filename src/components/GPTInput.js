import React, { useState } from "react";

function GPTInput({ onAskGPT }) {
  const [inputObjective, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <textarea
        type="text"
        value={inputObjective}
        onChange={handleInputChange}
        id="inputField"
        placeholder="Enter some text"
      ></textarea>
      <button
        id="actionButton"
        onClick={() => {
          onAskGPT(inputObjective);
        }}
      >
        Ask GPT
      </button>
    </div>
  );
}

export default GPTInput;

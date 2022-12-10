import React, { useRef } from "react";
import style from "./Btn.module.css";

const Btn = (props) => {
  const inputEl = useRef("");
  const valueInput = inputEl.current;
  const handleChange = (e) => {
    const fieldName = e.target.name;
    props.setValueDate({ ...props.valueDate, [fieldName]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          type="text"
          ref={inputEl}
          value={props.valueDate.name}
          onChange={(e) => handleChange(e)}
          className={style.input}
        />
      </div>

      <button
        className={style.btn}
        onClick={() => props.handleInputClick(valueInput.value)}
      >
        Submit
      </button>
    </div>
  );
};

export default Btn;

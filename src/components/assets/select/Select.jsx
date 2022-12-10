import React from "react";
import style from "./Select.module.css";

const Select = (props) => {
  const handleSelect = (e) => {
    let task = null;
    if (e.target.selectedIndex > 0) {
      task = props.prevBlog[e.target.selectedIndex - 1];
      props.selectChange(task.id, props.section);
    }
  };

  return (
    <div>
      <select
        className={style.select}
        defaultValue={"DEFAULT"}
        onChange={handleSelect}
      >
        <option value="DEFAULT" disabled></option>
        {props.prevBlog.map((itemDate) => {
          return <option key={itemDate.id}>{itemDate.name}</option>;
        })}
      </select>
    </div>
  );
};
export default Select;

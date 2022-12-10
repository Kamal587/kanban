import React from "react";
import "./Blog.css";
import Btn from "../../assets/btn/Btn";
import { useState } from "react";
import Select from "../../assets/select/Select";
import { Link } from "react-router-dom";
import plus from "./../../assets/img/Plus.png";

const Blog = (props) => {
  const [isSelect, setIsSelect] = useState(false);

  const initialValue = {
    title: "",
    description: "",
  };
  const handleClick = () => {
    setIsSelect(!isSelect);
  };

  const handleInputClick = (valueInput) => {
    if (valueInput) {
      props.addTask(valueInput);
    }

    setIsSelect(false);
    props.setValueDate(initialValue);
  };

  const selectChange = (id, section) => {
    props.addSelect(id, section);
    setIsSelect(false);
  };

  return (
    <div className="blog">
      <div className="titleBlog">{props.titleBlog}</div>
      <div className="items">
        {props.taskList.map((issue) => (
          <Link to={`/tasks/${issue.id}`} key={issue.id} className="itemLink">
            <li className="item">{issue.name}</li>
          </Link>
        ))}
      </div>
      {props.section === props.data.Backlog && isSelect && (
        <Btn
          handleClick={props.handleClick}
          valueDate={props.valueDate}
          setValueDate={props.setValueDate}
          handleInputClick={handleInputClick}
        />
      )}

      {props.section !== props.data.Backlog && isSelect && (
        <Select
          section={props.section}
          prevBlog={props.prevBlog}
          taskList={props.taskList}
          handleSelect={props.handleSelect}
          selectChange={selectChange}
        />
      )}
      {props.section === props.data.Backlog && (
        <button
          className={`taskList ${isSelect ? "inActive" : "active"}`}
          onClick={handleClick}
        >
          <img src={plus} alt="" /> Add card
        </button>
      )}
      {props.section !== props.data.Backlog && (
        <button
          className="column_add_button"
          disabled={Boolean(props.prevBlog.length < 1)}
          onClick={handleClick}
        >
          <img src={plus} alt="" /> Add card
        </button>
      )}
    </div>
  );
};

export default Blog;

import React from "react";
import Blog from "./Blogs/Blog";
import style from "./Main.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Main = (props) => {
  const [valueDate, setValueDate] = useState("");

  const addTask = (valueInput) => {
    const back = {
      id: uuidv4(),
      name: valueInput,
      section: props.data.Backlog,
      description: "",
    };
    props.setTaskList([...props.taskList, back]);
    setValueDate("");
  };

  const addSelect = (id, section) => {
    const newList = props.taskList.map((issue) => {
      issue.section = issue.id === id ? section : issue.section;
      return issue;
    });
    props.setTaskList(newList);
  };

  return (
    <div className={style.main}>
      {Object.values(props.data).map((section) => {
        const curBlog = props.taskList.filter(
          (issue) => issue.section === section
        );
        const prevBlog = props.taskList.filter(
          (issue) => issue.section === section - 1
        );

        return (
          <Blog
            key={section}
            section={section}
            titleBlog={props.dataName[section]}
            taskList={curBlog || []}
            prevBlog={prevBlog}
            data={props.data}
            valueDate={valueDate}
            setValueDate={setValueDate}
            addSelect={addSelect}
            addTask={addTask}
            setValueTask={props.setValueTask}
          />
        );
      })}
    </div>
  );
};

export default Main;

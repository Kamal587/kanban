import React, { useState } from "react";
import "./MainTask.css";
import exit from "./../../assets/img/exit.png";
import { Link, useParams } from "react-router-dom";

function MainTask() {
  const params = useParams();
  const tasksList = JSON.parse(localStorage.getItem("taskList"));
  const issue = tasksList.find((issue) => issue.id === params.taskId);
  console.log(issue);
  const [description, setDescription] = useState(
    issue && issue.description.length > 0
      ? issue.description
      : "This task has no description"
  );
  const handleFocus = () => {
    if (description === "This task has no description") {
      setDescription("");
    }
  };
  const handleExitClick = () => {
    const newTasksList = tasksList.map((i) => {
      if (i.id === issue.id) {
        i.description =
          description === "This task has no description" ? "" : description;
      }
      return i;
    });
    window.localStorage.setItem("taskList", JSON.stringify(newTasksList));
  };
  return (
    <div className="root">
      <div className="titleExit">
        <div className="title">{issue.name}</div>
        <div className="exit">
          <Link to="/" onClick={handleExitClick}>
            <img className="imgExit" src={exit} alt="" />
          </Link>
        </div>
      </div>
      <div className="taskText">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="descriptionText"
          onFocus={handleFocus}
        ></textarea>
      </div>
    </div>
  );
}

export default MainTask;

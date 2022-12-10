import React from "react";
import style from "./Footer.module.css";

const Footer = (props) => {
  const activeTasks = props.taskList.filter((tasks) => tasks.section === 0);
  const FinishedTasks = props.taskList.filter((tasks) => tasks.section === 3);

  return (
    <div className={style.root}>
      <div className={style.tasksAmount}>
        <span className={style.activeTask}>
          Active tasks: {activeTasks.length}{" "}
        </span>
        <span className={style.finishedTask}>
          Finished tasks: {FinishedTasks.length}
        </span>
      </div>
      <div className={style.nameAuthor}>
        <span className={style.nameText}>Kanban Board by Kamal, 2022</span>
      </div>
    </div>
  );
};

export default Footer;

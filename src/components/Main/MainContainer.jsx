import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import MainTask from "./MainTask/MainTask";

function MainContainer(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            dataName={props.dataName}
            data={props.data}
            taskList={props.taskList}
            setTaskList={props.setTaskList}
          />
        }
      />
      <Route path="/tasks/:taskId" element={<MainTask />} />
    </Routes>
  );
}

export default MainContainer;

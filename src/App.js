import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainContainer from "./components/Main/MainContainer";

let data = {
  Backlog: 0,
  Ready: 1,
  "In progress": 2,
  Finiched: 3,
};
const dataName = {
  [0]: "Backlog",
  [1]: "Ready",
  [2]: "In progress",
  [3]: "Finished",
};

function App() {
  let issue = JSON.parse(window.localStorage.getItem("taskList"));
  issue = issue ? issue : [];
  const [taskList, setTaskList] = useState(issue);

  useEffect(() => {
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
  });
  return (
    <div className="App">
      <Header />
      <MainContainer
        className="Main"
        dataName={dataName}
        data={data}
        taskList={taskList}
        setTaskList={setTaskList}
      />

      <Footer className="Footer" taskList={taskList} />
    </div>
  );
}

export default App;

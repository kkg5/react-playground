import { useState } from "react";
import "./App.css";

import Board from "./Board";

// const dummyList = [
//   {
//     id: 1,
//     title: "제목",
//     content: "내용 내용 내용 내용 내용",
//     date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     title: "제목2",
//     content: "내용2 내용2 내용2 내용2 내용2",
//     date: new Date().getTime(),
//   },
// ];

function App() {
  let text = "Board";
  const [data, setData] = useState([
    {
      id: 1,
      title: "Title1",
      content: "Content1",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "Title2",
      content: "Content2",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const onDelete = (targetId) => {
    const newData = data.filter((it) => it.id !== targetId);
    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{text}</h2>
        <Board onDelete={onDelete} boardList={data} />
      </header>
    </div>
  );
}

export default App;

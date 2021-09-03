import React from "react";
import Button from "./Button";
import Input from "./Input";
import List from "./List";
import Header from "./Header";
import { useState } from "react";
import Modal from "./Modal";
import "../css/todo.css";

import { useDispatch, useSelector } from "react-redux";
import { taskAdded, taskDeleted, tasksReseted } from "./../store/tasks";

function Todo(props) {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // const [tasks, setTasks] = useState([]);

  // const handleAdd = (task) => {
  //   if (task) {
  //     setTasks([...tasks, task]);
  //     setInputValue("");
  //   } else {
  //     setModalVisible(true);
  //   }
  // };

  // const handleDelete = (task) => {
  //   setTasks(tasks.filter((t) => t !== task));
  // };

  // const handleReset = () => {
  //   setTasks([]);
  // };

  // useSelector((state) => console.log("State", state.tasks.list));

  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  const handleAdd = (task) => {
    if (task) {
      dispatch(taskAdded(task));
      setInputValue("");
    } else {
      setModalVisible(true);
    }
  };

  return (
    <div className="todo">
      <Modal visible={modalVisible} onClick={() => setModalVisible(false)} />;
      <Header />
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onClick={() => handleAdd(inputValue)}
      />
      <div>
        {tasks.map((task, index) => (
          <List
            key={index}
            title={task}
            onClick={() => dispatch(taskDeleted(task))}
          />
        ))}
      </div>
      <Button onClick={() => dispatch(tasksReseted())} />
    </div>
  );
}

export default Todo;

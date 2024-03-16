import { useState } from "react";
import "./App.css";
import Body from "./Body";
import Header from "./Header";
import { TaskListContext } from "./Context/Context";
import { taskListsInitialState } from "./data/data";
import AddTask from "./Components/AddTask/AddTask";
import Footer from "./Footer";
import { useReducer } from "react";
import { TaskReducer } from "./Reducer/Reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ADD_TO_TASK_LIST,
  DELETE_ALL_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FAVORITE_OR_NOT_FAVORITE,
  SEARCH_TASK,
} from "./Reducer/actions-type";

function App() {
  const [state, dispatch] = useReducer(TaskReducer, taskListsInitialState);
  const [addTaskModel, setAddTaskModel] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);

  const handleAddTask = (nextTask, isAdd) => {
    if (isAdd) {
      dispatch({
        type: ADD_TO_TASK_LIST,
        payload: { ...nextTask },
      });
      toast.success(`(${nextTask.title}) has been successfully added`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      dispatch({
        type: EDIT_TASK,
        payload: nextTask,
      });
      toast.success(`(${nextTask.title}) has been successfully updated`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setAddTaskModel(false);
  };

  const handleSearch = (input) => {
    dispatch({
      type: SEARCH_TASK,
      payload: input.toString(),
    });
    toast.info(`Is this the data you are looking for base on this search (${input})`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  };

  const handleRemove = (task) => {
    dispatch({
      type: DELETE_TASK,
      payload: task.id,
    });
    toast.error(`(${task.title}) has been successfully deleted`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  };

  const handleDeleteAll = () => {
    dispatch({
      type: DELETE_ALL_TASK,
      payload: (state.taskList.length = 0),
    });
    toast.error(`All task has been successfully deleted`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  };

  const handleIsfavorite = (id) => {
    const findIndex = state.taskList.findIndex((task) => task.id === id);

    const getFavoriteId = (state.taskList[findIndex].isFavorite =
      !state.taskList[findIndex].isFavorite);

    dispatch({
      type: FAVORITE_OR_NOT_FAVORITE,
      payload: getFavoriteId,
    });
  };

  const handleEditing = (task) => {
    setUpdatedTask(task);
    setAddTaskModel(true);
  };

  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <TaskListContext.Provider value={{ state, dispatch }}>
        {addTaskModel ? (
          <AddTask
            onTaskModel={() =>
              setAddTaskModel(!addTaskModel, setUpdatedTask(null))
            }
            onAdd={handleAddTask}
            updatedTask={updatedTask}
          ></AddTask>
        ) : (
          <>
            <Header />
            <Body
              onTaskModel={() =>
                setAddTaskModel(!addTaskModel, setUpdatedTask(null))
              }
              onEditing={handleEditing}
              onRemove={handleRemove}
              onDeleteAll={handleDeleteAll}
              onfavorite={handleIsfavorite}
              onSearch={handleSearch}
            ></Body>
            <Footer />
          </>
        )}
      </TaskListContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;

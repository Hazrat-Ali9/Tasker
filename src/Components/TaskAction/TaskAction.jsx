
import SearchTask from "../SearchTask/SearchTask";

const TaskAction = ({onTaskModel,onDeleteAll,onSearch}) => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <SearchTask onSearch={onSearch}/>

        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={onTaskModel}
        >
          Add Task
        </button>
        <button 
        className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        onClick={onDeleteAll}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskAction;

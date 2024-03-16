import { useContext } from "react";
import { TaskListContext } from "../../Context/Context";
import Task from "../Task/Task";
import TaskAction from "../TaskAction/TaskAction";

const TaskListTable = ({
  onTaskModel,
  onEditing,
  onRemove,
  onDeleteAll,
  onfavorite,
  onSearch,
}) => {
  const { state } = useContext(TaskListContext);
  const searchKey = state.searchKey;
  return (
    <section className="font-sans" id="tasks">
      <div className="container mx-auto">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onTaskModel={onTaskModel}
            onSearch={onSearch}
            onDeleteAll={onDeleteAll}
          ></TaskAction>

          {state.taskList.length > 0 ? (
            <div className="overflow-auto">
              <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                  <tr>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                      {" "}
                      Title{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                      {" "}
                      Description{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                      {" "}
                      Tags{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Priority{" "}
                    </th>
                    <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                      {" "}
                      Options{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state.taskList.filter((task) => task.title?.toLowerCase().includes(searchKey?.toLowerCase()))
                    .map((task) => {
                      return (
                        <Task
                          key={task.id}
                          onEditing={onEditing}
                          onRemove={onRemove}
                          onfavorite={onfavorite}
                          task={task}
                        ></Task>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-2xl text-red-500 font-semibold">
              No task Available
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskListTable;

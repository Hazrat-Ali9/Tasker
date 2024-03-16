import TaskListTable from "./Components/TaskListTable/TaskListTable";


const Body = ({onTaskModel,onEditing,onRemove,onDeleteAll,onfavorite,onSearch}) => {
    return (
        <div>
            <TaskListTable 
            onTaskModel={onTaskModel} 
            onEditing={onEditing} 
            onRemove={onRemove}
            onDeleteAll={onDeleteAll}
            onfavorite={onfavorite}
            onSearch={onSearch}
            ></TaskListTable>
        </div>
    );
};

export default Body;
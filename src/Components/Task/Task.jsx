
import Tags from "../../Tags/Tags";
import { IoStar } from "react-icons/io5";

const Task = ({task,onEditing,onRemove,onfavorite}) => {

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>

      <button onClick={()=>onfavorite(task.id)}>
        {
          task.isFavorite ? <IoStar color="red"/> : <IoStar color="gray"/>
        }  
      </button>

      </td>
      <td>{task.title}</td>
      <td>
        <div>
            {task.description}
        </div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
              {
                task.tags.map((tag,index)=> <Tags key={index} tag={tag}></Tags>)
              }
        </ul>
      </td>
      <td className="text-center">High</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button 
          className="text-red-500"
          onClick={()=>onRemove(task)}
          >Delete</button>
          <button
          className="text-blue-500"
          onClick={()=>onEditing(task)}
          >Edit</button>
        </div>
      </td>
    </tr>
  );
};

export default Task;

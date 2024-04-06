import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/TodosSlice";

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    return (
        <li>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))} />
        <span>{title}</span>
        <span className="delete" onClick={()=> dispatch(deleteTodo(id))} >&times;</span>
      </li>    
    );
}

export { TodoItem }
import { toggleTodo, deleteTodo } from "../store/TodosSlice";
import { useAppDispatch } from "../hooks";
import { FC } from "react";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))} />
        <span>{title}</span>
        <span className="delete" onClick={()=> dispatch(deleteTodo(id))} >&times;</span>
      </li>    
    );
}

export { TodoItem }
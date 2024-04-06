import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.value);
    return (
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                {...todo}
            />
        ))
    );
}

export { TodoList }
import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../hooks";

const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.value);
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
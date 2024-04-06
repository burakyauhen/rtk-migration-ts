import "./App.css";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/TodosSlice";

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();


  const handleAddTodo = (text) => {
    dispatch(addTodo(text)),
    setText('');
  }

  // const toggleTodo = (todoId) => {
  //   setTodos(todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo ));
  // }

  // const removeTodo = (todoId) => {
  //   setTodos(todos.filter((todo) => todo.id !== todoId))
  // }


  return (
    <div className="App">
      <InputField 
        text={text}
        // addTodos={addTodos}
        handleAddTodo={handleAddTodo}
        setText={setText}
      />

      <TodoList/>

    </div>
  );
}

export default App; 
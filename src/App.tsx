import "./App.css";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/TodosSlice";

const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();


  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text)),
    setText('');
  }

  return (
    <div className="App">
      <InputField 
        text={text}
        handleAddTodo={handleAddTodo}
        setText={setText}
      />
      <TodoList/>

    </div>
  );
}

export default App; 
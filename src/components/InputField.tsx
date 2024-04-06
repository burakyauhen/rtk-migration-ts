import { FC } from 'react';

interface InputFieldProps {
  text: string;
  handleAddTodo: (text: string) => void;
  setText: (text: string) => void;
}

const InputField: FC<InputFieldProps> = ({text, handleAddTodo, setText}) => {
    return (
        <label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleAddTodo(text)}>Add todo</button>
      </label> 
    );
} 

export { InputField }
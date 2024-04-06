const InputField = ({text, handleAddTodo, setText}) => {
    return (
        <label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleAddTodo(text)}>Add todo</button>
      </label> 
    );
} 

export { InputField }
import "../styles/header.css";

function HeaderAddTodo(props) {
  return (
    <div className="newToDoSection">
      <input
        className="newToDoValue"
        onChange={props.update}
        onKeyDown={props.onNewToDoKeyDown}
        type="text"
        value={props.newToDo}
        // disabled={props.toDoList.length >= 15}
      />
      <button
        className="addButton"
        disabled={props.newToDo.length === 0}
        //    props.toDoList.length >= 15
        onClick={props.addToList}
      >
        Add
      </button>
    </div>
  );
}

export default HeaderAddTodo;

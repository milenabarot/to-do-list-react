import "../styles/header.css";

function Header(props) {
  return (
    <header className="header">
      <div>
        <h1>To Do List</h1>
        <button
          className="clearButton"
          onClick={props.clearToDos}
          disabled={props.toDoList.length === 0}
        ></button>
      </div>
      <input
        className="newToDo"
        onChange={props.update}
        onKeyDown={props.onNewToDoKeyDown}
        type="text"
        value={props.newToDo}
      />
      <button disabled={props.newToDo.length === 0} onClick={props.addToList}>
        Add
      </button>
    </header>
  );
}

export default Header;

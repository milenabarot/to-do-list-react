import "../styles/header.css";
import HeaderAddTodo from "./headerAddTodo";

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
      <HeaderAddTodo
        onNewToDoKeyDown={props.onNewToDoKeyDown}
        update={props.update}
        newToDo={props.newToDo}
        addToList={props.addToList}
        toDoList={props.toDoList}
      />
    </header>
  );
}

export default Header;

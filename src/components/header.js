import "../styles/header.css";
import HeaderAddTodo from "./headerAddTodo";
import EditHeaderTitle from "./editHeaderTitle";

function Header(props) {
  return (
    <header className="header">
      <div>
        <EditHeaderTitle
          headerTitle={props.headerTitle}
          updateHeaderTitle={props.updateHeaderTitle}
        />
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

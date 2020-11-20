function Header(props) {
  return (
    <header className="header">
      <h1>To Do List</h1>
      <input onChange={props.update} type="text" value={props.newToDo} />
      <button onClick={props.addToList}>Add</button>
    </header>
  );
}

export default Header;

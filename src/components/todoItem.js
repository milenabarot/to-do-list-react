import { motion } from "framer-motion";
import "../styles/todoItem.css";

// when bin has been assigned true, this function will remove the item from the todolist render
function TodoItem(props) {
  const item = props.item;

  return (
    <motion.li
      className="toDoItem"
      initial={{ opacity: 0, transition: { duration: 1 } }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <input
        className="checkBox"
        type="checkbox"
        onChange={props.completeToDo}
        checked={item.done}
        id={item.id}
      />
      <input
        className="toDoValue"
        onChange={props.editToDo}
        type="text"
        value={item.name}
        id={item.id}
        disabled={item.done}
      />
      <button className="removeButton" onClick={props.removeToDo} id={item.id}>
        Remove
      </button>
    </motion.li>
  );
}

export default TodoItem;

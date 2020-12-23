import { motion } from "framer-motion";
import "../styles/todoItem.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

// using pretty checkbox npm to style checkbox
// when bin has been assigned true, this function will remove the item from the todolist render
function TodoItem(props) {
  const item = props.item;

  return (
    <motion.li
      className="toDoItem"
      initial={{ opacity: 0, transition: { duration: 1 } }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="pretty p-default p-curve p-thick p-smooth p-bigger">
        <input
          type="checkbox"
          onChange={props.completeToDo}
          checked={item.done}
          id={item.id}
        />
        <div className="state p-success">
          <label htmlFor=""></label>
        </div>
      </div>

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

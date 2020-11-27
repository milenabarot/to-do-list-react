import { motion } from "framer-motion";

// when bin has been assigned true, this function will remove the item from the todolist render
function TodoItem(props) {
  const item = props.item;
  if (item.bin === true) {
    return null;
  }
  return (
    <motion.li
      initial={{ opacity: 0, transitionDuration: 2 }}
      animate={{ opacity: 1, transitionDuration: 2 }}
    >
      <input
        type="checkbox"
        onChange={props.completeToDo}
        checked={item.done}
        id={item.id}
      />
      <input
        onChange={props.editToDo}
        type="text"
        value={item.name}
        id={item.id}
        disabled={item.done}
      />
      <button onClick={props.removeToDo} id={item.id}>
        Remove
      </button>
    </motion.li>
  );
}

export default TodoItem;

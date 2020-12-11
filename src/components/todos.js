import _ from "lodash";
import { motion, AnimateSharedLayout } from "framer-motion";
import TodoItem from "./todoItem";
import "../styles/todos.css";

function Todos(props) {
  // the sortedtodolist ordered by done and date property with lodash
  const sortedToDoList = _.orderBy(
    props.toDoListItems,
    ["done", "date"],
    ["asc", "desc"]
  );
  return (
    // sorted todolistitems, using lodash(a-z) orderBy method, which gives me new const sortedtodolist, and then mapped over this to create a list with li's
    //added in framer animation using props
    // item is the name of the iteratee, that it passed through the map function of todolistitems, and then every to do item is then the 'item'
    <AnimateSharedLayout type="crossfade">
      <motion.ul layout className="listItems">
        {sortedToDoList.map((item) => (
          <TodoItem
            key={item.id}
            editToDo={props.editToDo}
            item={item}
            removeToDo={props.removeToDo}
            completeToDo={props.completeToDo}
          />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

export default Todos;

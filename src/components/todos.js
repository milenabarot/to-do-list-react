import _ from "lodash";
import { motion } from "framer-motion";
import TodoItem from "./todoItem";

function Todos(props) {
  const sortedToDoList = _.orderBy(props.toDoListItems, "name", "asc");
  return (
    // sorted todolistitems, using lodash(a-z) orderBy method, which gives me new const sortedtodolist, and then mapped over this to create a list with li's
    //added in framer animation using props
    <ul>
      {sortedToDoList.map((item) => (
        <TodoItem
          key={item.id}
          editToDo={props.editToDo}
          item={item}
          removeToDo={props.removeToDo}
          completeToDo={props.completeToDo}
        />
      ))}
    </ul>
  );
}

export default Todos;

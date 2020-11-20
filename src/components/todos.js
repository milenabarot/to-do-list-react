import _ from "lodash";
import { motion } from "framer-motion";

function Todos(props) {
  const sortedToDoList = _.orderBy(props.toDoListItems, "name", "asc");
  return (
    // sorted todolistitems, using lodash(a-z), which gives me new const sortedtodolist, and then mapped over this to create a list with li's
    //added in framer animation using props
    <ul>
      {sortedToDoList.map((item) => (
        <motion.li
          initial={{ opacity: 0, transitionDuration: 1 }}
          animate={{ opacity: 1, transitionDuration: 1 }}
          key={item.id}
        >
          <input type="text" value={item.name} />
        </motion.li>
      ))}
    </ul>
  );
}

export default Todos;

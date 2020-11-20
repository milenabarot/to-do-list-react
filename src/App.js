import "./App.css";
import Header from "./components/header";
import Todos from "./components/todos";
import createReactClass from "create-react-class";

const App = createReactClass({
  getInitialState() {
    return {
      newToDo: "",
      toDoList: [],
      id: 0,
    };
  },

  updateNewToDo(event) {
    // this is called when input field is altered, onChanged triggered, which calls this and makes the title equal to the new value. Which then changes the value of header title prop
    this.setState({
      newToDo: event.target.value,
    });
  },

  // this is adding a newToDo that has been typed in the input field and adding it to the toDoList array
  addToList() {
    // this is a newToDo as an object which gets passed into the toDoList below
    const newToDoObject = {
      name: this.state.newToDo,
      id: this.state.id,
      bin: false,
      done: false,
    };
    //clearing the newToDo and setting the state with the newToDo in it
    this.setState({
      newToDo: "",
      toDoList: [...this.state.toDoList, newToDoObject],
      id: this.state.id + 1,
    });
  },

  render() {
    // below is tenary operator that conditionally renders header when button is clicked
    return (
      <div className="App">
        <Header
          newToDo={this.state.newToDo}
          update={this.updateNewToDo}
          addToList={this.addToList}
        />
        <Todos toDoListItems={this.state.toDoList} />
      </div>
    );
  },
});

export default App;

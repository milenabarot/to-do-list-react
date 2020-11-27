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
    // this is called when input field is altered, onChanged triggered, which calls this and makes the input value equal to the new value entered in input field. Which then changes the value of the newtodo prop
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

  editToDo(event) {
    const updatedToDoListItemName = event.target.value; // getting the new value of the todo
    let updatedToDoList = [...this.state.toDoList]; // making a copy of the toDoList
    updatedToDoList[event.target.id] = {
      ...updatedToDoList[event.target.id],
      name: updatedToDoListItemName,
    }; //getting the object of the new todolist and assigning it to a copy with just a changed name property

    this.setState({
      toDoList: updatedToDoList, //everytime a value is changed, updating the state of toDoList to the new updatedToDoList
    });
  },

  removeToDo(event) {
    let updatedToDoList = [...this.state.toDoList]; // making a copy of the toDoList
    updatedToDoList[event.target.id] = {
      ...updatedToDoList[event.target.id],
      bin: true,
    }; //getting the object of the new todolist and assigning it to a copy with just a changed bin property
    this.setState({
      toDoList: updatedToDoList, //everytime the button is cicked, updating the state of toDoList to the new updatedToDoList, with bin now true for that item
    });
  },

  completeToDo(event) {
    let updatedToDoList = [...this.state.toDoList]; // making a copy of the toDoList
    updatedToDoList[event.target.id] = {
      ...updatedToDoList[event.target.id],
      done: !updatedToDoList[event.target.id].done,
    }; //getting the object of the new todolist and assigning it to a copy with just a changed done property
    this.setState({
      toDoList: updatedToDoList, //everytime the button is cicked, updating the state of toDoList to the new updatedToDoList, with bin now true for that item
    });
  },

  render() {
    // below is rendering the header and todos components
    return (
      <div className="App">
        <Header
          newToDo={this.state.newToDo}
          update={this.updateNewToDo}
          addToList={this.addToList}
        />
        <Todos
          toDoListItems={this.state.toDoList}
          editToDo={this.editToDo}
          removeToDo={this.removeToDo}
          completeToDo={this.completeToDo}
        />
      </div>
    );
  },
});

export default App;

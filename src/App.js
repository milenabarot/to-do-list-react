import "./styles/App.css";
import Header from "./components/header";
import Todos from "./components/todos";
import TodoSettings from "./components/todoSettings";
import createReactClass from "create-react-class";
import { update } from "lodash";

const App = createReactClass({
  getInitialState() {
    return {
      newToDo: "",
      toDoList: [],
      id: 0,
      backgroundColor: { value: "white", label: "White" },
    };
  },

  // local storage- this is 'getting' the LIST from local storage, assigning it to data, and if there are any exisitng item, putting them into state to show them
  // to make sure remove function works, set the id to the lastId +1, so no objects have duplicate ids
  componentDidMount() {
    const data = localStorage.getItem("LIST");
    if (data) {
      const dataArray = JSON.parse(data);
      if (dataArray.length) {
        const lastId = dataArray[dataArray.length - 1].id;
        this.setState({
          toDoList: dataArray,
          id: lastId + 1,
        });
      }
    }
    const backgroundColorLocalStorage = localStorage.getItem("COLOR");
    if (backgroundColorLocalStorage) {
      const backgroundColorLocalStorageObject = JSON.parse(
        backgroundColorLocalStorage
      );
      this.setState({
        backgroundColor: backgroundColorLocalStorageObject,
      });
    }
  },

  // local storage- every time component updates the local storage is updated with the current todolist, and setting/assigning it to the key 'LIST'
  componentDidUpdate() {
    if (this.state.toDoList.length >= 15) {
      return window.alert("Too many items in the list");
    }
    localStorage.setItem("LIST", JSON.stringify(this.state.toDoList));
    localStorage.setItem("COLOR", JSON.stringify(this.state.backgroundColor));
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
      done: false,
      date: Date.now(),
    };
    //clearing the newToDo and setting the state with the newToDo in it
    this.setState({
      newToDo: "",
      toDoList: [...this.state.toDoList, newToDoObject],
      id: this.state.id + 1,
    });
  },

  // used findindex method here as well as in completetodo
  editToDo(event) {
    const updatedToDoListItemName = event.target.value; // getting the new value of the todo
    let updatedToDoList = [...this.state.toDoList]; // making a copy of the toDoList

    const index = updatedToDoList.findIndex((item) => {
      return Number(item.id) === Number(event.target.id);
    });
    updatedToDoList[index] = {
      ...updatedToDoList[index],
      name: updatedToDoListItemName,
    }; //getting the object of the new todolist and assigning it to a copy with just a changed name property

    this.setState({
      toDoList: updatedToDoList, //everytime a value is changed, updating the state of toDoList to the new updatedToDoList
    });
  },

  // filtered through updated to do list, and took out the item in the list that was cicked on using it's id and filter method
  removeToDo(event) {
    let updatedToDoList = [...this.state.toDoList]; // making a copy of the toDoList
    updatedToDoList = updatedToDoList.filter((item) => {
      return Number(item.id) !== Number(event.target.id);
    });

    this.setState({
      toDoList: updatedToDoList, //everytime the button is cicked, updating the state of toDoList to the new updatedToDoList, with bin now true for that item
    });
  },

  // used findIndex method to find the index of the object in the array that was clicked on. As remove function button was changing the position/index of the items in the array.
  // iterate through updatedtodolist with findindex and return only the item which id is equal to the event.target.id you clicked on
  completeToDo(event) {
    let updatedToDoList = [...this.state.toDoList]; // making a copy of the toDoList

    const index = updatedToDoList.findIndex((item) => {
      return Number(item.id) === Number(event.target.id);
    });
    updatedToDoList[index] = {
      ...updatedToDoList[index],
      done: !updatedToDoList[index].done,
    }; //getting the object of the new todolist and assigning it to a copy with just a changed done property

    this.setState({
      toDoList: updatedToDoList, //everytime the button is cicked, updating the state of toDoList to the new updatedToDoList, with done now true for that item
    });
  },

  // clearing the to do list, setting it equal to empty array onClick
  clearToDos(event) {
    this.setState({
      toDoList: [],
      id: 0,
    });
  },

  // adding a new item to the todolist array when press enter key
  onNewToDoKeyDown(event) {
    if (event.keyCode === 13) {
      this.addToList();
    }
  },

  // event that changes the background color of app
  handleChangeBackgroundColor(backgroundColor) {
    this.setState({
      backgroundColor,
    });
  },

  render() {
    // below is rendering the header and todos components
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor.value }}
      >
        <Header
          newToDo={this.state.newToDo}
          update={this.updateNewToDo}
          addToList={this.addToList}
          clearToDos={this.clearToDos}
          toDoList={this.state.toDoList}
          onNewToDoKeyDown={this.onNewToDoKeyDown}
        />
        <Todos
          toDoListItems={this.state.toDoList}
          editToDo={this.editToDo}
          removeToDo={this.removeToDo}
          completeToDo={this.completeToDo}
        />
        <TodoSettings
          changeBackgroundColor={this.handleChangeBackgroundColor}
          backgroundColor={this.state.backgroundColor}
        />
      </div>
    );
  },
});

export default App;

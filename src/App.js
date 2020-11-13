import "./App.css";
import Header from "./components/header";
import createReactClass from "create-react-class";

const App = createReactClass({
  getInitialState() {
    return {
      shouldShowHeader: true,
      title: "To Do List",
    };
  },
  toggleHeader() {
    // this changes the state of the shouldShowHeader property to the opposite of what it is
    this.setState({
      shouldShowHeader: !this.state.shouldShowHeader,
    });
  },
  changeTitle(event) {
    // this is called when input field is altered, onChanged triggered, which calls this and makes the title equal to the knew value. Which then changes the value of header title prop
    this.setState({
      title: event.target.value,
    });
  },
  render() {
    // below is tenary operator that conditionally renders header when button is clicked
    return (
      <div className="App">
        {this.state.shouldShowHeader ? (
          <Header
            title={this.state.title}
            subtitle="What do you want to do today?"
          />
        ) : null}
        <button onClick={this.toggleHeader}>Click me</button>
        <input
          onChange={this.changeTitle}
          type="text"
          value={this.state.title}
        />
      </div>
    );
  },
});

export default App;

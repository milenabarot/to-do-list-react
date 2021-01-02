import "../styles/todosettings.css";
import Select from "react-select";

const TodoSettings = (props) => {
  const options = [
    { value: "rgb(197, 227, 245, 0.3)", label: "Blue" },
    { value: "rgba(255, 215, 219,0.5)", label: "Pink" },
    { value: "rgb(150, 202, 162, 0.3)", label: "Green" },
    { value: "white", label: "White" },
  ];

  return (
    //added a new value of background color into the inital state in app.js which controls the value of the select in here
    // using the react select library to style the select tag, added options array which is passed in to select, classNamePrefix allows many different classnames to be styled under it.
    // this library handles the event method of onchange in the background
    <div className="selectArea">
      <label className="selectBackgroundColor" htmlFor="backgroundColor">
        Choose background colour
      </label>
      <Select
        options={options}
        value={props.backgroundColor}
        onChange={props.changeBackgroundColor}
        classNamePrefix="selectDropdown"
        isSearchable={false}
        autoFocus={false}
      />

      {/*  old code before added in react select library to style select dropdown
      <select
        className="selectDropDown"
        onChange={props.changeBackgroundColor}
        name="backgroundColor"
        id="backgroundColor"
        value={props.backgroundColor}
      >
        <option value="rgb(197, 227, 245, 0.3)">Blue</option>
        <option value="rgba(255, 215, 219)">Pink</option>
        <option value="rgb(150, 202, 162)">Green</option>
        <option value="white">White</option>
      </select> */}
    </div>
  );
};

export default TodoSettings;

const TodoSettings = (props) => {
  return (
    //added a new value of background color into the inital state in app.js which is controls the value of the select in here
    <>
      <label htmlFor="backgroundColor">Select background colour</label>
      <select
        onChange={props.changeBackgroundColor}
        name="backgroundColor"
        id="backgroundColor"
        value={props.backgroundColor}
      >
        <option value="rgb(197, 227, 245, 0.3)">Blue</option>
        <option value="rgba(255, 215, 219)">Pink</option>
        <option value="rgb(150, 202, 162)">Green</option>
        <option value="white">White</option>
      </select>
    </>
  );
};

export default TodoSettings;

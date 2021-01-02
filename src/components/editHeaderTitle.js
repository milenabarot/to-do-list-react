function EditHeaderTitle(props) {
  return (
    <div className="headerTitle">
      <input
        type="text"
        value={props.headerTitle}
        onChange={props.updateHeaderTitle}
      />
    </div>
  );
}
export default EditHeaderTitle;

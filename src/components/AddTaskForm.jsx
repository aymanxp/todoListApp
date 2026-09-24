

const AddTask = () => {
  return (
    <form>
      <input type="text" name="taskTitle" placeholder="Title" required /><br />
      <input type="text" name="taskDescription" placeholder="Description" required /><br />
      <button type="submit">+Add</button>
    </form>
  );
}


export default AddTask;

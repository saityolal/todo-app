function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );

  const todos = [
    {
      id: 1,
      description: "Learn React",
      done: false,
      targetDate: targetDate,
    },
    {
      id: 2,
      description: "Learn Angular",
      done: false,
      targetDate: targetDate,
    },
    {
      id: 3,
      description: "Learn Vue",
      done: false,
      targetDate: targetDate,
    },
  ];
  return (
    <div className="container">
      <h1>
        <i>List of things to do.</i>
      </h1>
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Descripcion</td>
            <td>Is done?</td>
            <td>Target Date</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodosComponent;

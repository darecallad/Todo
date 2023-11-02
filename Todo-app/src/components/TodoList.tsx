import useTodo from "../hooks/useTodo";

const todolist = () => {
  const { data: todos, error, isLoading } = useTodo();

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <div className="spinner-border"></div>;
  return (
    <>
      <ul className="list-group">
        {todos?.map((t) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={t.id}
          >
            {t.title}
            <button className="btn btn-outline-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default todolist;

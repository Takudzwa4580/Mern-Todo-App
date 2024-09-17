export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function (todo) {
                return <div className="container col-4">
                    <h1>{ todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button className="btn">{todo.completed == true ? "Completed" : " Mark as Completed"}</button>
                </div>
            })}
        </div>
    )
}
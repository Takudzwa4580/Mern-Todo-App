export function CreateTodo() {
    return (
        <div className="card">
            <div className="card-body ">
                <input className="form-control m-1" type="text" placeholder="title" />
                <input className="form-control m-1" type="text" placeholder="description" />
                <button className="btn btn-light">Add a todo</button>
            </div>
        </div>
    )
}
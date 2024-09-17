import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:3001/todos");
        setTodos(response.data.todos); // Assuming the response data has a 'todos' property
      } catch (error) { // Changed from 'err' to 'error'
        setError(error.message); // Use the 'error' variable here
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <div className="container col-5">Loading...</div>;
  if (error) return <div className="container col-5">Error: {error}</div>;

  return (
    <div className="container col-5">
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;

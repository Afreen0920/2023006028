import "./App.css";
import Home from "./pages/Home";
import './App.css'

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notification Dashboard</h1>

      <div>
        <h3>New Assignment Uploaded</h3>
        <button>Mark Read</button>
        <button>Delete</button>
      </div>

      <hr />

      <div>
        <h3>Exam Schedule Released</h3>
        <button>Mark Read</button>
        <button>Delete</button>
      </div>

      <hr />

      <div>
        <h3>Fee Payment Reminder</h3>
        <button>Mark Read</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default App;
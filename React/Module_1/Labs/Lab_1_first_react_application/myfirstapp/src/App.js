
import './App.css';

function App() {
  const currDate = new Date();
  return (
    <div className="App">
      <h1>IBM React Course</h1>
      <h2>It is  {currDate.toLocaleDateString()} and the time is {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;

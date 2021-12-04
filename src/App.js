import './App.css';
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(fibonacci(inputs.k));
  }
  return (
    <div className="App">

        <form onSubmit={handleSubmit}>
          <label for="k">Podaj k: </label>
          <input type="number" min="0" max="40" 
          name="k" value={inputs.k || ""} onChange={handleChange} />
          <input type="submit" value="Oblicz" />
        </form>
        
    </div>
  );
}

function fibonacci(k) {
  if (k==0) return 0;
  if (k==1) return 1;
  return fibonacci(k-1)+fibonacci(k-2);
}

export default App;
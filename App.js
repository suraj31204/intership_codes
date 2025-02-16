import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';




function App() {
  const[data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.log("Error fetching data", error))
 }, []);
  

  return (
    <div className="App">
      
    
     <table>
      
      <thead>
        <tr>
          <th>Submitted papers</th>
          <th>View</th>
          <th>Publish</th>
        </tr>
      </thead>

      <tbody>
       {data.map((val, i) => (
        <tr key={i}>
         <td>{val.paper_title}</td>
         <td><a href="view">view</a></td>
         <td><button>Publish</button></td>
        </tr>
       ))}
     </tbody>


     </table>

    </div>
  );
}

export default App;

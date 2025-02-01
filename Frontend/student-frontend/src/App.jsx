import  { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  
  const searchStudents = async (query) => {
    if (query.length >= 3) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/students?name=${query}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    } else {
      setResults([]);
    }
  };

  
  const debouncedSearch = debounce(searchStudents, 300);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Student Search</h1>
      <input
        type="text"
        placeholder="Search for a student (min 3 characters)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="dropdown">
          {results.map((student) => (
            <li
              key={student.rollNumber}
              onClick={() => setSelectedStudent(student)}
            >
              {student.name}
            </li>
          ))}
        </ul>
      )}
      {selectedStudent && (
        <div className="student-details">
          <h2>Selected Student</h2>
          <p>Name: {selectedStudent.name}</p>
          <p>Class: {selectedStudent.class}</p>
          <p>Roll Number: {selectedStudent.rollNumber}</p>
        </div>
      )}
    </div>
  );
}

export default App;
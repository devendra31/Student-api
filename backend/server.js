const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


const students = JSON.parse(
  fs.readFileSync(path.join(__dirname, "students.json"), "utf-8")
);


app.get("/api/students", (req, res) => {
  const searchQuery = req.query.name?.toLowerCase() || "";
  const results = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchQuery)
    )
    .slice(0, 5); 
  res.json(results);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
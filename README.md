This is a Single-Page Application (SPA) built with React.js for the frontend and a RESTful API using Node.js and Express.js for the backend.
The application allows users to search for students by name, with lazy loading and dynamic dropdown updates.
The backend serves student data from a local JSON file.
Search Bar: Users can search for students by typing at least 3 characters.
Lazy Loading: The search only triggers after 3 characters are typed.
Dynamic Dropdown: Displays up to 5 matching students in a dropdown list.
Student Details: Displays the full details of a selected student.
Responsive Design: Works on both mobile and desktop views.
Debounce: Optimizes search efficiency by delaying API calls.

How It Works
The user types at least 3 characters in the search bar.
The frontend sends a request to the backend API with the search query.
The backend filters the student data and returns up to 5 matching students.
The frontend displays the results in a dropdown list.
When a student is selected, their full details are displayed on the screen.

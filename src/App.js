import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';

// Import Stylesheet
import './styles/global.css';


import logo from './logo.svg';
// import '../styles/global.css';
import Header from './components/Header';
import Courses from './components/Courses';


function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;


// const [courses, setCourses] = useState([]);
//   useEffect(() => {
//      fetch('/api/courses')
//         .then((response) => response.json())
//         .then((data) => {
//            console.log(data);
//            setCourses(data);
//         })
//         .catch((err) => {
//            console.log(err.message);
//         });
//   }, []);
//   return (
//     <div className="App">
//         {courses.map(course => <p>{course.title}</p>)}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//     </div>
//   );
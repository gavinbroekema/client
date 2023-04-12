import { React, useState, useEffect } from "react";

import Header from "./Header";
import CourseList from "./CourseList";


export default function Courses(props) {
  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);

  
  // Fetch courses data when the Courses component is rendered
  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        if(activeFetch) {
          setCourses(data);
          setLoading(false);
        }
      });
      return () => {activeFetch = false};
  }, [loading]);



  return (
    <>
      <Header />
      {
        (loading) 
        ? <p>Loading...</p>
        : <CourseList data={courses}/>
      }
     
    </>
  )
}
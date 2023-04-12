import React from 'react';
import Course from './Course';

export default function CourseList(props) {
  const results = props.data;

  let courses;
  if(results.length > 0) {
    courses = results.map(course => <Course title={course.title} description={course.description} key={course.id} />);
  } else {
    courses = <p>No Courses</p>
  }
  return(
    <ul className="course-list">
      {courses}
    </ul> 
  );
}

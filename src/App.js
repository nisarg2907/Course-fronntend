import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const CourseCard = ({ course }) => {
  const { id, author, name, price } = course;

  return (
    <div className="course-card">
      <div>hii</div>
      <h3>{name}</h3>
      <p>Author: {author}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="App">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default App;

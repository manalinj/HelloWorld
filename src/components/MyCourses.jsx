import React, { useState } from 'react';
import './MyCourses.css';

const initialCourses = [
  {
    id: 1,
    title: 'Build Text to image SaaS App in React JS',
    earnings: '$150',
    students: 25,
    status: true,
    thumbnail: 'https://via.placeholder.com/80x50', // replace with real image
  },
  {
    id: 2,
    title: 'Build Text to image SaaS App in React JS',
    earnings: '$100',
    students: 28,
    status: false,
    thumbnail: 'https://via.placeholder.com/80x50',
  },
  {
    id: 3,
    title: 'Build Text to image SaaS App in React JS',
    earnings: '$50',
    students: 22,
    status: true,
    thumbnail: 'https://via.placeholder.com/80x50',
  },
  {
    id: 4,
    title: 'Build Text to image SaaS App in React JS',
    earnings: '$200',
    students: 8,
    status: true,
    thumbnail: 'https://via.placeholder.com/80x50',
  },
  {
    id: 5,
    title: 'Build Text to image SaaS App in React JS',
    earnings: '$250',
    students: 15,
    status: true,
    thumbnail: 'https://via.placeholder.com/80x50',
  },
];

const MyCourses = () => {
  const [courses, setCourses] = useState(initialCourses);

  const toggleStatus = (id) => {
    const updated = courses.map((course) =>
      course.id === id ? { ...course, status: !course.status } : course
    );
    setCourses(updated);
  };

  return (
    <div className="my-courses-container">
      <h2>My Courses</h2>
      <div className="table">
        <div className="table-header">
          <span>All Courses</span>
          <span>Earnings</span>
          <span>Students</span>
          <span>Course Status</span>
        </div>
        {courses.map((course) => (
          <div className="table-row" key={course.id}>
            <div className="course-info">
              <img src={course.thumbnail} alt="thumbnail" />
              <span>{course.title}</span>
            </div>
            <span>{course.earnings}</span>
            <span>{course.students}</span>
            <div className="course-status">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={course.status}
                  onChange={() => toggleStatus(course.id)}
                />
                <span className="slider round"></span>
              </label>
              <span className="status-label">
                {course.status ? 'Live' : 'Private'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;

// src/components/CoursesOverview.jsx
import React from 'react';
import './CourseOverview.css';

const cards = [
  {
    title: 'Add Course',
    description: 'Add new courses to your teaching dashboard.',
    image: 'https://source.unsplash.com/400x300/?classroom',
    button: 'Add Now',
    link: '/courses/add'
  },
  {
    title: 'My Courses',
    description: 'View and manage your courses.',
    image: 'https://source.unsplash.com/400x300/?books',
    button: 'View Courses',
    link: '/courses/my'
  },
  {
    title: 'Student Enrollment',
    description: 'See who has enrolled in your courses.',
    image: 'https://source.unsplash.com/400x300/?students',
    button: 'Check Enrollment',
    link: '/courses/enrolled'
  }
];

const CoursesOverview = () => {
  return (
    <div className="courses-overview">
      <h2>Courses Overview</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-body">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} className="btn">{card.button}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesOverview;

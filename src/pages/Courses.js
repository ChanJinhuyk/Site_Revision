import React from 'react';

const Courses = () => {
    const courseList = [
        { id: 1, name: 'Programmation en Python' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'CSS' },
        { id: 4, name: 'JavaScript' },
        { id: 5, name: 'Insertion professionnelle' },
        { id: 6, name: 'T.E.F' },
        { id: 7, name: 'Réseau informatique' },
        { id: 8, name: 'S.E' },
        { id: 9, name: 'S.I' },
        { id: 10, name: 'Architecture des ordinateurs' },
    ];

    return (
        <div>
            <h1>Liste des Cours</h1>
            <ul>
                {courseList.map(course => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;
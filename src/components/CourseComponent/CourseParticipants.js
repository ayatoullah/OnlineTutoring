import React from 'react'
import './CourseParticipants.css';
import {course} from './courseItem.js'



const CourseParticipants = () => {
  const students = course.enrolledStudents;
  return (
    <div>
      <ul className='student-list-parent'>
        {students.map((student) => (
          <li className='student-list-item' key={student.studentId}>
            <img alt='student profile pic'src={student.profilePic} className='student-image'/>
            <p>{student.studentName}</p>
          </li>
         ))}
      </ul> 
    </div>
  )
}

export default CourseParticipants

import React from 'react'
import CourseNavbar from './CourseNavbar'
import './Courses.css';
import {course} from './course.js'

const Courses = () => {
  return (
      <div className='container'>
          <h1 className='child_1'>{course.courseName}</h1>
          <div className='child_2'>
            <p className='heading'>Course description</p>
            <p className='desc'>{course.courseDescription}</p>
          </div>
          
          <CourseNavbar course={course} />
      </div>
  )
}

export default Courses

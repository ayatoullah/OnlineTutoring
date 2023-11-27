import React from 'react'
import CourseNavbar from '../components/CourseComponent/CourseNavbar.js'
import './Course.css';
import {course} from '../components/CourseComponent/courseItem.js'

const Course = () => {
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

export default Course

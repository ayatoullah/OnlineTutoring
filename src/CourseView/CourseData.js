
import React, { useState } from 'react'
import './Courses.css';
import right_arrow from './right_arrow.svg';
import {course} from './course.js'



const CourseData = () => {
  const [showMaterial, setShowMaterial] = useState(false);
  const [showAssignment, setShowAssignment] = useState(false);
  
  return (
    <div className='course-materials-and-assignments'>
      <div className="materials-assignment-header">
        <img onClick={() => {
          setShowMaterial(!showMaterial);
          const iconElement = document.getElementsByClassName('arrow')[0];
          showMaterial? iconElement.style.transform = 'rotate(0deg)':iconElement.style.transform = 'rotate(90deg)';
        }}
          src={right_arrow} alt="arrow" className="arrow" />
        <p className='materials-assignment-heading'>Material</p>
      </div>
      {showMaterial ?
         <ul className='item-parent'>
         {course.courseMaterial.map((material) => (
           <li className='item-class' key={material.materialId}>{material.materialName}</li>
         ))}
        </ul> : null
      }
     


      <div className="materials-assignment-header">
        <img onClick={() => {
          setShowAssignment(!showAssignment);
          const iconElement = document.getElementsByClassName('arrow')[1];
          showAssignment? iconElement.style.transform = 'rotate(0deg)':iconElement.style.transform = 'rotate(90deg)';
        }} src={right_arrow} alt="arrow" className="arrow" />
        <p className='materials-assignment-heading'>Assignment</p>
      </div>
      {showAssignment ?
        <ul className='item-parent'>
          {course.courseAssignments.map((assignment) => (
            <li className='item-class' key={assignment.assignmentId}>{assignment.assignmentName}</li>
          ))}
        </ul> :null
      }
    </div>
  )
}

export default CourseData


import Course from './Course.js';
import './CourseList.css';
const CourseList = () => {
    return (
        <>
         <div className="courses-container">
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
            <Course/>
         </div>

        </>
    );
}
export default CourseList;
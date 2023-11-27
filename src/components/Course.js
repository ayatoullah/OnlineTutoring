import './Course.css';
import more from '../assets/icons/more.svg';
import {useNavigate} from 'react-router-dom';

const Course = () => {
    let navigate = useNavigate();
    const goToCourseDetails = () => navigate("/courses/coursedata");
    return(
        <>
            <div className="course-container">
                <div className="more">
                    <img src={more} alt="more"/>
                </div>
                <div className="course-info">
                    <div className="program">SIM1 AIDA1</div>
                    <div className="course">Enterprise Application Engineering</div>
                    <div className="semester">Winter Term 2023/24</div>
                </div>
                <div className="start" onClick={goToCourseDetails}>
                    Get Started
                </div>
            </div>
        </>
    );
}
export default Course;
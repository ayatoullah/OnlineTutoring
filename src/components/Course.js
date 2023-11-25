import './Course.css';
import more from '../assets/icons/more.svg';

const Course = () => {
    return(
        <>
            <div class="course-container">
                <div class="more">
                    <img src={more} alt="more"/>
                </div>
                <div class="course-info">
                    <div class="program">SIM1 AIDA1</div>
                    <div class="course">Enterprise Application Engineering</div>
                    <div class="semester">Winter Term 2023/24</div>
                </div>
                <div class="start">Get Started</div>
            </div>
        </>
    );
}
export default Course;
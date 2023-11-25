import StudentInfo from '../components/StudentInfo.js';
import CourseList from '../components/CourseList.js';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <>
            <div class="dashboard">
                <StudentInfo></StudentInfo>
                <CourseList></CourseList>
            </div>
        </>
    );
}
export default Dashboard;
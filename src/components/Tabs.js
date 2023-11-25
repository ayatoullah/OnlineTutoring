import Tab from './Tab.js';
import './Tabs.css';

const Tabs = () => {
    return (
        <>
            <div class="tabs">
                <Tab name="Dashboard"/>
                <Tab name="Courses"/>
            </div>
        </>
    );
}
export default Tabs;
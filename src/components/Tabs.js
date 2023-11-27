import Tab from './Tab.js';
import './Tabs.css';
import { NavLink, Outlet} from "react-router-dom";

const Tabs = () => {
    return (
        <>
            <div className="tabs">
                <NavLink to="" className="nav-link"><Tab name="Dashboard"/></NavLink>
                <Tab name="Courses"/>
                <Outlet/>
            </div>
        </>
    );
}
export default Tabs;
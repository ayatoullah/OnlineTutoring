import Tab from './Tab.js';
import './Tabs.css';
import DropDownList from './DropDownList.js';
import { NavLink, Outlet} from "react-router-dom";

const Tabs = () => {
    return (
        <>
            <div className="tabs">
                <NavLink to="" className="nav-link"><Tab name="Dashboard"/></NavLink>
                <DropDownList name="Courses"/>
                <Outlet/>
            </div>
        </>
    );
}
export default Tabs;
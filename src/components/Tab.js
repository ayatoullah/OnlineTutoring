// import { NavLink, Outlet} from "react-router-dom";
import './Tab.css';

const Tab = (props) =>  {
    return (
        <>
                <div className="tab">{props.name}</div>
        </>
    );
}
export default Tab;
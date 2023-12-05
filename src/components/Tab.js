// import { NavLink, Outlet} from "react-router-dom";
import './Tab.css';

const Tab = (props) =>  {
    return (
        <>
                <div className="tab">
                    <span>{props.name}</span>
                    <div className="dropdown-content">
                        <p>Hello World!</p>
                    </div>
                </div>
                
        </>
    );
}
export default Tab;
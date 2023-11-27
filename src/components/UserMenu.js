import './UserMenu.css';
import Avatar from '../assets/icons/avatar.jpg';
import Expand from '../assets/icons/expand.svg';

const UserMenu = () => {
    return (
        <>
            <div className="user-container">
                <div className="avatar">
                    <img src={Avatar} alt="your pic"/>
                </div>
                <div className="expand-arrow">
                    <img src={Expand} alt="user menu"/>
                </div>
            </div>
        </>
    );
}
export default UserMenu;
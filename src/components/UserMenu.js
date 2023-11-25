import './UserMenu.css';
import Avatar from '../assets/icons/avatar.jpg';
import Expand from '../assets/icons/expand.svg';

const UserMenu = () => {
    return (
        <>
            <div class="user-container">
                <div class="avatar">
                    <img src={Avatar} alt="your pic"/>
                </div>
                <div class="expand-arrow">
                    <img src={Expand} alt="user menu"/>
                </div>
            </div>
        </>
    );
}
export default UserMenu;
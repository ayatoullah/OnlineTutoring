import Logo from './Logo.js';
import Tabs from './Tabs.js';
import Icons from './UserMenu.js';
import './Header.css';
const Header = () => {
    return(
        <>
            <div class="header">
                <Logo />
                <Tabs />
                <Icons />
            </div>
        </>
    );
}
export default Header;
import './Logo.css';
import LogoImg from '../assets/icons/logo.svg';
const Logo = () => {
    return (
        <>
            <div className="logo">
                <img src={LogoImg} alt="logo"/>
            </div>
        </>
    );
}
export default Logo;
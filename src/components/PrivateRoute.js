import { AuthData } from './AuthWrapper';
import { Outlet, Navigate } from 'react-router-dom'
const PrivateRoute = ({component:Component, ...rest}) => {
    const {userData} = AuthData();
    return (
            userData?.isAuthenticated? <Outlet />:<Navigate to={{ pathname:'./login'}}/>
    );
}
export default PrivateRoute;
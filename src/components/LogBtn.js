import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeAccount } from '../../utils/userSlice';

const LogBtn = () => {
    const user = useSelector(store => store.account.user);

    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(removeAccount());
    }

    return user.isLoggedIn ? <button onClick={handleLogout} className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-md transition-all">Logout</button> : <Link to={"/login"} className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-md transition-all">Login</Link>
}

export default LogBtn;
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>Login
            <Link to={'/signup'}>Signup</Link>
        </div>
    )
}

export default Login
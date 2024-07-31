import { Navigate } from 'react-router-dom'

const Protected = ({children }) => {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to='/'/>
}

const RedirectIfAuthenticated = ({children}) => {
	const token = localStorage.getItem('token')
	return token ? <Navigate to ='/home'/> : children

}

export { ProtectedRoute, RedirectIfAuthenticated };
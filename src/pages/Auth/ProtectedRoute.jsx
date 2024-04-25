

/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ auth, children }) => {

    if (auth === false) {
        return <Navigate to={"/loginPage"} replace />;
    } else {
        return children ? children : <Outlet />;
    }
}

export default ProtectedRoute
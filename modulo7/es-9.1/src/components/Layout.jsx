import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
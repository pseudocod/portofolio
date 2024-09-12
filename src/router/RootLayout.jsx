import Navbar from "../components/navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <div className="mt-5">
            <Outlet/>
            </div>
        </>
    );
}
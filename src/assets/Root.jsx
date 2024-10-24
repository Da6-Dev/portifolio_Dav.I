import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx/Navbar";

function Root(){
    return( 
        <>
            <Navbar/>
            <Outlet />
        
        </>
    )
}

export default Root;
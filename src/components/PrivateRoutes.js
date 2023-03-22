import { Outlet,Navigate } from "react-router-dom";

function PrivateRoutes(){
    let auth=localStorage.getItem("admin")
    return(
auth==="authorised"? <Outlet/> :<Navigate to='/SignIn'/>
    )
}
export default PrivateRoutes;
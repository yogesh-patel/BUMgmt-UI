import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Loginpage from "views/LoginPage/LoginPage.jsx";

var indexRoutes 
if(localStorage.getItem('token')){
    indexRoutes = [{ path: "/dashboard", component: Dashboard }];
}
else{
    indexRoutes = [{ path: "/", component: Loginpage }];
}

export default indexRoutes;

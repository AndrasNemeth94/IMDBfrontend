import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutus/AboutUs";
import LogIn from "../pages/LogIn/LogIn";
const routes = [
  {
    path: "/",
    component: Home,
    getLang:null
  },
  {
    path: "/Aboutus",
    component: AboutUs,
    getLang:null
  },
  {
    path: "/Login",
    component: LogIn,
    getLang:null
  },
];
export default routes;

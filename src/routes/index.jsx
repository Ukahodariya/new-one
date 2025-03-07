import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Signup from "../components/form/signup";
import Footwear from "../components/footwaer";
import Men from "../components/men/men";
import Sport from "../components/sport";
import Women from "../components/women";
import ProductPage from "../components/productInformation";
import Cart from "../common/cart";



const router = createBrowserRouter([
    
    {
        path: "/Signup",
        element: <Signup/>,
    },
    {
        path: "/product",
        element: <ProductPage/>
    },
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/MEN",
                element: <Men/>
            },
            {
                path: "/WOMEN",
                element: <Women/>
            },
            {
                path: "/FOOTWEAR",
                element: <Footwear/>
            },
            {
                path: "/SPORT",
                element: <Sport/>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "*",
                element: <h1>Error: Page Not Found</h1>  // You can provide a better error page here
            }
        ],
    }
]);

export default router;

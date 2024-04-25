import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Shop from './Shop/Shop';
import SingleProduct from './Shop/SingleProduct';
import CartPage from './Shop/CartPage';
import SingleBlog from './Blog/SingleBlog';
import Contact from './ContactPage/Contact';
import About from './About/About';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';



const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/shop/:id",
        element:<SingleProduct/>
      },
     
      {
        path: "/blog/:id",
        element: <SingleBlog/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/cart-page",
        element:<PrivateRoute><CartPage/></PrivateRoute>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/sign-up",
    element:<Signup/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
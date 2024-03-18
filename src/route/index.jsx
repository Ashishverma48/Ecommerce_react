import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail.jsx";
import Category from "../pages/Category.jsx";
import SignUp from "../pages/SignUp.jsx";
import { Login } from "@mui/icons-material";
import LoginPage from "../pages/LoginPage.jsx";
import DashBoard from "../pages/DashBoard.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/category" element={<Category />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<DashBoard/>} />
    </Route>
  )
);

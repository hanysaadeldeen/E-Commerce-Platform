
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
// import CatTypes from "./components/Category/CatTypes";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/subComponents/Navbar";
import CatTypesChoosePage from "./components/Category/CatTypesChoose";
import UserAllOrdersPage from "./pages/userPage/UserAllOrdersPage";
import NavbarMoblie from "./components/subComponents/NavbarMoblie";
import UserLocationPage from "./pages/userPage/UserLocationPage";
import UserProfilePage from "./pages/userPage/UserProfilePage";
import UserAddNewAddressPage from "./pages/userPage/UserAddNewAddressPage";
import UserEditAdressPage from "./pages/userPage/UserEditAdressPage";
import AdminAllOrderPage from "./pages/adminPage/AdminAllOrderPage";
import AdminAllProductPage from "./pages/adminPage/AdminAllProductPage";
import AdminAddBrandPage from "./pages/adminPage/AdminAddBrandPage";
import AdminAddCategoyPage from "./pages/adminPage/AdminAddCategoyPage";
import AdminAddSubCategoyPage from "./pages/adminPage/AdminAddSubCategoyPage";
import AdminOrderDetailsPage from "./pages/adminPage/AdminOrderDetailsPage";
import AdminAddProductsPage from "./pages/adminPage/AdminAddProductsPage";
import ShopProductPage from "./pages/ShopProductPage";
import Footer from "./components/subComponents/Footer";
import ContactPage from "./pages/footer/ContactPage";
import PrivacyPage from "./pages/footer/PrivacyPage";
import ReturnProductPage from "./pages/footer/ReturnProductPage";
import AdminEditProductPage from "./pages/adminPage/AdminEditProductPage";
import AdminSpecificOrderPage from "./pages/adminPage/AdminSpecificOrderPage";
import AdminAddCouponpage from "./pages/adminPage/AdminAddCouponpage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import CodeVerify from "./pages/Auth/CodeVerify";
import UpdatePassword from "./pages/Auth/UpdatePassword";
import UserFavoritePage from "./pages/UserFavoritePage";
import ProtecetedRouterHook from "./Hook/Auth/ProtectedRoutehook";
import ProtectedRoute from "./pages/Auth/ProtectedRoute"
function App() {
  const [isUser, isAdmin] = ProtecetedRouterHook();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* for all */}
          <Route path="/" element={<HomePage />} />
          <Route path="/ShopProductPage" element={<ShopProductPage />} />
          <Route path="/Category" element={<CategoryPage />} />
          {/* <Route path="/Category/Types" element={<CatTypes />} /> */}
          <Route path="/Category/:id" element={<CatTypesChoosePage />} />
          <Route path="/Product/:id" element={<ProductPage />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/FavoritePage" element={<UserFavoritePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/CodeVerify" element={<CodeVerify />} />
          <Route path="/UpdatePassword" element={<UpdatePassword />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Privacy-Policy" element={<PrivacyPage />} />
          <Route path="/Return-Product" element={<ReturnProductPage />} />

          {/* for user */}
          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/order" element={<UserAllOrdersPage />} />
            <Route path="/user/location" element={<UserLocationPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/user/AddNewAddress" element={<UserAddNewAddressPage />} />
            <Route path="/user/editAdress/:id" element={<UserEditAdressPage />} />
          </Route>
          {/* for admin */}
          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="/admin/Allproduct" element={<AdminAllProductPage />} />
            <Route path="/admin/Allorder" element={<AdminAllOrderPage />} />
            <Route path="/admin/addBrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/addProduct" element={<AdminAddProductsPage />} />
            <Route path="/admin/EditProduct/:id" element={<AdminEditProductPage />} />
            <Route path="/admin/Addcategory" element={<AdminAddCategoyPage />} />
            <Route path="/admin/AddSubCategoy" element={<AdminAddSubCategoyPage />} />
            <Route path="/admin/AddCoupon" element={<AdminAddCouponpage />} />
            <Route path="/admin/orderInfo" element={<AdminOrderDetailsPage />} />
            <Route path="/admin/orderId/:id" element={<AdminSpecificOrderPage />} />
          </Route>






          {/* <Route path="/admin/DashBorad" element={<DashBorad />} /> */}

        </Routes>
        <Footer />
        <NavbarMoblie />
      </BrowserRouter>
    </>
  )
}

export default App

import { configureStore } from '@reduxjs/toolkit';
import category from "./CategorySlice"
import brandReducer from "./BrandSlice"
import subCategoryReducer from "./SubCategorySlice"
import productReducer from "./ProdctSlice"
import AuthReducer from "./AuthSlice"
import AddressReducer from "./AddressSlice"
import UserInfoReducer from "./UserInfoSlice"
import CartReducer from "./CartSlice"
import CheckOutReducer from "./CheckOutslice"
import AdminAllOrderReducer from "./AdminOrderSlice"
import ReviewReducer from "./ReviewSlice"
import CouponSlice from "./CouponSlice"
import WishListeReducer from "./WishlistSlice"

export const store = configureStore({
    reducer: {
        category: category,
        brand: brandReducer,
        subCategory: subCategoryReducer,
        product: productReducer,
        Auth: AuthReducer,
        Address: AddressReducer,
        UserInfo: UserInfoReducer,
        Cart: CartReducer,
        checkout: CheckOutReducer,
        AdminAllOrder: AdminAllOrderReducer,
        Review: ReviewReducer,
        Coupon: CouponSlice,
        wishLish: WishListeReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});
import { SCREEN_URL } from "../libs/constants";
import {
  ErrorsPage,
  HomePage,
  // LoginPage,
  // RegisterPage,
  AboutPage,
  BlogDetailPage,
  BlogPage,
  CartPage,
  CheckOutPage,
  ContactPage,
  ProductPage,
  ShopPage,
} from "../pages";

export const layoutRoutes = [
  {
    path: SCREEN_URL.HOME,
    component: HomePage,
    isHeader: true,
    isFooter: true,
    isRedirect: true,
    mode: "dark",
    title: "Home",
  },
  {
    path: SCREEN_URL.ABOUT,
    component: AboutPage,
    isHeader: true,
    isFooter: true,
    isRedirect: true,
    mode: "dark",
    title: "About",
  },
  {
    path: SCREEN_URL.BLOG_DETAIL,
    component: BlogDetailPage,
    isHeader: true,
    isFooter: true,
    isRedirect: true,
    mode: "dark",
    title: "Blog",
  },
  {
    path: SCREEN_URL.BLOG,
    component: BlogPage,
    isHeader: true,
    isFooter: true,
    isRedirect: true,
    mode: "dark",
    title: "Explore",
  },
  // {
  //   path: SCREEN_URL.LOGIN,
  //   component: LoginPage,
  //   isHeader: false,
  //   isFooter: true,
  //   isRedirect: true,
  //   mode: "light",
  //   title: "Login",
  // },
  // {
  //   path: SCREEN_URL.REGISTER,
  //   component: RegisterPage,
  //   isHeader: false,
  //   isFooter: true,
  //   isRedirect: true,
  //   mode: "light",
  //   title: "Register",
  // },
  {
    path: SCREEN_URL.CART,
    component: CartPage,
    isHeader: false,
    isFooter: true,
    isRedirect: false,
    mode: "light",
    title: "Cart",
  },
  {
    path: SCREEN_URL.CHECKOUT,
    component: CheckOutPage,
    isHeader: true,
    isFooter: false,
    isRedirect: true,
    title: "Checkout",
  },
  {
    path: SCREEN_URL.CONTACT,
    component: ContactPage,
    isHeader: false,
    isFooter: true,
    isRedirect: true,
    title: "Edit profile",
  },
  {
    path: SCREEN_URL.PRODUCT,
    component: ProductPage,
    isHeader: false,
    isFooter: false,
    isRedirect: false,
    title: "Product",
  },
  {
    path: SCREEN_URL.SHOP,
    component: ShopPage,
    isHeader: false,
    isFooter: false,
    isRedirect: false,
    title: "Shop",
  },
  {
    path: SCREEN_URL.ERRORS,
    component: ErrorsPage,
    isHeader: false,
    isFooter: false,
    isRedirect: false,
    mode: "dark",
    title: "404 Not Found",
  },
];
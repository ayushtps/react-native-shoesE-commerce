import Payment from '../component/Payment';
import ProductDetail from '../component/ProductDetail';
import SearchScreen from '../component/SearchScreen';
import Intro from '../screens/Auth/IntroSlide';
import Login from '../screens/Auth/Login';
import Registration from '../screens/Auth/Registration';
import CartList from '../screens/Main/Cart';
import Home from '../screens/Main/Home';
import MainStack, { AppDrawer, MainTab } from '../screens/Main/Navigator';
import Notification from '../screens/Main/Notification';
import Profile from '../screens/Main/Profile';
import WishList from '../screens/Main/WishList';
import { images } from './icons';
import { SCREENS } from './routes';

export const authStackNav = [
  {
    id: 1,
    name: SCREENS.INTRO,
    component: Intro,
  },
  {
    id: 2,
    name: SCREENS.REGISTER,
    component: Registration,
  },
  {
    id: 3,
    name: SCREENS.LOGIN,
    component: Login,
  },
  {
    id: 4,
    name: SCREENS.MAINSTACK,
    component: MainStack,
  },
];

export const mainStack = [
  {
    id: 1,
    name: SCREENS.MAiNTAB,
    component: MainTab,
  },
  {
    id: 2,
    name: SCREENS.PRODUCT_DETAILS,
    component: ProductDetail,
  },
  {
    id: 3,
    name: SCREENS.CARTLIST,
    component: CartList,
  },
  {
    id: 4,
    name: SCREENS.SEARCH_SCREEN,
    component: SearchScreen,
  },
  {
    id: 5,
    name: SCREENS.PAYMENT,
    component: Payment,
  },
  {
    id: 6,
    name: 'App',
    component: AppDrawer,
  },
];

export const mainTabNav = [
  {
    id: 1,
    title: SCREENS.HOME,
    component: Home,
    src:images.HOME_ICON,
  },
  {
    id: 2,
    title: SCREENS.WISHLIST,
    component: WishList,
    src: images.WISHLIST_ICON,
  },
  {
    id: 3,
    title: SCREENS.NOTIFICATION,
    component: Notification,
    src:images.NOTIFICATION_ICON,
  },
  {
    id: 4,
    title:SCREENS.PROFILE,
    component: Profile,
    src: images.PROFILE_ICON,
  },
];

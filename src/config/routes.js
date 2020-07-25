import {Navigation} from 'react-native-navigation';
import withRedux from './withRedux';
import {lazy} from 'react';

const Login = lazy(() => import('../containers/auth/Login'));
const Home = lazy(() => import('../containers/dashboard/Home'));

export const registerScreens = (store) => {
  const withReduxStore = withRedux(store);

  Navigation.registerComponentWithRedux('Login', withReduxStore(Login));
  Navigation.registerComponentWithRedux('Home', withReduxStore(Home));
};

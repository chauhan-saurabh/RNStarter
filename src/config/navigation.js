import {Navigation} from 'react-native-navigation';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Login',
        children: [
          {
            component: {
              id: 'Login',
              name: 'Login',
              options: {
                topBar: {
                  drawBehind: true,
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'Home',
        children: [
          {
            component: {
              id: 'Home',
              name: 'Home',
              options: {
                topBar: {
                  drawBehind: true,
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });

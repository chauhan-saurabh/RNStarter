import React, {createRef, PureComponent, Suspense} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Provider} from 'react-redux';

const withRedux = (store) => (WrappedComponent) => () => {
  class ReduxWrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.componentRef = createRef();
    }
    componentDidMount() {
      // do stuff while splash screen is shown
    }

    hasMethod(method) {
      return (
        this.componentRef &&
        this.componentRef.current &&
        this.componentRef.current[method] &&
        this.componentRef.current[method].apply
      );
    }

    onNavigationButtonPressed(...args) {
      if (this.hasMethod('onNavigationButtonPressed')) {
        this.componentRef.current.onNavigationButtonPressed(...args);
      }
    }

    // add other callbacks here in the same way as done with onNavigationButtonPressed above
    render() {
      return (
        <Provider store={store}>
          <Suspense
            fallback={
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator />
              </View>
            }>
            <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
          </Suspense>
        </Provider>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <ReduxWrapper {...props} forwardedRef={ref} />;
  });
};

export default withRedux;

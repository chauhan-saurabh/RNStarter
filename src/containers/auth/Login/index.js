import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {goHome} from '../../../config/navigation';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const {email, password} = this.state;
    return (
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <Text style={styles.loginText}>LOGIN</Text>
        <TextInput
          style={styles.email}
          value={email}
          onChangeText={(email) => this.setState({email})}
          placeholder={'Email'}
        />
        <TextInput
          style={styles.password}
          value={password}
          onChangeText={(password) => this.setState({password})}
          placeholder={'Password'}
        />
        <TouchableOpacity style={styles.loginButton} onPress={goHome}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  loginText: {fontSize: 40},
  email: {
    height: 45,
    width: '90%',
    borderWidth: 1,
    marginTop: 30,
    padding: 10,
  },
  password: {
    height: 45,
    width: '90%',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  loginButton: {
    height: 45,
    width: '50%',
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

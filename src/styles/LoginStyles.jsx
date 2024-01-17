import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 20,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginStyles;
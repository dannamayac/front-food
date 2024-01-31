import { StyleSheet } from 'react-native';
import GlobalStyles from './GlobalStyles';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  loginMessage: {
    color: 'white',
    width: '85%',
    fontSize: 20,
    marginBottom: 18,
    textAlign: 'center',
  },
  highlightText1: {
    color: GlobalStyles.colors.forestGreen,
    fontWeight: 'bold', 
  },
  highlightText2: {
    color: GlobalStyles.colors.lemonYellow,
    fontWeight: 'bold', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: GlobalStyles.colors.blueGreen,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: GlobalStyles.colors.paleBlue,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: GlobalStyles.colors.lemonYellow,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  loginButtonText: {
    color: GlobalStyles.colors.forestGreen,
    textAlign: 'center',
    fontSize: 17,
  },
  additionalOptionsContainer: {
    position: 'absolute',
    bottom: 35,
    width: '80%',
    justifyContent: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  registerText: {
    color: 'white',
  },
  registerButton: {
    color: GlobalStyles.colors.lemonYellow,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  lostPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lostPasswordText: {
    color: 'white',
  },
  lostPasswordButton: {
    color: GlobalStyles.colors.lemonYellow,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default styles;

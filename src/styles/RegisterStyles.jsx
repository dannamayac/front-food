import { StyleSheet } from 'react-native';
import GlobalStyles from './GlobalStyles';

const styles = StyleSheet.create({
  icon: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  iconText: {
    color: 'white',
    width:'85%',
    fontSize: 20,
    marginBottom: 18,
    textAlign: 'center',
  },
  highlightText1: {
    color: GlobalStyles.colors.lemonYellow,
    fontWeight: 'bold', 
  },
  highlightText2: {
    color: GlobalStyles.colors.forestGreen,
    fontWeight: 'bold', 
  },
  
  registerButtonText: {
    color: GlobalStyles.colors.forestGreen,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',  // Alinea verticalmente
    alignItems: 'center',      // Centra horizontalmente
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
  registerButton: {
    backgroundColor: GlobalStyles.colors.lemonYellow,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  registerButtonText: {
    color: GlobalStyles.colors.forestGreen,
    textAlign: 'center',
  },
  loginRedirectContainer: {
    position: 'absolute',
    bottom: 35,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginRedirectText: {
    color: 'white',
  },
  loginRedirectButton: {
    color: GlobalStyles.colors.lemonYellow,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});

export default styles;

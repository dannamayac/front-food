import { StyleSheet, Dimensions, Platform } from 'react-native';
import GlobalStyles from './GlobalStyles';

const { width, height } = Dimensions.get('window');

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light,
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginTop: 40,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5,
  },
  shadowContainer: {
    width: '50%', // Ajusta según tus necesidades
    marginBottom: 10,
    backgroundColor: GlobalStyles.colors.light, // Agrega un color de fondo
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardContainer: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  cardImage: {
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'transparent',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: GlobalStyles.colors.blueGreen,
  },
  cardExpiration: {
    fontSize: 14,
    fontWeight: 'regular',
    marginTop: 5,
    color: 'black',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
    color: GlobalStyles.colors.orange,
  },
  //BOTON PARA AGREGAR PRODUCTOS
  addButton: {
    position: 'absolute',
    bottom: 20, 
    right: 20, 
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: GlobalStyles.colors.lemonYellow,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    zIndex: 1,
  },
  //ESTILOS DE MODAL
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width - 40, // Ancho del modal
    padding: 20,
    backgroundColor: GlobalStyles.colors.lightBeige,
    borderRadius: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    color: GlobalStyles.colors.blueGreen,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: GlobalStyles.colors.forestGreen,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 13,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.lemonYellow,
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: "black",
    fontWeight: 'bold',
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.orange,
    padding: 10,
    borderRadius: 15,
    marginLeft: 10,
    alignItems: 'center',
  },
  modalCancelButtonText: {
    color: GlobalStyles.colors.white,
    fontWeight: 'bold',
  },
});

export default homeStyles;

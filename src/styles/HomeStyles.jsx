// HomeStyles.js
import { StyleSheet, Platform } from 'react-native';
import GlobalStyles from './GlobalStyles';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.light,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: GlobalStyles.colors.blueGreen,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -5,
  },
  shadowContainer: {
    width: '48%', // Ajusta según tus necesidades
    marginBottom: 20,
    backgroundColor: GlobalStyles.colors.light,
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
  cardDiscount: {
    fontSize: 14,
    marginTop: 5,
    color: 'black',
  },
});

export default HomeStyles;

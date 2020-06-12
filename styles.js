import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  allEventsWrapper: {
    marginTop: 10,
  },
  bottomButton: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'black',
    padding: 7,
  },
  bottomButtonText: {
    fontSize: 27,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    color: 'white',
  },
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  eventCategory: {

  },
  eventCategoryHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
    marginBottom: 4,
  },
  eventCategoryText: {
    fontSize: 19,
    marginLeft: 10,
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    textAlign: 'center',
    borderBottomWidth: 1,
    padding: 5,
  },
  onThisDay: {
    marginBottom: 10,
  },
  specificEventButton: {
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    fontFamily: 'serif'
  },
});

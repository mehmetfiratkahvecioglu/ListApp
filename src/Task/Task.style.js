import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  leftitems: {flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'},
  square: {
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  tasktext: {fontSize: 15, fontWeight: 'bold', maxWidth: '80%', marginLeft: 15},
  circle: {
    height: 12,
    width: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#55BCF6',
  },
});

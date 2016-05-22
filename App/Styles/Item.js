import { StyleSheet } from 'react-native';

const ItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },

  ratingView: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  ratingIcons: {
    flex: 1,
    flexDirection: 'row'
  },
  ratingIcon: {
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },

  titleView: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 1
  },
  title: {
    color: 'black',
    fontSize: 24,
    lineHeight: 28
  },
  subtitle: {
    color: '#D2D4D0',
    fontSize: 18,
    lineHeight: 28
  },

  imageView: {
    alignItems: 'center',
    paddingTop: 50,
    flex: 1
  },
  image: {
    height: 300,
    width: 300
  },

  headerView: {
    flexDirection: 'row',
    flex: 1
  },
  headerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  headerBack: {
    color: '#D2D4D0',
    fontSize: 18,
    lineHeight: 22,
    paddingLeft: 10,
    fontWeight: '400'
  }
});

export default ItemStyles;
import React, { useContext, useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { styles } from '../../../constants/Style';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS as colors } from '../../../constants/GlobalConstants';
import { title } from '../../../util/Functions';
import { REQUEST_URL } from '../../../constants/GlobalConstants';
import { AppContext } from '../AppContent';
const Header = ({ salon_id, image, name, address }) => {
  const { totalReviews, getTotalReviews, getAverageRating, averageRating } = useContext(AppContext);
  useEffect(() => {
    getTotalReviews(salon_id);
  }, []);

  useEffect(() => {
    getAverageRating(salon_id);
  }, []);


  return (
    <View style={styles.appHeader}>
      <ImageBackground source={{ uri: REQUEST_URL + image }} style={styles.loginHeaderImage} >
        <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.6)']} style={styles.alphaLinearGradient}>
          <View style={css.headerContainer}>
            <Text style={css.salonName}>{title(name)}</Text>
            <Text style={css.salonAddress}>{address}</Text>
            <View style={css.ratingContainer}>
              <View style={css.ratingContainer}>
                <AirbnbRating
                  isDisabled={true}
                  defaultRating={averageRating}
                  count={5}
                  size={18}
                  showRating={false}
                />
              </View>
              <Text style={css.totalRatings}>{`(${totalReviews} Reviews)`}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
};

const css = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  salonName: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  salonAddress: {
    color: colors.white,
    fontSize: 15,
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center'
  },
  iconStyle: {
    marginLeft: 5,
  },
  totalRatings: {
    marginLeft: 10,
    fontSize: 12,
    color: colors.white,
    marginTop: 2,
  }

});

export default Header;
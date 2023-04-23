import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ReviewInput from './ReviewInput';
import ReviewsList from './ReviewsList';
import { width } from '../../../constants/GlobalConstants';
import { AppContext } from '../AppContent';

const Reviews = ({ salon_id }) => {
  const { getReviews, reviews, totalReviews, getTotalReviews } = useContext(AppContext);

  useEffect(() => {
    getReviews(salon_id);
  }, []);

  useEffect(() => {
    getTotalReviews(salon_id);
  }, [])

  return (
    <View style={css.container}>
      <ReviewInput salon_id={salon_id} />
      <ReviewsList reviews={reviews} totalReviews={totalReviews} />
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    width: width,
  },


});
export default Reviews;
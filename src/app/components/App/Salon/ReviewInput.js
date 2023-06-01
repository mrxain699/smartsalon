import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AirbnbRating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {
  COLORS as colors,
  width,
  REQUEST_URL,
} from '../../../constants/GlobalConstants';
import {AppContext} from '../AppContent';
import {AlertModal} from '../../../UI/Modal';
import {GetUser} from '../../../api/AuthRequests';
const ReviewInput = ({salon_id}) => {
  const {
    reviewModal,
    setReviewModal,
    sendReview,
    getReviews,
    getTotalReviews,
    getAverageRating,
  } = useContext(AppContext);
  const [defaultRating, setDefaultRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [customerId, setCustomerId] = useState(0);
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    const getCustomerId = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        if (user_id !== null) {
          setCustomerId(user_id);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCustomerId();
  }, []);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const user = await GetUser(customerId, 'authapi', 'get', 'customer');
        if (user) {
          setUserImage(user.image);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getCustomer();
  }, [customerId]);

  const submitReview = async () => {
    await axios
      .get(`http://192.168.10.8:3000/predict`, {
        params: {text: review},
      })
      .then(response => {
        const prediction = response.data.prediction;

        const parsedPrediction = parseInt(prediction, 10);
        if (parsedPrediction === 0) {
          sendReview(review, rating, salon_id, customerId);
          getReviews(salon_id);
          getTotalReviews(salon_id);
          getAverageRating(salon_id);
          setDefaultRating(0);
          setReview('');
        } else {
          alert(
            'Review is not added because Your message contains inappropriate language. Please refrain from using offensive words',
          );
          setDefaultRating(0);
          setReview('');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={css.reviewInputContainer}>
      <AlertModal
        animationType={'fade'}
        visible={reviewModal}
        transparent={true}
        type="success"
        title="Success"
        message="Your Review has been submitted"
        btn={'Done'}
        onPress={() => setReviewModal(false)}
      />
      <View style={css.ratingContainer}>
        <Text style={css.reviewsTitle}>Write your Review</Text>
        <View style={css.ratings}>
          <AirbnbRating
            defaultRating={defaultRating}
            count={5}
            size={18}
            showRating={false}
            onFinishRating={value => setRating(value)}
          />
        </View>
      </View>
      <View style={css.reviewContainer}>
        <View style={css.userImage}>
          <Image source={{uri: REQUEST_URL + userImage}} style={css.image} />
        </View>
        <View style={css.reviewInput}>
          <TextInput
            placeholder="Leave your experience..."
            placeholderTextColor={colors.grey200}
            value={review}
            style={css.input}
            onChangeText={text => setReview(text)}
          />
        </View>
      </View>
      <View style={css.reviewBtn}>
        <LinearGradient
          colors={[colors.orange100, colors.orange]}
          start={{x: 0.5, y: 0}}
          end={{x: 1, y: 1}}
          style={css.linearButton}>
          <Pressable onPress={() => submitReview()}>
            <Text style={[css.btnText, {color: colors.white}]}>Post</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <View style={css.divider}></View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    width: width,
  },
  reviewInputContainer: {
    width: width,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  divider: {
    borderBottomColor: colors.grey100,
    borderBottomWidth: 0.5,
    width: '100%',
    marginTop: 15,
    height: 1,
  },
  ratingContainer: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: 50,
    alignItems: 'center',
  },
  reviewsTitle: {
    fontSize: 14,
    marginTop: 2,
    color: colors.grey100,
  },
  ratings: {
    display: 'flex',
    paddingRight: 25,
  },
  reviewContainer: {
    width: width,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    overflow: 'hidden',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  reviewInput: {
    flexGrow: 1,
    paddingRight: 20,
    paddingLeft: 10,
  },
  input: {
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: colors.grey500,
    marginRight: 10,
    marginTop: 5,
    fontSize: 14,
    color: colors.black,
    display: 'flex',
    flexWrap: 'wrap',
  },
  reviewBtn: {
    width: width,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  linearButton: {
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 8,
    marginRight: 20,
    color: colors.white,
    marginTop: -5,
  },
  btnText: {
    fontSize: 18,
  },
});
export default ReviewInput;

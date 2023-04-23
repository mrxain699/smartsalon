import React, { useEffect, useState , useContext} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS as colors, REQUEST_URL, width } from '../../../constants/GlobalConstants';
import { AirbnbRating } from 'react-native-ratings';
import { getFormatedDate, getFormatedTime } from '../../../util/Functions';
import { title } from '../../../util/Functions';
import { AppContext } from '../AppContent';
import Loader from '../../../UI/Loader';

const ReviewListItem = ({ item }) => {
    var get_date = item.datetime.toString();
    var date_arr = get_date.split(/[- :]/);
    let date = new Date(date_arr[0], date_arr[1] - 1, date_arr[2], date_arr[3], date_arr[4], date_arr[5])
    const formatted_date = getFormatedDate(date, "DD/MM/YYYY");
    const time = getFormatedTime(date);
    


    return (
        
        <View style={css.itemContainer}>
            <View style={css.itemHeader}>
                <View style={css.customerInfo}>
                    <View style={css.customerImage}>
                        <Image source={{uri:REQUEST_URL+item.image}} style={css.image} />
                    </View>
                    <View style={css.reviewDetail}>
                        <Text style={css.custromerName}>{item.name && title(item.name)}</Text>
                        <AirbnbRating
                            isDisabled={true}
                            defaultRating={item.rating}
                            count={5}
                            size={14}
                            showRating={false}
                        />
                    </View>
                </View>
                <Text style={css.reviewDate}>
                    {
                        `${formatted_date} ${time}`
                    }
                </Text>
            </View>
            <View style={css.itemBody}>
                <Text style={css.reviewText}>
                    {item.review}
                </Text>
            </View>
            <View style={css.divider}></View>
        </View>
    )
};


const ReviewsList = ({ reviews, totalReviews }) => {
    const {errorMessage} = useContext(AppContext);
    return (
        <View style={css.reviewListContainer}>
            <Text style={css.listTitle}>All Reviews {`(${totalReviews})`}</Text>
            {   
                reviews.length > 0 ?
                reviews.map((e, i) => (
                    <ReviewListItem key={i * i} item={e} />
                )) :
                errorMessage != '' ? <Text style={{color:colors.grey700}}>{errorMessage}</Text> :
                <Loader/>

            }
        </View>
    )
}

const css = StyleSheet.create({
    reviewListContainer: {
        width: width,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    listTitle: {
        fontSize: 16,
        color: colors.grey700,
    },
    itemContainer: {
        width: width,
        paddingRight: 10,
        paddingTop: 20,
    },
    itemHeader: {
        width: width,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    customerInfo: {
        flexDirection: 'row',
    },
    customerImage: {
        width: 60,
        height: 60,
        borderRadius: 100,
        overflow: 'hidden',
        marginRight: 10,
        backgroundColor:'#000',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    reviewDetail: {
        paddingTop: 10,
    },
    custromerName: {
        color: colors.black,
        fontSize: 16,

    },
    reviewDate: {
        marginRight: 20,
        fontSize: 13,
        color: colors.grey700,
        marginTop: 25,
    },
    itemBody: {
        width: width,
    },
    reviewText: {
        fontSize: 15,
        color: colors.grey700,
        marginTop: 8,
        marginHorizontal: 10,
        paddingRight: 10,
        textAlign: 'justify',
        display: 'flex',
        flexWrap: 'wrap'
    },
    divider: {
        borderBottomColor: colors.grey100,
        borderBottomWidth: 0.5,
        width: '100%',
        marginTop: 15,
        height: 1,
    },


});
export default ReviewsList;
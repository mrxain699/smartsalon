import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { styles } from '../../../constants/Style';
import { COLORS as colors, REQUEST_URL } from '../../../constants/GlobalConstants';
import { getSalonGallery } from '../../../api/SalonRequests';
import { ImageModal} from '../../../UI/Modal';
import Loader from '../../../UI/Loader';
const GalleryItems = ({ item }) => {
    const [modalImage, setModalImage] = useState('');
    const [visibility, setVisibility] = useState(false);

    return (
        <TouchableOpacity style={css.galleryItemContainer}
            onPress={() => {
                setModalImage(item.image);
                setVisibility(true);
            }}>
            <ImageModal
                transparent={true}
                visible={visibility}
                animationType="fade"
                image={modalImage}
                onPress={() => setVisibility(false)}

            />
            <Image source={{ uri: REQUEST_URL + item.image }} style={css.image} />
        </TouchableOpacity>


    )
}


const Gallery = ({ salon_id }) => {
    const [gallery, setGallery] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const gallery = async () => {
            try {
                const response = await getSalonGallery("gallery", "getImages", salon_id);
                if(response != 0){
                    setGallery(response);
                }
                else{
                    setError("No image exist in the gallery");
                }

            }
            catch (error) {
                console.log(error);
            }
        }
        gallery();
    }, []);

    return (
        <View style={styles.tabsComponentContainer}>

            <Text style={styles.tabsComponentTitle}>Gallery</Text>
            <View style={css.galleryContainer}>
                
                {
                    gallery.length > 0 ?
                    gallery.map((e, i) => (
                        <GalleryItems item={e} key={i * i} />
                    )):
                    error !== '' ? <Text style={{collor:colors.grey700, marginLeft:10,}}>{error}</Text> : 
                    <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                        <Loader/>
                    </View>
                }
            </View>

        </View>
    )
}

const css = StyleSheet.create({
    galleryContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    galleryItemContainer: {
        width: '48%',
        height: 150,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 10,

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },

    totalTypes: {
        fontSize: 13,
        color: colors.grey100,
    }
});
export default Gallery;
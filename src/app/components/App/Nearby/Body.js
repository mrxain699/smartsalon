import React, { useContext, useEffect, useState } from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import MapView, { enableLatestRenderer, PROVIDER_GOOGLE, Marker , Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { styles } from '../../../constants/Style';
import { API_KEY } from '../../../constants/GlobalConstants';
import { AppContext } from '../AppContent';
const { width, height } = Dimensions.get('window');

const Body = () => {
  enableLatestRenderer();
  Geocoder.init(API_KEY, { language: "en" });
  const { currentLocation, setCurrentLocation, gps, formatedAddress, setFormattedAddress } = useContext(AppContext);
  const [nearbySalons, setNearbySalons] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (info) => {
        let latitude = info.coords.latitude;
        let longitude = info.coords.longitude;
        setCurrentLocation({ latitude: latitude, longitude: longitude });
        getNearbySalons(latitude, longitude);
        Geocoder.from({ lat: latitude, lng: longitude })
          .then(json => {
            let addressComponent = json.results[0].formatted_address;
            setFormattedAddress(addressComponent);
          })
          .catch(err => {
            console.log("Geocode", err);
          })
      },
      error => {
        console.log("geolocation", error);
      },
      { enableHighAccuracy: true }
    );

  }, []);


  const getNearbySalons = (latitude, longitude) => {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=beauty_salon|hair_salon|men_salon|barber|salon&keyword=male|man|men&key=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNearbySalons(data.results);
      })
      .catch(error => console.error("Nearby", error));
  }


  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.02;
  return (
    <View style={[styles.appBody, { paddingVertical: 0, overflow: 'hidden' }]}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: width, height: '100%' }}
        showsUserLocation
        region={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
        }}
      >
        <Marker
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
          }}
          title="My Location"
          description="i am here now"
          image={require('../../../assets/images/marker.png')}
        />
      {
        nearbySalons.map((e, i)=>(
          <Marker
          coordinate={{
            latitude: e.geometry.location.lat,
            longitude: e.geometry.location.lng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO
          }}
          title={e.name}
          description={`${e.vicinity} \n ${e.rating ? "Rating "+ e.rating : ''}`}
          image={require('../../../assets/images/salon_64.png')}
          key={i * i}
        >
        
        </Marker>
        ))
      }

      
        
        
      </MapView>
    </View>
  )
};


const css = StyleSheet.create({
  bubbles:{
    padding:10,
    width:200,
    borderRadius:10,
    backgroundColor:'#fff',
  },
  txt:{
    color:'#000',
  }
})



export default Body;

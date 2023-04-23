import React, {useEffect, useState, useContext} from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Product from '../components/App/store/Product';
import {AppContext} from'../components/App/AppContent';
const ProductScreen = ({ navigation, route }) => {
    const {getSalonProducts} = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const salon = route.params.salon;


    useEffect(()=>{
            const getProducts = async () => {
                try {
                const response = await getSalonProducts(salon.id);
                if(Array.isArray(response)){
                    setProducts(response);
                }
                else{
                    console.log(response);
                }
            }
            catch (error) {
                console.log(response);
            }
            
        }
        getProducts();
       
    }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent={true} backgroundColor="black" />
      <Product navigation={navigation} route={route} products={products}/>
    </SafeAreaView>
  )
}

export default ProductScreen;

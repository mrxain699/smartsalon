import { StyleSheet } from "react-native";
import {width, height} from '../constants/GlobalConstants';
import {COLORS as color} from './GlobalConstants';

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:color.alpha,
    },
    container:{
        flex:1,
        backgroundColor:color.white,
    },
    slideContainer:{
        width:width,
        height:'100%'
    },
    slideImage:{
        height:height / 1.7,
        width, resizeMode:'cover',
    },
    slideTitle:{
        width:width,
        color:color.black,
        fontSize:22,
        fontWeight:'bold',
        marginTop:25,
        textAlign: 'center',
        paddingHorizontal:40,
    },
    slideSubTitle: {
        color:color.grey800,
        width:width,
        fontSize:15,
        marginTop:10,
        textAlign:'center',
        lineHeight:23,
        paddingHorizontal:50,
    },
    slideIndicatorContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:30,
    },
    slideIndicators:{
        height:8,
        width:8,
        backgroundColor:'grey',
        marginHorizontal:3,
        borderRadius:100,
    },
    activeIndicator:{
        backgroundColor:color.orange,
        height:8, width:35
    },
    slideFooter:{
        height:height * 0.18,
        justifyContent:'center',
        paddingHorizontal:20,
    },
    slideBtn:{
        flex:1,
        height:50,
        borderRadius:5,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    }, 
    loginHeader:{
        flex:2,
        overflow: 'hidden',
    },
    loginHeaderImage:{
        width:width,
        height:'100%',
        resizeMode:'cover',
    },
    alphaLinearGradient:{
        width:width,
        height:'100%',
    },
    loginForm:{
        flex:3,
        backgroundColor:color.white,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-15,
        paddingHorizontal:20,
        paddingBottom:15,
        
    },
    heading:{
        fontSize:28,
        color:color.black,
        textAlign:'center',
        marginTop:15,
    },
    headingBold:{
        fontWeight:'bold',
        fontSize:30,
        paddingHorizontal:30,
        marginTop:30,
    },
    subtitle:{
        fontSize:14,
        marginTop:4,
        textAlign:'center',
        color:color.grey50,
    },
    subtitleLight:{
        fontSize:15,
        lineHeight:20,
        paddingHorizontal:50,
        color:color.black
    },
    inputContainer:{
        marginVertical:20,
        alignItems:'center',
    },
    inputs:{
        backgroundColor:color.grey500,
        color:color.black,
        marginTop:20,
        borderRadius:50,
        paddingLeft:25,
        alignItems:'center',
        fontSize:16,
        width:'100%',
    },
    btn:{
        marginVertical:10,
        borderRadius:50,
        height:50,
        alignItems: 'center',
        justifyContent:'center',
        marginHorizontal:10,
    },
    btnText:{
        color:color.white,
        fontSize:18,
    },
    forgotPasswordText:{
        fontSize:14,
        textAlign:'center',
        marginTop:10,
        color:color.grey700,
    },
    conditionText:{
        textAlign:'center',
        fontSize:12,
        paddingHorizontal:30,
        lineHeight:20,
        color:color.grey800,
    },
    accountText:{
        textAlign:'center',
        marginTop:10,
        fontSize:14,
        color:color.grey50,
    },
    textBtn:{
        fontSize:14,
        color:color.orange,
    },
    modal: {
        flex: 1,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:color.alpha,
    },
    modalAlertBox:{
        width:'100%',
        backgroundColor:color.white,
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:40,
        alignItems:'center',
    },
    modalImageContainer:{
        width:70,
        height:70,
        borderWidth:4,
        borderColor:color.orange,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
    },
    modalImage:{
        width:'100%',
        height:'100%',
    },
    modalAlertTitle:{
        fontSize:20,
        textAlign:'center',
        color:color.black,
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingVertical:20
    },
    modalAlertMessage:{
        marginTop:5,
        paddingHorizontal:20,
        color:color.grey700,
        textAlign:'center',
        fontSize:16,
    },
    modalAlertBtn:{
        width:'100%',
        marginTop:40,
    },
    otpInputContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:70,
    },
    codeInputView:{
        width:45,
        height:45,
        backgroundColor:color.grey500,
        borderRadius:100,
        marginHorizontal:10,
        borderWidth:1,
        borderColor:color.grey500,
    },
    codeInput:{
        width:'100%',
        height:'100%',
        borderRadius:100,
        color:color.white,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        padding:0
    },
    otpTime:{
        textAlign:'center',
        marginTop:15,
        color:color.grey700
    },
    screenHeaderIconStyle:{
        marginHorizontal:20,
    },  
    appHeader:{
        flex:2,
        width:'100%',
        overflow:'hidden',
    },
    appBody:{
        flex:2,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginTop:-15,
        zIndex:1,
        backgroundColor:color.white,
        paddingVertical:20,
        
    },
    headerBar:{
        marginVertical:20,
        width:'100%',
        height:'100%',
        justifyContent: 'flex-end',
        paddingBottom:45,
        alignItems: 'center',
    },
    headerTitle:{
        color:color.white,
        fontWeight:'bold',
        fontSize:20,
    },
    searchInputContainer:{
        flexDirection:'row',
        height:40,
        marginTop:10,
        width:'85%',
        borderRadius:10,
        backgroundColor:color.white,
    },
    searchBtn:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
    },
    searchInput:{
        flex:1,
        color:color.grey800,
        fontWeight:'5Baba00', 
        fontSize:15,
        height:'100%',
        justifyContent: 'center',
        
    },
    tabBarStyle:{
        position:'absolute',
        bottom:0, 
        height:50,
    },
    nearbyListContainer:{
        paddingVertical:10,
    },
    titleConatiner:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:color.black,
    },
    viewBtnText:{
        fontSize:13,
        color:color.grey50,
        fontWeight:'bold',
    },
    listContainer:{
        paddingTop:20,
    },
    itemView:{
        width:'100%',
        height:150,
        backgroundColor:color.white,
        borderRadius:20,
        marginRight:20,
        elevation:5,
        shadowColor:'#000',
        overflow: 'hidden',
        marginTop:20,

    },
    error:{
        color:"#ff0004",
        fontSize:12,
        marginTop:5,
        alignSelf:'flex-start',
        marginLeft:20,
        
    },
    tabsComponentContainer: {
        width: width,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    tabsComponentTitle: {
        fontSize: 16,
        color: color.black,
    },

});


export {styles}; 
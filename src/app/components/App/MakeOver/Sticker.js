import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

class Sticker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item:{...props.item},
        }
    }

    sendStickerHandler(sticker){
        this.props.changeEditableSticker(sticker);
    }

  render() {
    return (
      <TouchableOpacity key={this.state.item.id * this.state.item.id} style={styles.stickerContainer} onPress={()=>this.sendStickerHandler(this.state.item.sticker)}>
            <Image source={this.state.item.sticker} style={styles.sticker}/> 
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    stickerContainer:{
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:5,
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'hidden',
        marginLeft:10,
        padding:10,
    },
    sticker:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default Sticker

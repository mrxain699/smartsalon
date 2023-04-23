import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, FlatList, Animated } from 'react-native';
import { stickers } from '../../../constants/GlobalConstants';
import Sticker from './Sticker';
import { COLORS as color } from '../../../constants/GlobalConstants';
import { PermissionModal } from '../../../UI/Modal';
import CustomIcon from '../../../UI/Icon';
import ImagePicker from 'react-native-image-crop-picker';
import ViewShot from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PinchGestureHandler,
    RotationGestureHandler,
    State,
} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const stateLabel = {
    0: "UNDETERMINED",
    1: "FAILED",
    2: "BEGAN",
    3: "CANCELLED",
    4: "ACTIVE",
    5: "END",
};

class MakeOver extends React.Component {

    panRef = React.createRef();
    rotationRef = React.createRef();
    pinchRef = React.createRef();
    viewShotRef = null;

    constructor(props) {
        super(props);

        this.state = {
            editableImage: null,
            editableSticker: null,
            rotateStatus: null,
            pinchStatus: null,
            panStatus: null,
            permissionAlert: false,
        }

        /* Pinching */
        this._baseScale = new Animated.Value(1);
        this._pinchScale = new Animated.Value(1);
        this._scale = Animated.multiply(this._baseScale, this._pinchScale);
        this._lastScale = 1;
        this._onPinchGestureEvent = Animated.event(
            [{ nativeEvent: { scale: this._pinchScale } }],
            { useNativeDriver: true }
        );

        /* Rotation */
        this._rotate = new Animated.Value(0);
        this._rotateStr = this._rotate.interpolate({
            inputRange: [-100, 100],
            outputRange: ['-100rad', '100rad'],
        });
        this._lastRotate = 0;
        this._onRotateGestureEvent = Animated.event(
            [{ nativeEvent: { rotation: this._rotate } }],
            { useNativeDriver: true }
        );

        /* Pan */
        this._translateX = new Animated.Value(0);
        this._translateY = new Animated.Value(0);
        this._lastOffset = { x: 0, y: 0 };
        this._onPanGestureEvent = Animated.event(
            [
                {
                    nativeEvent: {
                        translationX: this._translateX,
                        translationY: this._translateY,
                    },
                },
            ],
            { useNativeDriver: true }
        );
    }

    _onRotateHandlerStateChange = (event) => {
        this.setState({ rotateStatus: stateLabel[event.nativeEvent.oldState] + " => " + stateLabel[event.nativeEvent.state] })
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this._lastRotate += event.nativeEvent.rotation;
            this._rotate.setOffset(this._lastRotate);
            this._rotate.setValue(0);
        }
    };
    _onPinchHandlerStateChange = (event) => {
        this.setState({ pinchStatus: stateLabel[event.nativeEvent.oldState] + " => " + stateLabel[event.nativeEvent.state] })
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this._lastScale *= event.nativeEvent.scale;
            this._baseScale.setValue(this._lastScale);
            this._pinchScale.setValue(1);
        }
    };
    _onPanGestureStateChange = (event) => {
        this.setState({ panStatus: stateLabel[event.nativeEvent.oldState] + " => " + stateLabel[event.nativeEvent.state] })
        if (event.nativeEvent.oldState === State.ACTIVE) {
            this._lastOffset.x += event.nativeEvent.translationX;
            this._lastOffset.y += event.nativeEvent.translationY;
            this._translateX.setOffset(this._lastOffset.x);
            this._translateX.setValue(0);
            this._translateY.setOffset(this._lastOffset.y);
            this._translateY.setValue(0);
        }
    };

    handleCapture = async () => {
        try {
            if(this.state.editableSticker !== null ){
                const uri = await this.viewShotRef.capture();
                await CameraRoll.save(uri, { type: 'photo', album: 'My Album' });
                Toast.show({
                    type: 'success',
                    text1: 'Image download successfully',
                });
                this.setState({editableImage:null, editableSticker:null})
            }
            else{
                Toast.show({
                    type: 'error',
                    text1: 'No editable image found',
                });
            }
            
        } catch (error) {
            console.error('An error occurred while saving the image:', error);
        }
    };

    changeEditableSticker = (sticker) => {
        if(this.state.editableImage !== null){
            this.setState({ editableSticker: sticker });
        }
        else{
            Toast.show({
                type: 'error',
                text1: 'Please Upload your image',
            });
        }
        
    }

    setPermissionAlert = (status) => {
        this.setState({ permissionAlert: status })
    }

    onCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
            mediaType: 'photo',
        })
            .then(image => {
                this.setState({ editableImage: image.path });
            }).catch(error => {
                console.log(error);
            })
        this.setPermissionAlert(false);

    };

    onGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            mediaType: 'photo',
        })
            .then(image => {
                this.setState({ editableImage: image.path });
            })
            .catch(error => {
                console.log(error);
            })
        this.setPermissionAlert(false);
    };

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <View style={{ display: 'flex', flexDirection: 'row', marginRight: 15, }}>
                    <CustomIcon name="camera-outline" size={26} color={color.black} style={{ marginLeft: 15, marginTop: 5 }} onPress={() => this.setPermissionAlert(true)} />
                    <CustomIcon name="download-outline" size={26} color={color.black} style={{ marginLeft: 15, marginTop: 3 }} onPress={()=>this.handleCapture()}/>
                </View>

            ),
        });
    }


    render() {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <PermissionModal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.permissionAlert}
                        onPress={() => this.setPermissionAlert(false)}
                        onCamera={this.onCamera}
                        onGallery={this.onGallery}
                    />
                    <View style={styles.imageWrapper}>
                        <ViewShot ref={ref => this.viewShotRef = ref}>
                            <View style={styles.imageContainer}>
                                {
                                    this.state.editableImage ?
                                        <Image source={{ uri: this.state.editableImage }} style={styles.image} />
                                        :
                                        <Image source={require('../../../assets/images/default.png')} style={styles.image} />
                                }
                                {
                                    this.state.editableSticker &&
                                    <PanGestureHandler
                                        ref={this.panRef}
                                        onGestureEvent={this._onPanGestureEvent}
                                        onHandlerStateChange={this._onPanGestureStateChange}
                                    >

                                        <Animated.View style={[
                                            styles.editableStk,

                                        ]}>
                                            <RotationGestureHandler
                                                ref={this.rotationRef}
                                                simultaneousHandlers={this.pinchRef}
                                                onGestureEvent={this._onRotateGestureEvent}
                                                onHandlerStateChange={this._onRotateHandlerStateChange}>
                                                <Animated.View style={[
                                                    styles.editableStk,
                                                ]}>
                                                    <PinchGestureHandler
                                                        ref={this.pinchRef}
                                                        simultaneousHandlers={this.rotationRef}
                                                        onGestureEvent={this._onPinchGestureEvent}
                                                        onHandlerStateChange={this._onPinchHandlerStateChange}>


                                                        <Animated.View style={[ styles.editableStk,]} collapsable={false}>
                                                            <Animated.Image
                                                                style={[
                                                                    styles.editableStk,
                                                                    {
                                                                        transform: [
                                                                            { translateX: this._translateX },
                                                                            { translateY: this._translateY },
                                                                            { scale: this._scale },
                                                                            { rotate: this._rotateStr },
                                                                        ],
                                                                    }
                                                                ]}
                                                                source={this.state.editableSticker}
                                                            />
                                                        </Animated.View>

                                                    </PinchGestureHandler>
                                                </Animated.View>
                                            </RotationGestureHandler>
                                        </Animated.View>
                                    </PanGestureHandler>
                                }

                            </View>
                        </ViewShot>
                    </View>
                    <View style={styles.stickerWrapper}>
                        <FlatList
                            data={stickers}
                            renderItem={({ item }) => <Sticker item={item} changeEditableSticker={this.changeEditableSticker} />}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </GestureHandlerRootView>
        );
    }
}

export default MakeOver;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWrapper: {
        flex: 6,
        padding: 10,
        overflow: 'hidden',


    },
    stickerWrapper: {
        flex: 2,
        paddingVertical: 10,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 10,
        elevation: 5,
        borderWidth: 1,
        borderColor: color.grey500,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    editableStk: {
        width: 150,
        height: 150,
        position: 'absolute',
        top: 10,
        left: 55,
        
    }


});

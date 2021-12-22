import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import ImageDetail from '../ImageDetail/ImageDetail';

function ImageScreen(props) {
    return (
        <View>
            <Text style={styles.headerDesign}>Image Gallaria</Text>
            <ImageDetail title="Morning breakfast" imageSource={require('../assets/phone-1.jpg')} score='9'/>
            <ImageDetail title="Relax" imageSource={require('../assets/phn-2.jpg')} score='7'/>
            <ImageDetail title="capture" imageSource={require('../assets/phn-3.jpg')} score='6'/>

            <ImageDetail title="Phone demo" imageSource={require('../assets/phn-4.jpg')} score='8'/>
            <ImageDetail title="New Devices" imageSource={require('../assets/phn-5.jpg')} score='5'/>
            <ImageDetail title="Phone devices" imageSource={require('../assets/phn-6.jpg')} score='4'/>


        </View>
    );
}

const styles = StyleSheet.create({
    headerDesign : {
        flex : 1,
        fontSize: 30,
        marginLeft: 90,
        marginBottom: 20,
        color : 'red',
        justifyContent: 'center',

    }
});

export default ImageScreen;
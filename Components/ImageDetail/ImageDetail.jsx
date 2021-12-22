import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function ImageDetail(props) {
    return (
        <View>
            <View style={{
                width: "90%", maxHeight: 300
            }}>
                <Image source={props.imageSource} />
            </View>

            <Text style={styles.textDesign}>{props.title} </Text>

            <Text style={styles.textDesign2}>Image Score - {props.score} </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    imageDesign: {
        maxHeight: 500,
        width: '90%',

    },
    textDesign: {
        fontSize: 26,
        color:'white',
    },
    textDesign2: {
        fontSize: 20,
        color:'red',
    }
});

export default ImageDetail;
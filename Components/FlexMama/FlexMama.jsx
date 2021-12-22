import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FlexMama() {
    return (
        <View>
            <View style={styles.headerFlex}>
                <Text style={styles.headerFlexText}>Chill Flex-mama</Text>
            </View>
            <View style={styles.viewDesign}>
                <Text style={styles.boxDesign}>Chill</Text>
                <Text style={styles.boxDesign2}>Re</Text>
                <Text style={styles.boxDesign}>Mammaaa</Text>



            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    headerFlex: {
        
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerFlexText:{
        fontSize: 30,
        color: 'blue',
        marginVertical:30
    },
    viewDesign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 130,
        marginLeft: 10,
        marginRight: 10,

    },
    boxDesign: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'salmon',
        fontSize: 30,
        borderRadius: 7,
        padding: 5

    },
    boxDesign2: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderColor: 'black',
        position: 'relative',
        top: 100,
        backgroundColor: 'green', fontSize: 30,
        borderRadius: 7,
        padding: 5

    }
});

export default FlexMama;
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
let index =1;
function ColorScreen() {
    const [colors, setColors] = useState([]);

    return (
        <View style={{ marginTop: 50, marginLeft: 40, marginRight: 20,marginBottom:20 }}>
            <Text style={{ fontSize: 30, color: 'blue', margin: 10 }}>
                Random Color Plate
            </Text>
            <Button
                title='="Add a Color'
                onPress={() => setColors([...colors, randomColor()])}

            />
            {
                colors.map(color => <View key={index++} style={{ height: 100, width: 300, marginTop: 10, backgroundColor: color }} />)
            }
        </View>
    );
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`
}
export default ColorScreen;
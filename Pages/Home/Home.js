import React from 'react';
import { View, Text,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import ColorScreen from '../../Components/ColorScreen/ColorScreen';
import GoalInput from '../../Components/GoalInput/GoalInput';
import ImageScreen from '../../Components/ImageScreen/ImageScreen';



function Home() {
    return (
         <ScrollView>
            
            <GoalInput></GoalInput>

            <TouchableOpacity onPress={() => console.log("Ami Touch press mammmmmmmmmmmmmmmmmmmmmaaaaaaaaaaaaaaa")} style={{margin:30}}>
                <Text>
                    Touch me & feel now
                </Text>
                <Text>
                    Cool man & drink hot copy now
                </Text>
                <Text>
                    one touch & more clg
                </Text>
            </TouchableOpacity>
            <ImageScreen />

            
            
             
         </ScrollView>
    );
}

export default Home;
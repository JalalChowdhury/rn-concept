import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function GoalItem(props) {

    return (

       
            <TouchableOpacity>
                <Text style={{ margin: 10, padding: 10, backgroundColor: '#f0f2f5' , borderRadius:10}}>{props.show}</Text>
                
            </TouchableOpacity>
        
    );
}

export default GoalItem;
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from '../GoalItem/GoalItem';

function GoalInput() {

    const [enterInput, setEnterInput] = useState(' ');
    const [addInput, setAddInput] = useState([]);

    const handleInput = (enteredText) => {
        setEnterInput(enteredText);
    };

    const handleAddInput = () => {
        // setAddInput([...addInput, { id: Math.random().toString(), value: enterInput }]);
        setAddInput([...addInput, enterInput]);
        console.log(addInput);

    }

    return (
        <View style={{ paddingTop: 50, paddingLeft: 20, paddingRight: 20, paddingBottom: 30 }}>
            <View>
                <Text style={{ fontSize: 25, justifyContent: 'center', marginBottom: 10, color: 'navy' }}>Welcome to React Native World</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>

                <TextInput
                    placeholder="Course goal"
                    style={{ width: '80%', borderColor: 'black', borderWidth: 1, marginBottom: 10, padding: 5, borderRadius: 7 }}
                    onChangeText={handleInput}
                    value={enterInput}
                />

                <Button title='Add' onPress={handleAddInput} />
            </View>
            {/* <FlatList
                keyExtractor={(item, index) => item.key}
                data={addInput}
                renderItem={itemData => (
                    <GoalItem onPress={console.log('amake cuiho na')} show={itemData.item.value} />

                )}


            /> */}
            {
                addInput.map(show => <GoalItem show={show}/>)
            }



        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default GoalInput;
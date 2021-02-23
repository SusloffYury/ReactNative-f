import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
} from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('');
    }
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };
    return (
        <Modal visible={props.modalVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonBlock}>
                    <View style={styles.button}>
                        <Button title='CANCEL' color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>



            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonBlock: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '60%'
    },
    button: {
        width:'40%',
    }

});

export default GoalInput;

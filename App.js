import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './components/ItemText';
import GoalInput from './components/ItemInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setModalVisible(false);
  };
  const deleteItem = itemId => {
    setCourseGoals(currentGoals => {
      return currentGoals
        .filter((goal) => goal.id !== itemId)
    })
  }

  const cancelHandler =()=>{
   setModalVisible(false);
  }

  return (
    <View style={styles.screen}>
      <GoalInput modalVisible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel ={cancelHandler}
        />
      <Button title={'Add item'}
        onPress={() => setModalVisible(true)}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem id={itemData.item.id}
            onDelete={deleteItem}
            title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  }

});

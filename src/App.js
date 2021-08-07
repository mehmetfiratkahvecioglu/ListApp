import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

//components
import Task from './Task/Task';

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handlerTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
    Keyboard.dismiss();
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.item}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write Here'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handlerTask()}>
          <View style={styles.taskaddwrapper}>
            <Text style={styles.taskadd}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  taskswrapper: {paddingTop: 40, paddingHorizontal: 20},
  item: {},
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#55BCF6',
    marginBottom: 10,
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    padding: 12,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'black',
  },
  taskaddwrapper: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskadd: {fontSize: 20, fontWeight: 'bold'},
});

export default App;

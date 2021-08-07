import React from 'react';
import {View, Text} from 'react-native';

//style
import styles from './Task.style';

const Task = props => {
  return (
    <View style={styles.container}>
      <View style={styles.leftitems}>
        <View style={styles.square}></View>
        <Text style={styles.tasktext}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default Task;

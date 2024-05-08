import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../components';

interface Prompts {
  initialState: number;
}

export const StateHookExamplePage = ({initialState}: Prompts) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initialState);
  };

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Separator />
      <View style={styles.container}>
        <Button onPress={increment} title={'Suma +1'} />
        <Separator />
        <Button onPress={decrease} title={'Reduce -1'} />
        <Separator />
        <Button onPress={reset} title={'Reset'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 50,
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    left: '10%',
  },
});

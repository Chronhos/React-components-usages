import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Separator} from '../../components';

export const EffectHookExamplePage = () => {
  const [dataEffect, setDataEffect] = useState<string>('Default Message');
  useEffect(() => {
    console.log('====================================');
    console.log('LOG', 'Use Effect Hook');
    console.log('====================================');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log('====================================');
      console.log('LOG', 'Example use Effect with Set Time Out');
      console.log('====================================');
      setDataEffect('Update Message');
    }, 3000);
  }, []);

  return (
    <View>
      <Separator />
      <Text style={styles.title}> How to Usage </Text>
      <Separator />
      <View style={styles.container}>
        <Text>Execute function a one first</Text>
        <Text style={styles.messageEffect}> {dataEffect} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 34,
  },
  container: {
    width: '90%',
    left: '5%',
    height: 50,
  },
  messageEffect: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 19,
  },
});

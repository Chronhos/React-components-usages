import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});

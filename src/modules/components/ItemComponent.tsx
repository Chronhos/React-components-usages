import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {MenuUI} from '../../core/interfaces';
import {RouteType} from '../../core/types';

interface Props {
  item: MenuUI;
  navigate: (route: RouteType) => void;
}

export const ItemComponent = ({item, navigate}: Props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigate(item.route)}
        key={item.id}>
        <Text style={styles.title}> {item.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9967A',
    borderRadius: 10,
    height: 30,
    width: '97%',
  },
  title: {
    color: 'black',
    fontSize: 14,
  },
});

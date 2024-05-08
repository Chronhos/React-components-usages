import React from 'react';
import {FlatList} from 'react-native';
import {ItemComponent} from './ItemComponent';
import {ListFlat} from '../../core/interfaces';

export const ListComponent = (params: ListFlat) => {
  return (
    <FlatList
      data={params.list}
      renderItem={({item}) => (
        <ItemComponent item={item} navigate={params.navigateTo} />
      )}
    />
  );
};

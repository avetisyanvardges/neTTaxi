import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Econom, Language} from '../../assets/images/Icons';
import {BackgroundColors, Colors, Sizes} from '../../assets/RootStyle';
import i18n from '../../assets/I18n';
import {LinkItem} from '../LinkItem';
const CarMagnet = () => {
  const data = [
    {
      title: 'econom',
    },
    {
      title: 'comfort',
    },
    {
      title: 'comfortPlus',
    },
    {
      title: 'buissnes',
    },
    {
      title: 'miniven',
    },
    {
      title: 'shipment',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <LinkItem
        title={`classes.${item.title}.title`}
        navigate={'CarMagnetDetail'}
        query={item.title}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item, i) => i.toString()}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export {CarMagnet};

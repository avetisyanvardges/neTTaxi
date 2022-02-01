import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import i18n from '../../assets/I18n';
import {BackgroundColors, Colors, Sizes} from '../../assets/RootStyle';
import TaxiPrice from '../../assets/images/Icons/TaxiPrice';

class Tariffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          title: 'econom',
          description: 'description',
          subDescription: 'subDescription',
        },
        {
          title: 'comfort',
          description: 'description',
          subDescription: 'subDescription',
        },
        {
          title: 'comfortPlus',
          description: 'description',
          subDescription: 'subDescription',
        },
        {
          title: 'buissnes',
          description: 'description',
          subDescription: 'subDescription',
        },
        {
          title: 'miniven',
          description: 'description',
          subDescription: 'subDescription',
        },
        {
          title: 'shipment',
          description: 'description',
          subDescription: 'subDescription',
        },
      ],
    };
  }

  render() {
    const {classes} = this.state;
    const {navigation} = this.props;
    const renderItem = ({item}) => {
      console.log(item);
      return (
        <View
          style={{
            paddingHorizontal: Sizes.size5,
            paddingVertical: Sizes.size15,
            marginHorizontal: Sizes.size29,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: Colors.borderDefColor,
            borderBottomWidth: 1,
          }}>
          <View style={{marginHorizontal: Sizes.size12}}>
            <View style={{flexDirection: 'row', marginVertical: Sizes.size5}}>
              <Text
                style={{
                  fontSize: Sizes.size20,
                  color: 'blue',
                  marginRight: Sizes.size10,
                }}>
                {i18n.t(`classes.${item.title}.title`)}
              </Text>
              <Text style={{fontSize: Sizes.size20, color: 'black'}}>
                {i18n.t(`classes.${item.title}.description`)}
              </Text>
            </View>
            {i18n.t(`classes.${item.title}.subDescription`) !== '' ? (
              <Text style={{fontSize: Sizes.size15, color: 'gray'}}>
                {' '}
                {i18n.t(`classes.${item.title}.subDescription`)}
              </Text>
            ) : null}
          </View>
        </View>
      );
    };

    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="info.tariffs"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />

        <FlatList
          keyExtractor={(item, i) => i.toString()}
          data={classes}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

export default Tariffs;

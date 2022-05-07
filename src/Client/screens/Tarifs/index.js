import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import i18n from '../../../assets/I18n';
import {Colors, Sizes} from '../../../assets/RootStyle';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';

class Tariffs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          title: 'economy',
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
          title: 'business',
          description: 'description',
          subDescription: 'subDescription',
        },
        {
          title: 'minivan',
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
    const {navigation, theme, buttonColor} = this.props;
    const renderItem = ({item}) => {
      console.log(item);
      return (
        <View
          style={{
            paddingHorizontal: Sizes.size2,
            paddingLeft: 42,
            marginHorizontal: Sizes.size15,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: Colors.borderDefColor,
            borderBottomWidth: 1,
          }}>
          <View style={{marginHorizontal: Sizes.size12}}>
            <View style={{flexDirection: 'row', marginVertical: Sizes.size5}}>
              <Text
                style={{
                  fontSize: Sizes.size18_5,
                  color: buttonColor?.PRIMARY_BUTTON_COLOR[1],
                  marginRight: Sizes.size10,
                }}>
                {i18n.t(`classes.${item.title}.title`)}
              </Text>
              <Text
                style={{
                  fontSize: Sizes.size18_5,
                  color: theme?.PRIMARY_TEXT_COLOR,
                }}>
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
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
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

const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};

export default connect(mapStateToProps, {makeAction})(Tariffs);

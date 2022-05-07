import React, {Component} from 'react';
import {Image, View, Text, FlatList, ScrollView} from 'react-native';
import user1Pic from '../../assets/images/user1.png';
import user2Pic from '../../assets/images/user2.png';
import user3Pic from '../../assets/images/user3.png';
import user4Pic from '../../assets/images/user4.png';
import user5Pic from '../../assets/images/user5.png';
import user6Pic from '../../assets/images/user6.png';
import user7Pic from '../../assets/images/user7.png';
import user8Pic from '../../assets/images/user8.png';

import {styles} from './style';
import {ScreenHeader} from '../../components/ScreenHeader';
import {Colors, Sizes} from '../../../assets/RootStyle';
import {AirbnbRating} from 'react-native-ratings';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';

class RatingScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const drivers = [
      {
        place: '4.',
        image: user4Pic,
        name: 'Don',
        surname: 'Corleone',
        car: 'BMW',
        number: '45 VT 504',
        rating: 4,
      },
      {
        place: '5.',
        image: user5Pic,
        name: 'Ramzes',
        surname: 'Third',
        car: 'Lamborghini',
        number: '34 DV 491',
        rating: 3.5,
      },
      {
        place: '6.',
        image: user6Pic,
        name: 'Sami',
        surname: 'Naseri',
        car: 'Puegeot',
        number: '36 VG 724',
        rating: 3,
      },
      {
        place: '7.',
        image: user7Pic,
        name: 'Dominic',
        surname: 'Torreto',
        car: 'Ford Mustang GT',
        number: '77 XX 777',
        rating: 2.5,
      },
      {
        place: '8.',
        image: user8Pic,
        name: 'Prchot',
        surname: 'Ander',
        car: 'Opel',
        number: '34 UL 489',
        rating: 2,
      },
    ];
    const {navigation, theme} = this.props;
    const {
      header,
      profilePic,
      starStyle,
      userPicture,
      user1Picture,
      user4Picture,
      place,
      sec_place,
      Drivers,
      starSTyle,
    } = styles(theme);

    const renderItem = ({item}) => {
      return (
        <>
          <View
            style={[
              Drivers,
              {
                backgroundColor:
                  item.place === '8.'
                    ? theme?.PRIMARY_HEADER_COLOR
                    : 'transparent',
                borderColor:
                  item.place === '8.'
                    ? theme?.PRIMARY_BORDER_COLOR
                    : 'transparent',
              },
            ]}>
            <View styles={{width: Sizes.size20}}>
              <Text style={{color: theme?.PRIMARY_TEXT_COLOR}}>
                {item.place}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginVertical: Sizes.size10,
                  marginHorizontal: Sizes.size10,
                }}>
                <Image source={item.image} style={user4Picture} />
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{marginBottom: 5, color: theme?.PRIMARY_TEXT_COLOR}}>
                  {item.name + ' ' + item.surname}
                </Text>
                <Text
                  style={{marginBottom: 5, color: theme?.PRIMARY_TEXT_COLOR}}>
                  {item.car}
                </Text>
                <Text
                  style={{marginBottom: 5, color: theme?.PRIMARY_TEXT_COLOR}}>
                  {item.number}
                </Text>
              </View>
            </View>
            <View style={starSTyle}>
              <AirbnbRating
                count={5}
                reviews={false}
                showRating={false}
                defaultRating={Math.round(item.rating) || 0}
                size={Sizes.size15}
                isDisabled={true}
                selectedColor={theme?.PRIMARY_BORDER_COLOR}
              />
            </View>
          </View>
          {item.place !== '7.' && item.place !== '8.' ? (
            <View
              style={{
                flex: 1,
                marginHorizontal: Sizes.size15,
                width: Sizes.size340,
                borderWidth: 0.5,
                borderColor: theme?.PRIMARY_BORDER_COLOR,
              }}
            />
          ) : null}
        </>
      );
    };

    const ListHeader = () => {
      return (
        <View style={header}>
          <ScreenHeader
            title="driver.pages.rating.top"
            leftIcon="back"
            leftIconPress={() => navigation.goBack()}
          />
          <View style={{flexDirection: 'row'}}>
            {/*User 2 */}
            <View style={profilePic}>
              <Image source={user2Pic} style={userPicture} />
              <View style={sec_place}>
                <Text
                  style={{
                    color: theme?.PRIMARY_BORDER_COLOR,
                    fontSize: Sizes.size12,
                  }}>
                  2.
                </Text>
              </View>
              <View style={starStyle}>
                <AirbnbRating
                  count={5}
                  reviews={false}
                  showRating={false}
                  defaultRating={Math.round(4) || 0}
                  size={Sizes.size15}
                  isDisabled={true}
                  selectedColor={theme?.PRIMARY_BORDER_COLOR}
                />
              </View>
            </View>
            {/*User 1*/}
            <View style={profilePic}>
              <Image source={user1Pic} style={user1Picture} />
              <View style={place}>
                <Text style={{color: 'white', fontSize: Sizes.size22}}>1</Text>
              </View>
              <View style={starStyle}>
                <AirbnbRating
                  count={5}
                  reviews={false}
                  showRating={false}
                  defaultRating={Math.round(5) || 0}
                  size={Sizes.size15}
                  isDisabled={true}
                  selectedColor={theme?.PRIMARY_BORDER_COLOR}
                />
              </View>
            </View>
            {/*User 3*/}
            <View style={profilePic}>
              <Image source={user3Pic} style={userPicture} />
              <View style={sec_place}>
                <Text
                  style={{
                    color: theme?.PRIMARY_BORDER_COLOR,
                    fontSize: Sizes.size12,
                  }}>
                  3.
                </Text>
              </View>
              <View style={starStyle}>
                <AirbnbRating
                  count={5}
                  reviews={false}
                  showRating={false}
                  defaultRating={Math.round(4) || 0}
                  size={Sizes.size15}
                  isDisabled={true}
                  selectedColor={theme?.PRIMARY_BORDER_COLOR}
                />
              </View>
            </View>
          </View>
        </View>
      );
    };
    return (
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
        <View>
          <FlatList
            data={drivers}
            renderItem={renderItem}
            ListHeaderComponent={ListHeader}
          />
        </View>
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
export default connect(mapStateToProps, {makeAction})(RatingScreen);

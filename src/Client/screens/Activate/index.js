import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import {LinkItem} from '../../components/LinkItem';
import {styles} from './style';
import {Sizes} from '../../../assets/RootStyle';
class Activate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnets: {
        carMagnet: 'pages.activations.carMagnet',
        areaMagnet: 'pages.activations.areaMagnet',
      },
    };
  }
  render() {
    const {navigation} = this.props;
    const {magnets} = this.state;
    const renderItem = ({item}) => {
      return (
        <LinkItem
          title={magnets[item]}
          navigate={'ActivateDetail'}
          query={{item}}
        />
      );
    };

    return (
      <View style={{flex: 1}}>
        <ScreenHeader
          title="activations.title"
          leftIcon="back"
          leftIconPress={() => navigation.goBack()}
        />
        <View>
          <FlatList
            keyExtractor={(item, i) => i.toString()}
            data={Object.keys(magnets)}
            renderItem={renderItem}
          />
        </View>
      </View>
    );
  }
}

export default Activate;

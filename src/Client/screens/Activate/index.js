import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScreenHeader} from '../../components/ScreenHeader';
import {LinkItem} from '../../components/LinkItem';
import {connect} from 'react-redux';
import {makeAction} from '../../../makeAction';
class Activate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      magnets: {
        carMagnet: 'client.pages.activations.carMagnet',
        areaMagnet: 'client.pages.activations.areaMagnet',
      },
    };
  }
  render() {
    const {navigation, theme} = this.props;
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
      <View style={{flex: 1, backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR}}>
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

const mapStateToProps = store => {
  return {
    theme: store.themes.theme,
    buttonColor: store.themes.buttonColor,
  };
};

export default connect(mapStateToProps, {makeAction})(Activate);

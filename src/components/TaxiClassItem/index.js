import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import png1 from "../../assets/images/economG.png";
import png2 from "../../assets/images/konfortG.png";
import png3 from "../../assets/images/buissnesG.png";
import png4 from "../../assets/images/komboG.png";
import png5 from "../../assets/images/economB.png"
import png6 from "../../assets/images/konfortB.png"
import png7 from "../../assets/images/buissnesB.png"
import png8 from "../../assets/images/komboB.png"

const TaxiClassItem = () => {
  const DATA = [
    {
      img: png1,
      imag: png5,
      title: 'Էկոնոմ',
      price: '200 AMD',
      id: 1,
    },
    {
      img: png2,
      imag: png6,
      title: 'Կոմֆորտ',
      price: '300 AMD',
      id: 2,
    },
    {
      img: png3,
      imag: png7,
      title: 'Բիզնես',
      price: '400 AMD',
      id: 3,
    },
    {
      img: png4,
      imag: png8,
      title: 'Կոմբո',
      id: 4,
    },
  ];
  const [active, setActive] = useState(false);
  const {
    imageContainer,
    totalPrice,
    titleContainer,
    bigContainer,
    itemStyle
  } = styles();
  const Item = ({item, onPress, backgroundColor, textColor}) => (
      <TouchableOpacity
        onPress={onPress}
        style={[itemStyle, backgroundColor]}>
        <Image
          onPress={onPress}
          source={item.id === active ? item.imag : item.img}
          alt={JSON.stringify(item.img)}
          style={[imageContainer]}
        />
        <Text style={titleContainer}>{item.title}</Text>
        <Text onPress={onPress} style={textColor}>
          {item.price}
        </Text>
      </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    const backgroundColor = item.id === active ? '#DCDCDC' : '#282727';
    const color = item.id === active ? 'black' : 'white';
    return (
      <Item
        item={item}
        onPress={() => setActive(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={bigContainer}>
        <FlatList data={DATA} renderItem={renderItem} horizontal={true} />
      </SafeAreaView>
    </>
  );
};

export default TaxiClassItem;

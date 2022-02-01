import { StyleSheet } from "react-native";
import { Sizes } from "../../assets/RootStyle";


const styles = theme => {
  return StyleSheet.create({
      imageContainer: {
        width: Sizes.size83,
        height: Sizes.size60,
        marginLeft: 17,
        marginTop: 10,
      },
      totalPrice: {
        marginLeft: 8,
        color: "white",
      },
      titleContainer: {
        color: "white",
        marginLeft: 7,
      },
      bigContainer: {
        display: "flex",
        flexDirection: "row",
      },
      itemStyle: {
        width: Sizes.size112,
        height: Sizes.size120,
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        borderColor: "white",
        borderWidth: 1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    });
};


export { styles };

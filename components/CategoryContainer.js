import { Pressable, View, Text } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const CategoryContainer = (props) => {
  return (
    <View>
      <Pressable>
        <Text>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryContainer;

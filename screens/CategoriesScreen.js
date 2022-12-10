import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {
  function renderItem(itemData) {
    const onPressHandler = () => {
      navigation.navigate("overview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      key="categories"
    />
  );
}

export default CategoriesScreen;

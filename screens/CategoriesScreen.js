import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryContainer from "../components/CategoryContainer";

function renderItem(itemData) {
  return <CategoryContainer title={itemData.item.title} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

export default CategoriesScreen;

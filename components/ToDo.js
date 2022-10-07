import { View, Text } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
const Todo = ({ rightSwipeActions, swipeFromRightOpen, item }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableRightOpen={() => swipeFromRightOpen(item.id)}
        key={item.id}
      >
        <View className="h-fit flex-row bg-white">
          <Text className={`p-5 text-slate-800 flex-1 `}>{item.todo}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default Todo;

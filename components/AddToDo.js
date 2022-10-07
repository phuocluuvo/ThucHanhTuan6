import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function AddToDo({ setTodo, todo, AddHandler }) {
  return (
    <View className="h-fit flex-row items-center gap-x-5 px-3">
      <TextInput
        placeholder="Enter a to-do"
        placeholderTextColor="rgb(30 41 59 / var(--tw-border-opacity))"
        onChangeText={(e) => {
          setTodo({
            id: Math.random().toString(),
            todo: e,
          });
        }}
        value={todo?.todo}
        className="pl-2 py-3 text-lg rounded-lg border-slate-800 border-[1px] flex-1 flex-row"
      />
      <TouchableOpacity
        onPress={AddHandler}
        className="bg-blue-600 rounded-lg px-5 py-3"
      >
        <Text className="text-white font-bold ">Add</Text>
      </TouchableOpacity>
    </View>
  );
}

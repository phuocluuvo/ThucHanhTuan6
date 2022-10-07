import { View, Text } from "react-native";
import React, { useState } from "react";
import Todo from "../components/ToDo";
import { FlatList } from "react-native-gesture-handler";
import AddToDo from "../components/AddToDo";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
//-------------- No API Handler -----------------------//
export default function ToDoNoAPI() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: 0, todo: "", isCompleted: false });

  const swipeFromRightOpen = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const rightSwipeActions = () => {
    return (
      <View className="bg-green-600 justify-center px-4 h-fit w-full">
        <Text className="text-white text-right">Done</Text>
      </View>
    );
  };
  function AddHandler() {
    setTodos([...todos, todo]);
    setTodo(null);
  }
  return (
    <SafeAreaView className=" bg-white">
      <StatusBar></StatusBar>
      <AddToDo
        setTodo={setTodo}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        AddHandler={AddHandler}
      />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo
            rightSwipeActions={rightSwipeActions}
            swipeFromRightOpen={swipeFromRightOpen}
            item={item}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

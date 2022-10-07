import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Todo from "../components/ToDo";
import { FlatList } from "react-native-gesture-handler";
import AddToDo from "../components/AddToDo";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
//-------------- API Handler -----------------------//
export default function TodoWithAPI() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: "", todo: "" });

  useEffect(() => {
    axios
      .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
      .then((todos) => setTodos(todos.data));
  }, []);

  function AddHandler() {
    fetch("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    axios
      .get("https://633f90f6e44b83bc73bc6d3e.mockapi.io/api/ToDo")
      .then((todos) => {
        setTodos(todos.data);
      });
  }
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

  return (
    <SafeAreaView className="py-10">
      <StatusBar></StatusBar>

      <AddToDo setTodo={setTodo} todo={todo} AddHandler={AddHandler} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View>
            <Todo
              key={item.id}
              rightSwipeActions={rightSwipeActions}
              swipeFromRightOpen={swipeFromRightOpen}
              item={item}
            />
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}

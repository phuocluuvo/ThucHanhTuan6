import { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";
import AddToDo from "./components/AddToDo";
import Todo from "./components/ToDo";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: 0, todo: "", isCompleted: false });
  //-------------- No API Handler -----------------------//
  function AddHandler() {
    setTodos([...todos, todo]);
    setTodo({});
    console.log(todos);
  }
  const rightSwipeActions = () => {
    return (
      <View className="bg-green-600 justify-center px-4 h-fit w-full">
        <Text className="text-white text-right">Done</Text>
      </View>
    );
  };
  const swipeFromRightOpen = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView className="py-10">
      <StatusBar></StatusBar>

      <AddToDo setTodo={setTodo} todo={todo} AddHandler={AddHandler} />

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

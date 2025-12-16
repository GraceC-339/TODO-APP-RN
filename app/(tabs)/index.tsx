import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode} = useTheme();

  // test the database connection
  // const todos = useQuery(api.todos.getTodos);
  // console.log(todos);

  // const addTodo = useMutation(api.todos.addTodo);
  // const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>Hello World</Text>
      <Text> Hi </Text>
      {/* test toggleDarkMode */}
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 22,
    fontWeight: "bold",
  },
})

import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  // test the database connection
  // const todos = useQuery(api.todos.getTodos);
  // console.log(todos);

  // const addTodo = useMutation(api.todos.addTodo);
  // const clearAllTodos = useMutation(api.todos.clearAllTodos);

  return (
    //Use LinearGradient as the main container background
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
    
      {/* Use the StatusBar component to set the style based on the theme */}
      <StatusBar barStyle={colors.statusBarStyle} />

      {/* SafeAreaView to handle notches and safe areas */}
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        {/* test toggleDarkMode */}
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the Mode</Text>
        </TouchableOpacity>
      </SafeAreaView>

    </LinearGradient>
  );
}

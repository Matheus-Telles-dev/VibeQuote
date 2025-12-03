import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Home } from "./src/screens/Home";
import { colors } from "./src/themes/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

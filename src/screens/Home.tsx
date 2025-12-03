import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
} from "react-native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { generateQuoteFromMood } from "../services/aiService";
import { QuoteData } from "../types/Quote";
import { QuoteCard } from "../components/QuoteCard";
import { MainButton } from "../components/MainButton";
import { VibeInput } from "../components/VibeInput";
import { colors } from "../themes/colors";

export const Home = () => {
  const [mood, setMood] = useState("");
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateQuote = async () => {
    if (mood.trim().length === 0) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      return;
    }

    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    Keyboard.dismiss();
    setIsLoading(true);
    setQuoteData(null);

    try {
      const result = await generateQuoteFromMood(mood);
      if (result) {
        await Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Success
        );
        setQuoteData(result);
      }
    } catch (error) {
      Alert.alert("Error", "The stars are misaligned. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient colors={colors.bgGradient} style={styles.container}>
      <StatusBar barStyle="light-content" />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <View style={styles.content}>
            <View style={styles.iconHeader}>
              <MaterialCommunityIcons
                name="robot-happy-outline"
                size={42}
                color={colors.primary}
              />
            </View>

            <View style={styles.headerTextContainer}>
              <Text style={styles.title}>VibeQuote</Text>
              <Text style={styles.subtitle}>How is your vibe today?</Text>
            </View>

            <VibeInput
              placeholder="Ex: I'm feeling anxious about my future and overwhelmed..."
              value={mood}
              onChangeText={setMood}
              multiline
            />

            <MainButton
              title={isLoading ? "Generating..." : "Inspire Me"}
              onPress={handleGenerateQuote}
              isLoading={isLoading}
            />

            {quoteData && <QuoteCard data={quoteData} />}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  iconHeader: {
    marginBottom: 16,
    alignItems: "flex-start",
  },
  headerTextContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.textHighlight,
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textBody,
    lineHeight: 24,
  },
});

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { FontAwesome } from "@expo/vector-icons";
import { QuoteData } from "../types/Quote";
import { colors } from "../themes/colors";

interface Props {
  data: QuoteData;
}

export const QuoteCard = ({ data }: Props) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(100).springify().damping(12)}
      exiting={FadeOut}
      style={styles.card}
    >
      <View style={styles.watermarkContainer}>
        <FontAwesome name="quote-left" size={120} color={colors.primary} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.quoteText}>"{data.quote}"</Text>

        <View style={styles.authorContainer}>
          <View style={styles.line} />
          <Text style={styles.authorText}>{data.author}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 40,
    backgroundColor: colors.surface,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,

    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  watermarkContainer: {
    position: "absolute",
    top: -40,
    left: -20,
    opacity: 0.05,
    transform: [{ rotate: "-10deg" }],
  },
  contentContainer: {
    padding: 28,
    paddingTop: 32,
    zIndex: 1,
  },
  quoteText: {
    color: "#E1E1E6",
    fontSize: 22,
    fontStyle: "italic",
    lineHeight: 34,
    marginBottom: 32,
    fontWeight: "400",
    letterSpacing: 0.5,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  authorText: {
    color: colors.textBody,
    fontSize: 13,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
});

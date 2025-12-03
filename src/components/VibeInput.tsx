import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";
import { colors } from "../themes/colors";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface Props extends TextInputProps {}

export const VibeInput = (props: Props) => {
  const borderColor = useSharedValue(colors.border);
  const backgroundColor = useSharedValue(colors.surface);

  const handleFocus = () => {
    borderColor.value = withTiming(colors.borderFocus, { duration: 200 });
    backgroundColor.value = withTiming(colors.surfaceActive, { duration: 200 });
  };

  const handleBlur = () => {
    borderColor.value = withTiming(colors.border, { duration: 200 });
    backgroundColor.value = withTiming(colors.surface, { duration: 200 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderColor: borderColor.value,
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <AnimatedTextInput
      {...props}
      style={[styles.input, animatedStyle]}
      placeholderTextColor={colors.textPlaceholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      cursorColor={colors.primary}
      selectionColor={colors.primary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    color: colors.textHighlight,
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1.5,
    marginBottom: 24,
    minHeight: 120,
    textAlignVertical: "top",
  },
});

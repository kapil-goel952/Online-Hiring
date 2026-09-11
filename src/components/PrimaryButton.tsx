import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../constants/color";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "filled" | "outline";
};

export default function PrimaryButton({
  title,
  onPress,
  variant = "filled",
}: PrimaryButtonProps) {
  const isOutline = variant === "outline";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isOutline && styles.outlineButton,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, isOutline && styles.outlineText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
  },
  outlineText: {
    color: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
});
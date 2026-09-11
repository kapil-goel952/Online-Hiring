import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../constants/color";

type Service = {
  id: string;
  name: string;
  icon: string;
};

type ServiceCardProps = {
  service: Service;
  onPress: () => void;
};

export default function ServiceCard({
  service,
  onPress,
}: ServiceCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Text style={styles.icon}>{service.icon}</Text>
      <Text style={styles.name} numberOfLines={2}>
        {service.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "31%",
    minHeight: 105,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 12,
  },
  icon: {
    fontSize: 28,
    marginBottom: 9,
  },
  name: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
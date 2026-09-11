import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/color";

type Worker = {
  id: string;
  name: string;
  service: string;
  rating: number;
  experience: string;
  price: string;
  distance: string;
};

type WorkerCardProps = {
  worker: Worker;
  onPress: () => void;
};

export default function WorkerCard({ worker, onPress }: WorkerCardProps) {
  const initial = worker.name.charAt(0);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{worker.name}</Text>
        <Text style={styles.service}>
          {worker.service} - {worker.experience}
        </Text>
        <Text style={styles.info}>
          Rating: {worker.rating} | {worker.distance}
        </Text>
      </View>

      <Text style={styles.price}>{worker.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "700",
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 3,
  },
  service: {
    color: colors.muted,
    fontSize: 12,
    marginBottom: 3,
  },
  info: {
    color: colors.muted,
    fontSize: 11,
  },
  price: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.75,
  },
});
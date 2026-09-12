import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { colors } from "../constants/color";
import PrimaryButton from "../components/PrimaryButton";

export default function BookingSuccessScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successCircle}>
          <Text style={styles.successText}>OK</Text>
        </View>

        <Text style={styles.title}>Request Sent!</Text>
        <Text style={styles.subtitle}>
          Your service request has been sent to Raj Kumar.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Booking Details</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Service</Text>
            <Text style={styles.value}>Tap Repair</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Worker</Text>
            <Text style={styles.value}>Raj Kumar</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>15 Sep 2026</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>5:00 PM</Text>
          </View>
        </View>

        <Text style={styles.note}>
          The worker will review your request and contact you soon.
        </Text>
      </View>

    <View style={styles.bottomAction}>
  <PrimaryButton
    title="Track Booking"
    onPress={() => router.push("/tracking")}
  />

  <View style={styles.homeButton}>
    <PrimaryButton
      title="Back to Home"
      variant="outline"
      onPress={() => router.replace("/home")}
    />
  </View>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeButton: {
  marginTop: 10,
},
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  successCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  successText: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: "800",
  },
  title: {
    color: colors.text,
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 9,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 18,
    marginTop: 30,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
  },
  value: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "600",
  },
  note: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: "center",
    marginTop: 22,
  },
  bottomAction: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: 16,
  },
});
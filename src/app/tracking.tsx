import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

import { colors } from "../constants/color";
import PrimaryButton from "../components/PrimaryButton";

const steps = [
  {
    title: "Request Sent",
    details: "15 Sep 2026 - 10:15 AM",
    completed: true,
  },
  {
    title: "Worker Accepted",
    details: "Raj Kumar will confirm your booking.",
    completed: false,
  },
  {
    title: "Worker On The Way",
    details: "Track worker arrival status here.",
    completed: false,
  },
  {
    title: "Work Started",
    details: "Service work begins.",
    completed: false,
  },
  {
    title: "Payment Completed",
    details: "Payment status will appear here.",
    completed: false,
  },
];

export default function TrackingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {
  if (router.canGoBack()) {
    router.back();
  } else {
    router.replace("/home");
  }
}} style={styles.backButton}>
          <Text style={styles.backText}>{"<"}</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Track Booking</Text>
        <View style={styles.headerSpace} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.bookingCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>

          <View>
            <Text style={styles.serviceName}>Plumbing Service</Text>
            <Text style={styles.workerName}>Raj Kumar</Text>
            <Text style={styles.bookingTime}>15 Sep 2026 - 5:00 PM</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Booking Status</Text>

        <View style={styles.timeline}>
          {steps.map((step, index) => (
            <View key={step.title} style={styles.stepRow}>
              <View style={styles.markerColumn}>
                <View
                  style={[
                    styles.dot,
                    step.completed && styles.completedDot,
                  ]}
                >
                  <Text
                    style={[
                      styles.dotText,
                      step.completed && styles.completedDotText,
                    ]}
                  >
                    {index + 1}
                  </Text>
                </View>

                {index < steps.length - 1 && (
                  <View
                    style={[
                      styles.line,
                      step.completed && styles.completedLine,
                    ]}
                  />
                )}
              </View>

              <View style={styles.stepContent}>
                <Text
                  style={[
                    styles.stepTitle,
                    step.completed && styles.completedTitle,
                  ]}
                >
                  {step.title}
                </Text>
                <Text style={styles.stepDetails}>{step.details}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomAction}>
        <PrimaryButton
          title="Back to Home"
          onPress={() => router.replace("/home")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 62,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 18,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    color: colors.text,
    fontSize: 28,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
  },
  headerSpace: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  bookingCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 26,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  serviceName: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  workerName: {
    color: colors.muted,
    fontSize: 12,
    marginBottom: 4,
  },
  bookingTime: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },
  timeline: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 18,
  },
  stepRow: {
    flexDirection: "row",
  },
  markerColumn: {
    width: 32,
    alignItems: "center",
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  completedDot: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  dotText: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "700",
  },
  completedDotText: {
    color: colors.white,
  },
  line: {
    width: 2,
    height: 42,
    backgroundColor: colors.border,
    marginTop: 4,
  },
  completedLine: {
    backgroundColor: colors.primary,
  },
  stepContent: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 22,
  },
  stepTitle: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 4,
  },
  completedTitle: {
    color: colors.text,
  },
  stepDetails: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  bottomAction: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: 16,
  },
});
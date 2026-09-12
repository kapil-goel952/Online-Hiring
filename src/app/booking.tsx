import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";

import { colors } from "../constants/color";
import { workers } from "../constants/data";
import PrimaryButton from "../components/PrimaryButton";

const worker = workers[0];

export default function BookingScreen() {
  const [problem, setProblem] = useState("Bathroom tap is leaking.");
  const [address, setAddress] = useState("Home - Sector 62, Noida");
  const [notes, setNotes] = useState("");

  function handleSendRequest() {
    if (!problem.trim()) {
      Alert.alert("Add a problem", "Please describe what needs to be fixed.");
      return;
    }

    // Alert.alert(
    //   "Request Sent",
    //   `Your booking request has been sent to ${worker.name}.`,
    //   [{ text: "OK", onPress: () => router.replace("/") }]
    // );
    router.replace("/booking-success");
  }

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

        <Text style={styles.headerTitle}>Book Service</Text>
        <View style={styles.headerSpace} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.workerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>

          <View>
            <Text style={styles.workerName}>{worker.name}</Text>
            <Text style={styles.workerService}>
              {worker.service} - {worker.experience}
            </Text>
            <Text style={styles.workerRating}>
              Rating {worker.rating} | Starting {worker.price}
            </Text>
          </View>
        </View>

        <Text style={styles.label}>Select Service</Text>
        <Pressable style={styles.selector}>
          <Text style={styles.selectorText}>Tap Repair</Text>
          <Text style={styles.arrow}>v</Text>
        </Pressable>

        <Text style={styles.label}>Describe Your Problem</Text>
        <TextInput
          value={problem}
          onChangeText={setProblem}
          placeholder="Describe your issue..."
          placeholderTextColor={colors.muted}
          multiline
          textAlignVertical="top"
          style={styles.textArea}
        />

        <View style={styles.dateTimeRow}>
          <View style={styles.halfField}>
            <Text style={styles.label}>Date</Text>
            <Pressable style={styles.selector}>
              <Text style={styles.selectorText}>15 Sep 2026</Text>
            </Pressable>
          </View>

          <View style={styles.halfField}>
            <Text style={styles.label}>Time</Text>
            <Pressable style={styles.selector}>
              <Text style={styles.selectorText}>5:00 PM</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.label}>Address</Text>
        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your address"
          placeholderTextColor={colors.muted}
          style={styles.input}
        />

        <Text style={styles.label}>Additional Information (Optional)</Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="Any special instructions..."
          placeholderTextColor={colors.muted}
          multiline
          textAlignVertical="top"
          style={styles.notesInput}
        />
      </ScrollView>

      <View style={styles.bottomAction}>
        <PrimaryButton title="Send Request" onPress={handleSendRequest} />
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
    paddingBottom: 28,
  },
  workerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 22,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D1FAE5",
    marginRight: 12,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "700",
  },
  workerName: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 3,
  },
  workerService: {
    color: colors.muted,
    fontSize: 12,
    marginBottom: 3,
  },
  workerRating: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  label: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 4,
  },
  selector: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 13,
    marginBottom: 18,
  },
  selectorText: {
    color: colors.text,
    fontSize: 13,
  },
  arrow: {
    color: colors.muted,
    fontSize: 15,
  },
  textArea: {
    minHeight: 100,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 13,
    color: colors.text,
    fontSize: 13,
    marginBottom: 18,
  },
  dateTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfField: {
    width: "48%",
  },
  input: {
    height: 48,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 13,
    color: colors.text,
    fontSize: 13,
    marginBottom: 18,
  },
  notesInput: {
    minHeight: 82,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 13,
    color: colors.text,
    fontSize: 13,
  },
  bottomAction: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: 16,
  },
});
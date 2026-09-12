import { useState } from "react";
import {
  Alert,
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

const paymentMethods = ["UPI", "Card", "Cash"] as const;

type PaymentMethod = (typeof paymentMethods)[number];

export default function PaymentScreen() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("UPI");

  function handlePayment() {
    Alert.alert(
      "Payment Successful",
      `Payment of Rs. 400 completed using ${selectedMethod}.`,
      [{ text: "OK", onPress: () => router.replace("/home") }]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            if (router.canGoBack()) {
              router.back();
            } else {
              router.replace("/home");
            }
          }}
          style={styles.backButton}
        >
          <Text style={styles.backText}>{"<"}</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Payment</Text>
        <View style={styles.headerSpace} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.cardTitle}>Booking Summary</Text>

          <View style={styles.workerRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>RK</Text>
            </View>

            <View>
              <Text style={styles.workerName}>Raj Kumar</Text>
              <Text style={styles.workerInfo}>Plumbing Service</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Visit Charge</Text>
            <Text style={styles.value}>Rs. 100</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Repair Charge</Text>
            <Text style={styles.value}>Rs. 300</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>Rs. 400</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Payment Method</Text>

        {paymentMethods.map((method) => {
          const selected = selectedMethod === method;

          return (
            <Pressable
              key={method}
              onPress={() => setSelectedMethod(method)}
              style={styles.methodCard}
            >
              <View style={[styles.radio, selected && styles.radioSelected]}>
                {selected && <View style={styles.radioDot} />}
              </View>

              <Text style={styles.methodText}>{method}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.bottomAction}>
        <PrimaryButton title="Pay Rs. 400" onPress={handlePayment} />
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
  summaryCard: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 17,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 15,
  },
  workerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
  },
  workerName: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 3,
  },
  workerInfo: {
    color: colors.muted,
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
  },
  value: {
    color: colors.text,
    fontSize: 13,
  },
  totalLabel: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "700",
  },
  totalValue: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "800",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 12,
  },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  methodText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
  bottomAction: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: 16,
  },
});
import { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { colors } from "../constants/color";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoLetter}>K</Text>
        </View>

        <View style={styles.brandRow}>
          <Text style={styles.brandGreen}>Kaam</Text>
          <Text style={styles.brandOrange}>Karo</Text>
        </View>

        <Text style={styles.tagline}>
          Ghar ke har kaam ke liye{"\n"}trusted workers, ek hi app par.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Home Services Made Simple</Text>
          <Text style={styles.infoText}>
            Plumbing, electrical, cleaning, painting and more.
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>Connecting people with trusted workers</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
    paddingHorizontal: 28,
    paddingVertical: 48,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  logoLetter: {
    color: colors.primary,
    fontSize: 46,
    fontWeight: "800",
  },
  brandRow: {
    flexDirection: "row",
    marginBottom: 14,
  },
  brandGreen: {
    color: colors.primary,
    fontSize: 31,
    fontWeight: "800",
  },
  brandOrange: {
    color: colors.secondary,
    fontSize: 31,
    fontWeight: "800",
  },
  tagline: {
    color: colors.text,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#ECFDF5",
    borderRadius: 10,
    padding: 18,
    marginTop: 42,
  },
  infoTitle: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 6,
  },
  infoText: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
  },
  footer: {
    color: colors.muted,
    fontSize: 12,
    textAlign: "center",
  },
});
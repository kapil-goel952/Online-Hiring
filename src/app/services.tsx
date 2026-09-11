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
import { services } from "../constants/data";
import ServiceCard from "../components/ServiceCard";

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>{"<"}</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Services</Text>

        <View style={styles.headerSpace} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>What do you need help with?</Text>
        <Text style={styles.subtitle}>
          Choose a service to find nearby workers.
        </Text>

        <View style={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onPress={() => router.push("/workers")}
            />
          ))}
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
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
    fontWeight: "400",
  },
  headerTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
  },
  headerSpace: {
    width: 36,
  },
  content: {
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 7,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
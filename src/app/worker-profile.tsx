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
import { workers } from "../constants/data";
import PrimaryButton from "../components/PrimaryButton";

const worker = workers[0];

const skills = [
  "Tap repair",
  "Pipe leakage fix",
  "Bathroom fitting",
  "Water tank work",
];

export default function WorkerProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>{"<"}</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Worker Profile</Text>
        <View style={styles.headerSpace} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>RK</Text>
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{worker.name}</Text>
              <Text style={styles.verified}>Verified</Text>
            </View>

            <Text style={styles.service}>
              {worker.service} - {worker.experience} experience
            </Text>

            <Text style={styles.rating}>
              Rating {worker.rating} (124 reviews)
            </Text>

            <Text style={styles.distance}>{worker.distance}</Text>
          </View>
        </View>

        <View style={styles.tabs}>
          <Text style={[styles.tabText, styles.activeTab]}>About</Text>
          <Text style={styles.tabText}>Services</Text>
          <Text style={styles.tabText}>Reviews</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.description}>
            Professional plumber with 6 years of experience in residential and
            commercial work. Provides fast, reliable, and affordable service.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>

          {skills.map((skill) => (
            <View key={skill} style={styles.skillRow}>
              <View style={styles.dot} />
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Starting price</Text>
          <Text style={styles.price}>{worker.price}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomAction}>
        <PrimaryButton
          title="Hire Now"
          onPress={() => router.push("/booking")}
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
    paddingBottom: 30,
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 15,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#D1FAE5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  avatarText: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "700",
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  name: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginRight: 8,
  },
  verified: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: "700",
  },
  service: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 5,
  },
  rating: {
    color: colors.text,
    fontSize: 12,
    marginTop: 5,
  },
  distance: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginTop: 18,
  },
  tabText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "600",
    paddingVertical: 14,
  },
  activeTab: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  section: {
    marginTop: 22,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 9,
  },
  description: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 20,
  },
  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginRight: 10,
  },
  skillText: {
    color: colors.text,
    fontSize: 14,
  },
  priceBox: {
    backgroundColor: "#ECFDF5",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
  },
  priceLabel: {
    color: colors.muted,
    fontSize: 12,
  },
  price: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "700",
    marginTop: 4,
  },
  bottomAction: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: 16,
  },
});
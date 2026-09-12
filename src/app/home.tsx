import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";

import { colors } from "../constants/color";
import { services, workers } from "../constants/data";
import PrimaryButton from "../components/PrimaryButton";
import ServiceCard from "../components/ServiceCard";
import WorkerCard from "../components/WorkerCard";
import BottomTabs from "../components/BottomTabs";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>
            Kaam<Text style={styles.logoOrange}>Karo</Text>
          </Text>
          <Text style={styles.location}>Noida Sector 62</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Ghar ka kaam? Tension nahi.</Text>
          <Text style={styles.heroText}>
            Find trusted workers near you for home services.
          </Text>

          <TextInput
            style={styles.search}
            placeholder="Search for a service..."
            placeholderTextColor={colors.muted}
          />

          <View style={styles.buttonRow}>
            <View style={styles.buttonItem}>
              <PrimaryButton
                title="Find Worker"
                onPress={() => router.push("/services")}
              />
            </View>

            <View style={styles.buttonItem}>
              <PrimaryButton
                title="Join Worker"
                variant="outline"
                onPress={() => {}}
              />
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <Text style={styles.seeAll} onPress={() => router.push("/services")}>
            See All
          </Text>
        </View>

        <View style={styles.serviceGrid}>
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              service={item}
              onPress={() => router.push("/workers")}
            />
          ))}
        </View>

        <Text style={styles.sectionTitle}>Top Workers</Text>

        {workers.map((worker) => (
          <WorkerCard
            key={worker.id}
            worker={worker}
            onPress={() => router.push("/worker-profile")}
          />
        ))}
      </ScrollView>

      <BottomTabs activeTab="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 18,
  },
  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.primary,
  },
  logoOrange: {
    color: colors.secondary,
  },
  location: {
    marginTop: 4,
    color: colors.muted,
  },
  hero: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 18,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.text,
  },
  heroText: {
    marginTop: 8,
    color: colors.muted,
    lineHeight: 20,
  },
  search: {
    marginTop: 16,
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonItem: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 14,
  },
  seeAll: {
    color: colors.primary,
    fontWeight: "700",
    marginBottom: 14,
  },
  serviceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
});
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
import WorkerCard from "../components/WorkerCard";

export default function WorkersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>{"<"}</Text>
        </Pressable>

        <View>
          <Text style={styles.headerTitle}>Find Workers</Text>
          <Text style={styles.location}>Noida Sector 62</Text>
        </View>

        <View style={styles.headerSpace} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Nearby Professionals</Text>
        <Text style={styles.subtitle}>
          Find trusted workers for your home services.
        </Text>

        <View style={styles.filters}>
          <Pressable style={[styles.filter, styles.activeFilter]}>
            <Text style={styles.activeFilterText}>Nearby</Text>
          </Pressable>

          <Pressable style={styles.filter}>
            <Text style={styles.filterText}>Rating</Text>
          </Pressable>

          <Pressable style={styles.filter}>
            <Text style={styles.filterText}>Price</Text>
          </Pressable>

          <Pressable style={styles.filter}>
            <Text style={styles.filterText}>Experience</Text>
          </Pressable>
        </View>

        <View style={styles.list}>
          {workers.map((worker) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              onPress={() => router.push("/worker-profile")}
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
    height: 68,
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
    marginRight: 8,
  },
  backText: {
    color: colors.text,
    fontSize: 28,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
  },
  location: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 2,
  },
  headerSpace: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    marginBottom: 18,
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 18,
  },
  filter: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 18,
    paddingHorizontal: 13,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  activeFilter: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "600",
  },
  activeFilterText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  list: {
    marginTop: 2,
  },
});
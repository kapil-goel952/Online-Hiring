import { Pressable, StyleSheet, Text, View } from "react-native";
import { router, type Href } from "expo-router";

import { colors } from "../constants/color";

type BottomTabsProps = {
  activeTab?: string;
};

type Tab = {
  label: string;
  icon: string;
  route: Href | null;
};

const tabs: Tab[] = [
  { label: "Home", icon: "H", route: "/home" },
  { label: "Bookings", icon: "B", route: "/booking" },
  { label: "Messages", icon: "M", route: null },
  { label: "Profile", icon: "P", route: "/worker-profile" },
];

export default function BottomTabs({
  activeTab = "Home",
}: BottomTabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.label === activeTab;

        return (
          <Pressable
            key={tab.label}
            disabled={!tab.route}
            onPress={() => {
              if (tab.route) {
                router.replace(tab.route);
              }
            }}
            style={styles.tab}
          >
            <View style={[styles.iconBox, isActive && styles.activeIconBox]}>
              <Text style={[styles.icon, isActive && styles.activeIcon]}>
                {tab.icon}
              </Text>
            </View>

            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  activeIconBox: {
    backgroundColor: "#D1FAE5",
  },
  icon: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
  },
  activeIcon: {
    color: colors.primary,
  },
  label: {
    color: colors.muted,
    fontSize: 10,
    marginTop: 4,
  },
  activeLabel: {
    color: colors.primary,
    fontWeight: "700",
  },
});
import theme from "@/design-system/theme";
import { initDB } from "@/scripts/database/setupDatabase";
import { Tabs } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import React from "react";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <SQLiteProvider databaseName="cashtrail.db" onInit={initDB}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Tabs
          safeAreaInsets={{ bottom: 0 }}
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.background,
            },
            tabBarStyle: {
              backgroundColor: theme.colors.background,
              position: "absolute",
              borderTopWidth: 0,
            },
            tabBarActiveTintColor: theme.colors.text,
            tabBarBackground: () => (
              <View
                style={{ flex: 1, backgroundColor: theme.colors.background }}
              />
            ),
          }}
        >
          <Tabs.Screen name="index" options={{ title: "Home" }} />
          <Tabs.Screen
            name="transactions"
            options={{
              title: "Transactions",
              headerTitleStyle: {
                color: theme.colors.text,
              },
            }}
          />
        </Tabs>
      </View>
    </SQLiteProvider>
  );
}

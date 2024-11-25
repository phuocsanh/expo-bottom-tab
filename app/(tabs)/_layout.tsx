import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageSourcePropType, Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomFabBar } from "@/components/bottombar";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ICONS } from "@/assets";
import MyBottomBarComponent from "@/components/mytabbar";

const tabBarIcon =
  (name: ImageSourcePropType) =>
  ({ focused }: { focused: boolean }) =>
    <Image tintColor={focused ? "white" : "green"} source={name} />;

// const customBottomFabBar = (props: BottomTabBarProps) => (
//   <BottomFabBar
//     mode={"default"}
//     // eslint-disable-next-line react-native/no-inline-styles
//     focusedButtonStyle={{
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 7,
//       },
//       shadowOpacity: 0.41,
//       shadowRadius: 9.11,
//       elevation: 14,
//     }}
//     // eslint-disable-next-line react-native/no-inline-styles
//     bottomBarContainerStyle={{
//       position: "absolute",
//       bottom: 0,
//       left: 0,
//       right: 0,
//     }}
//     {...props}
//   />
// );
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={MyBottomBarComponent}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: tabBarIcon(ICONS.ic_home),
        }}
      />
      <Tabs.Screen
        name="TableRoomScreen"
        options={{
          title: "TableRoomScreen",
          tabBarIcon: tabBarIcon(ICONS.ic_table_room),
        }}
      />
    </Tabs>
  );
}

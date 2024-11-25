import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
// import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainBottomTabs from "./MainBottomTabs";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RectangleWithCutout from "@/components/RectangleWithCutout";
import { CurvedBottomBarExpo } from "@/components/curvedbottom";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { ScreenBottomBarProps } from "../components/curvedbottom/CurvedBottomBar/components/MenuItemView/model";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomTabNavigator } from "@/components/bottomtab";
import commonGroup from "./commonGroup";
import TabLayout from "./(tabs)/_layout";
const Stack = createNativeStackNavigator<any>();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export const navigationRoot = createNavigationContainerRef<any>();
const Screen1 = () => {
  return (
    <View style={styles.screen1}>
      <TouchableOpacity
        onPress={() => navigationRoot.navigate("SearchProduct")}
        style={{ marginTop: 100 }}
      >
        <Text>aaaaa</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "settings-outline";
        break;
    }

    return (
      <Ionicons
        name={"attach-outline"}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };
  const renderTabBar = ({
    routeName,
    selectedTab,
    navigate,
  }: BottomTabBarProps) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <TabLayout />
      {/* <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("Click Action")}
            >
              <Ionicons name={"apps-sharp"} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          options={{
            headerShown: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
            },
          }}
          name="title1"
          position="LEFT"
          component={() => <Screen1 />}
        />
        <CurvedBottomBarExpo.Screen
          name="title3"
          position="LEFT"
          options={{
            headerShown: false,
            tabBarItemStyle: {
              margin: 0,
              backgroundColor: "white",
            },
          }}
          component={() => <Screen1 />}
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          component={() => <Screen2 />}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name="title4"
          component={() => <Screen2 />}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
      {commonGroup()} */}
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainBottomTab" component={MainBottomTabs} />
      </Stack.Navigator> */}
    </ThemeProvider>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    bottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});

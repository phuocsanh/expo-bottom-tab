import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();

  return <View style={{ flex: 1 }}></View>;
};

export default ProfileScreen;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import common from "@/screens/common";

const Stack = createNativeStackNavigator<any>();

const commonGroup = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="CustomerInfo" component={common.CustomerInfo} />
      <Stack.Screen name="SearchProduct" component={common.SearchProduct} />
    </Stack.Group>
  );
};

export default commonGroup;

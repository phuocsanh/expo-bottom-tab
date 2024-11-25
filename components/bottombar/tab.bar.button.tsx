import React, { memo, useEffect } from "react";
import { StyleProp, TouchableOpacity, View } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { style } from "./styles/tab.bar.button.styles";

interface Props {
  mode: "default" | "square";
  index: number;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  options: BottomTabNavigationOptions;
  inactiveTintColor?: string;
  activeTintColor?: string;
  springConfig?: WithSpringConfig;
  focusedButtonStyle?: StyleProp<any>;
}

export const defaultSpringConfig: WithSpringConfig = {
  damping: 30,
  mass: 0.7,
  stiffness: 250,
};

export const BarButton: React.FC<Props> = memo(
  ({
    isFocused,
    options,
    onPress,
    onLongPress,
    inactiveTintColor,
    focusedButtonStyle,
    springConfig,
  }) => {
    const animationValueThreshold = useSharedValue(0);

    useEffect(() => {
      if (isFocused) {
        animationValueThreshold.value = withSpring(
          0,
          springConfig || defaultSpringConfig
        );
      } else {
        animationValueThreshold.value = withSpring(
          1,
          springConfig || defaultSpringConfig
        );
      }
    }, [isFocused, animationValueThreshold, springConfig]);

    const animatedStyles = useAnimatedStyle(() => {
      return {
        opacity: animationValueThreshold.value,
        transform: [
          {
            scale: animationValueThreshold.value,
          },
        ],
      };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(animationValueThreshold.value, [2, 1], [0, 1]),
      };
    });

    return (
      <View style={style.wrapper}>
        <Animated.View style={animatedStyles}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[style.unfocusedButton, isFocused ? focusedButtonStyle : {}]}
            onLongPress={onLongPress}
          >
            <View style={style.tabBarLabelWrapper}>
              {options.tabBarIcon && !isFocused ? (
                options.tabBarIcon({
                  focused: isFocused,
                  color: inactiveTintColor || "white",
                  size: 28,
                })
              ) : (
                <View />
              )}
              {options.tabBarLabel && (
                <Animated.Text
                  style={[
                    {
                      marginTop: 2,
                      color: inactiveTintColor,
                    },
                    textAnimatedStyle,
                    options.tabBarLabelStyle,
                  ]}
                >
                  {options.tabBarLabel}
                </Animated.Text>
              )}
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
);

export const TabBarButton: React.FC<Props> = memo(
  ({
    isFocused,
    options,
    onPress,
    onLongPress,
    activeTintColor,
    springConfig,
    focusedButtonStyle,
    mode,
  }) => {
    const animationValueThreshold = useSharedValue(0);

    useEffect(() => {
      if (isFocused) {
        animationValueThreshold.value = withSpring(
          0,
          springConfig || defaultSpringConfig
        );
      } else {
        animationValueThreshold.value = withSpring(
          1,
          springConfig || defaultSpringConfig
        );
      }
    }, [isFocused, animationValueThreshold, springConfig]);

    const animatedStyles1 = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              animationValueThreshold.value,
              [0, 1],
              [-18, 100]
            ),
          },
        ],
      };
    });

    return (
      <View style={style.wrapper}>
        {/* <View
          style={{
            backgroundColor: "red",
            width: 100,
            height: 100,
            marginLeft: 10,
            zIndex: 100,
          }}
        ></View> */}
        <Animated.View
          style={[
            animatedStyles1,
            { backgroundColor: "green" },
            style.focusedButton,
          ]}
        >
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[
              {
                ...style.focusedButton,
                ...(mode === "square" ? style.squareFocusedButton : {}),
                backgroundColor: activeTintColor || "red",
              },
              isFocused ? focusedButtonStyle : {},
            ]}
            onLongPress={onLongPress}
          >
            {options.tabBarIcon
              ? options.tabBarIcon({
                  focused: isFocused,
                  color: "white",
                  size: 28,
                })
              : null}
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
);

export default TabBarButton;

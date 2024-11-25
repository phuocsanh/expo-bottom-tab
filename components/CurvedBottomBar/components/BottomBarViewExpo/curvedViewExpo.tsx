import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { StyleProp } from "react-native";
import { ViewStyle } from "react-native";

interface ICurvedView {
  style?: StyleProp<ViewStyle>;
  width: number;
  height: number;
  bgColor: string;
  path: any;
  borderColor?: string;
  borderWidth?: number;
}

export type CurvedView = React.FC<ICurvedView>;
const CurvedContainer: CurvedView = (props) => {
  const { style, width, height, bgColor, path, borderColor, borderWidth } =
    props;

  const border =
    borderWidth && borderWidth > 0
      ? { stroke: borderColor, strokeWidth: borderWidth }
      : {};

  return (
    <View style={style}>
      <Svg width={width} height={height}>
        <Path fill={bgColor} {...{ d: path }} {...border} />
      </Svg>
    </View>
  );
};

export const CurvedViewExpoComponent: CurvedView = React.memo(CurvedContainer);

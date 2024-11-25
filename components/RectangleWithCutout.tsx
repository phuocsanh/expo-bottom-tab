import React from "react";
import { View, Dimensions } from "react-native";
import {
  Svg,
  Path,
  G,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeBlend,
} from "react-native-svg";

// Lấy kích thước màn hình
const { width } = Dimensions.get("window");

const RectangleWithRoundedCutout = () => {
  // Tính toán lại width và height của filter dựa trên kích thước màn hình
  const filterWidth = width * 1.2; // Ví dụ: mở rộng một chút so với chiều rộng của màn hình
  const filterHeight = (filterWidth * 157) / 390; // Giữ tỷ lệ giống như của SVG

  const svgHeight = (width * 157) / 390; // Tính chiều cao của SVG

  return (
    <View
      style={{
        backgroundColor: "green",
        height: svgHeight, // Đặt chiều cao cho View để phù hợp với SVG
      }}
    >
      <Svg
        width={width}
        height={svgHeight}
        viewBox="0 0 390 157" // Đảm bảo rằng viewBox giữ đúng tỷ lệ của SVG
        fill="none"
      >
        <G filter={`url(#filter0_d_2165_6951)`}>
          <Path
            d="M1 69.0361C1 58.5228 10.2886 50 21.7467 50H142.081C148.833 50 154.482 51.7431 158.5 56.7216C166.751 66.9436 174.775 82.5 196.5 82.5C218.264 82.5 224.805 66.9468 233.348 56.7216C237.455 51.8048 243.204 50 249.956 50H369.253C380.711 50 390 58.5228 390 69.0361V129H1V69.0361Z"
            fill="white"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_d_2165_6951"
            x="-39"
            y="0"
            width={filterWidth}
            height={filterHeight}
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <FeOffset dy="-10" />
            <FeGaussianBlur stdDeviation="20" />
            <FeColorMatrix
              type="matrix"
              values="0 0 0 0 0.584583 0 0 0 0 0.660451 0 0 0 0 0.766667 0 0 0 0.15 0"
            />
            <FeBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2165_6951"
            />
            <FeBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2165_6951"
              result="shape"
            />
          </Filter>
        </Defs>
      </Svg>
    </View>
  );
};

export default RectangleWithRoundedCutout;

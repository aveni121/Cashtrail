import React from "react";
import { Text as RNText, TextProps } from "react-native";
import theme from "../theme";

type Props = TextProps & {
  variant?: keyof typeof theme.typography.sizes;
  weight?: keyof typeof theme.typography.fonts;
};

const Text = ({
  variant = "md",
  weight = "regular",
  style,
  ...props
}: Props) => {
  return (
    <RNText
      style={[
        {
          fontSize: theme.typography.sizes[variant],
          fontFamily: theme.typography.fonts[weight],
          color: theme.colors.text,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Text;

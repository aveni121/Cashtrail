import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../theme";

type Props = {
  title: string;
  backgroundColor: keyof typeof theme.colors;
  onPress: () => void;
  style: object;
};

const Button = ({ title, backgroundColor, onPress, style }: Props) => (
  <TouchableOpacity
    style={{
      backgroundColor: theme.colors[backgroundColor],
      padding: theme.spacing.md,
      borderRadius: theme.spacing.sm,
      alignItems: "center",
      ...style,
    }}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "600",
  },
});

export default Button;

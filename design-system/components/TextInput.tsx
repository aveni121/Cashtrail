import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
} from "react-native";
import theme from "../theme";

type Props = RNTextInputProps & {};

const TextInput = ({ ...props }: Props) => {
  return (
    <RNTextInput
      style={[styles.input]}
      placeholderTextColor={theme.colors.muted}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: theme.colors.text,
    height: 48,
    borderWidth: 2,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.spacing.sm,
    fontSize: theme.typography.sizes.md,
  },
});

export default TextInput;

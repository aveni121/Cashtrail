import { View as RNView, ViewProps as RNViewProps } from "react-native";
import theme from "../theme";

type ViewProps = RNViewProps & {
  padding?: keyof typeof theme.spacing;
  backgroundColor?: keyof typeof theme.colors;
};

export default function View({
  padding,
  backgroundColor,
  style,
  ...props
}: ViewProps) {
  return (
    <RNView
      style={[
        padding && { padding: theme.spacing[padding] },
        backgroundColor && { backgroundColor: theme.colors[backgroundColor] },
        style,
      ]}
      {...props}
    />
  );
}

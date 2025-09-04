import View from "@/design-system/components/View";
import theme from "@/design-system/theme";
import React from "react";
import TextInput from "../TextInput";

type TableProps = {
  children:
    | React.ReactElement<typeof Header>
    | React.ReactElement<typeof Header>[]
    | React.ReactElement<typeof Row>
    | React.ReactElement<typeof Row>[];
};

const Table = ({ children }: TableProps) => {
  return <View>{children}</View>;
};

type CellProps = {
  children: React.ReactElement | React.ReactElement[];
};

const Cell = ({ children }: CellProps) => {
  return <View style={{ flex: 2 }}>{children}</View>;
};

type HeaderProps = {
  children: React.ReactElement<typeof Cell> | React.ReactElement<typeof Cell>[];
};

const Header = ({ children }: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: theme.colors.surface,
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.sm,
      }}
    >
      {children}
    </View>
  );
};

type RowProps = {
  children: React.ReactElement<typeof Cell> | React.ReactElement<typeof Cell>[];
};
const Row = ({ children }: RowProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: theme.colors.border,
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.sm,
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </View>
  );
};

type TextProps = {
  value: string;
  color?: string;
  textAlign?: "left" | "center" | "right";

  // Remove textAlign from props to inherit from parent
};

const Text = ({ value, color, textAlign }: TextProps) => {
  return (
    <TextInput
      value={value}
      editable={false}
      style={{
        backgroundColor: "transparent",
        borderWidth: 0,
        color: color ? color : theme.colors.text,
        fontSize: theme.typography.sizes.sm,
        textAlign: textAlign ? textAlign : "left",
      }}
    />
  );
};

type SubTextProps = {
  value: string;
  color?: string;
  textAlign?: "left" | "center" | "right";

  // Optionally, you can still allow children if needed
  // children?: React.ReactNode;
};
const SubText = ({ value, color, textAlign }: SubTextProps) => {
  return (
    <TextInput
      value={value}
      editable={false}
      style={{
        backgroundColor: "transparent",
        borderWidth: 0,
        color: color ? color : theme.colors.text,
        fontSize: theme.typography.sizes.xs,
        textAlign: textAlign ? textAlign : "left",
      }}
    />
  );
};

type HeaderTextProps = {
  value: string;
  color?: string;
  textAlign?: "left" | "center" | "right";

  // Optionally, you can still allow children if needed
  // children?: React.ReactNode;
};
const HeaderText = ({ value, color, textAlign }: HeaderTextProps) => {
  return (
    <TextInput
      value={value}
      editable={false}
      style={{
        backgroundColor: "transparent",
        borderWidth: 0,
        color: color ? color : theme.colors.text,
        fontSize: theme.typography.sizes.sm,
        textAlign: textAlign ? textAlign : "left",
        fontWeight: "bold",
      }}
    />
  );
};

Table.Header = Header;
Table.Row = Row;
Table.Cell = Cell;
Table.Text = Text;
Table.SubText = SubText;
Table.HeaderText = HeaderText;

export default Table;

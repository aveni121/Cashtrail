import React, { useState } from "react";
import { FlatList, Modal, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme";
import Text from "./Text";
import View from "./View";

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onValueChange,
  placeholder = "Select an option",
}) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel =
    options.find((option) => option.value === selectedValue)?.label ||
    placeholder;

  return (
    <View>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setVisible(true)}
        activeOpacity={0.7}
      >
        <Text
          style={{
            color: selectedValue ? theme.colors.text : theme.colors.muted,
          }}
        >
          {selectedLabel}
        </Text>
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)}
        >
          <View style={styles.dropdown}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    onValueChange(item.value);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.background,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    width: 250,
    backgroundColor: theme.colors.background,
    borderRadius: 8,
    paddingVertical: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  option: {
    padding: 14,
  },
  optionText: {
    fontSize: 16,
  },
});

export default Dropdown;

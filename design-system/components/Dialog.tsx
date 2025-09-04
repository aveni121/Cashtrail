import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
} from "react-native";
import themes from "../theme";

import Button from "./Button";
import Dropdown from "./Dropdown";
import Text from "./Text";
import TextInput from "./TextInput";
import View from "./View";

interface DialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onSubmit: (values: { name: string; email: string }) => void;
}

type FormValues = {
  date: string;
  merchant: string;
  category: string;
  subcategory: string;
  card: string;
  amount: number;
};

const Dialog: React.FC<DialogProps> = ({ open, title, onClose, onSubmit }) => {
  const getCurrentDate = () => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [input, setInput] = useState<FormValues>({
    date: getCurrentDate(),
  } as FormValues);

  const validateInput = () => {
    if (!input.date || !/^\d{4}-\d{2}-\d{2}$/.test(input.date)) {
      return "Please enter a valid date (YYYY-MM-DD).";
    }
    if (!input.merchant || input.merchant.trim() === "") {
      return "Merchant is required.";
    }
    if (!input.category || input.category.trim() === "") {
      return "Category is required.";
    }
    if (!input.subcategory || input.subcategory.trim() === "") {
      return "Subcategory is required.";
    }
    if (!input.card || input.card.trim() === "") {
      return "Card is required.";
    }
    if (
      typeof input.amount !== "number" ||
      isNaN(input.amount) ||
      input.amount <= 0
    ) {
      return "Amount must be a positive number.";
    }
    return null;
  };

  const handleSubmit = () => {
    const error = validateInput();
    if (error) {
      // You can use an alert or set an error state to display the error
      alert(error);
      return;
    }
    onClose();
  };

  const handleValueChange = <K extends keyof FormValues>(
    field: K,
    value: FormValues[K]
  ) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Date</Text>
                <TextInput
                  value={input.date}
                  onChangeText={(e) => handleValueChange("date", e)}
                  placeholder="YYYY-MM-DD"
                  required
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Merchant</Text>
                <TextInput
                  value={input.merchant}
                  onChangeText={(e) => handleValueChange("merchant", e)}
                  placeholder="Enter merchant"
                  autoCapitalize="none"
                  required
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Category</Text>
                <Dropdown
                  options={[{ value: "Income", label: "Income" }]}
                  selectedValue={input.category}
                  onValueChange={(e) => handleValueChange("category", e)}
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Subcategory</Text>
                <TextInput
                  value={input.subcategory}
                  onChangeText={(e) => handleValueChange("subcategory", e)}
                  placeholder="Enter merchant"
                  autoCapitalize="none"
                  required
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Card</Text>
                <TextInput
                  value={input.card}
                  onChangeText={(e) => handleValueChange("card", e)}
                  placeholder="Enter card (ex. Visa, MasterCard)"
                  autoCapitalize="none"
                  required
                />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                  value={input.amount ? input.amount.toString() : "0"}
                  onChangeText={(e) =>
                    handleValueChange("amount", parseFloat(e) || 0)
                  }
                  placeholder="Enter amount"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  inputMode="numeric"
                  required
                />
              </View>
              <View style={styles.buttonRow}>
                <Button
                  title="Cancel"
                  onPress={onClose}
                  backgroundColor="surface"
                />
                <Button
                  title="Submit"
                  onPress={handleSubmit}
                  backgroundColor="primary"
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: themes.colors.background,
    borderRadius: 8,
    padding: 24,
    minWidth: 320,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    color: themes.colors.text,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: themes.colors.text,
    marginBottom: 4,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 8,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginLeft: 8,
    color: themes.colors.text,
    backgroundColor: themes.colors.primary,
    borderRadius: 4,
  },
});

export default Dialog;

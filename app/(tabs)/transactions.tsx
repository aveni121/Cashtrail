import TransactionsTable from "@/components/TransactionsTable/TransactionsTable";
import Button from "@/design-system/components/Button";
import Dialog from "@/design-system/components/Dialog";
import TextInput from "@/design-system/components/TextInput";
import View from "@/design-system/components/View";
import theme from "@/design-system/theme";
import { useState } from "react";

export default function Transactions() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = ({ name, email }: { name: string; email: string }) => {
    setModalVisible(false);
    console.log("Modal submitted", name, email);
  };

  const handleClose = () => {
    setModalVisible(false);
    console.log("Modal closed");
  };
  return (
    <View backgroundColor="background" style={{ flex: 1 }}>
      <Dialog
        open={isModalVisible}
        title="Add Transaction"
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <View
        style={{
          flexDirection: "row",
          gap: theme.spacing.sm,
        }}
      >
        <TextInput placeholder="Search..." />
        <Button
          style={{ flexBasis: "20%", backgroundColor: theme.colors.primary }}
          title="+"
          onPress={() => setModalVisible(true)}
          backgroundColor="primary"
        />
      </View>
      <TransactionsTable />
    </View>
  );
}

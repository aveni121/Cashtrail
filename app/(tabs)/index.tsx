import Text from "@/design-system/components/Text";
import View from "@/design-system/components/View";
import { useState } from "react";

export default function Index() {
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
    <View
      backgroundColor="background"
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Overview</Text>
    </View>
  );
}

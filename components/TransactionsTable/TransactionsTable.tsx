import Table from "@/design-system/components/Table/Table";
import View from "@/design-system/components/View";
import theme from "@/design-system/theme";
import React from "react";

const TransactionsTable = () => {
  return (
    <View
      style={{
        marginTop: theme.spacing.lg,
        borderWidth: 1,
        borderColor: theme.colors.border,
        borderRadius: theme.spacing.sm,
        overflow: "hidden",
      }}
    >
      {/* Table Header */}
      <Table>
        <Table.Header>
          <Table.Cell>
            <Table.HeaderText value="Transactions" />
          </Table.Cell>
        </Table.Header>
        <Table.Row>
          <Table.Cell>
            <Table.Text value="IBM" textAlign="left" />
            <Table.SubText value="Income • Salary" textAlign="left" />
            <Table.SubText value="2025-06-30" textAlign="left" />
          </Table.Cell>
          <Table.Cell>
            <Table.Text
              value="+4180.00"
              color={theme.colors.success}
              textAlign="right"
            />
            <Table.SubText value="Bank Of America" textAlign="right" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Table.Text value="Kaiser Permanente" textAlign="left" />
            <Table.SubText
              value="Variable Expense • Medical"
              textAlign="left"
            />
            <Table.SubText value="2025-06-30" textAlign="left" />
          </Table.Cell>
          <Table.Cell>
            <Table.Text
              value="-30.00"
              color={theme.colors.danger}
              textAlign="right"
            />
            <Table.SubText value="CapitalOne" textAlign="right" />
          </Table.Cell>
        </Table.Row>
      </Table>
    </View>
  );
};

export default TransactionsTable;

import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate App scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="BEgin static typng learning" />
      <AddNewItem
        toggleButtonText="+ add another card"
        onAdd={() => console.log("New Item added")}
        dark
      />
    </ColumnContainer>
  );
};

import * as b from "bobril";

export interface IItem {
  id: number;
  text: string;
  done: boolean;
}

export interface IItemData extends IItem {
  index: number;
  onItemChecked(index: number, value: boolean): void;
}
export function ListItem(data: IItemData): b.IBobrilNode {
  return (
    <li key={data.id} style={data.done && strikeOut}>
      <input
        type="checkbox"
        value={data.done}
        onChange={value => data.onItemChecked(data.index, value)}
      />
      {data.text}
    </li>
  );
}

const strikeOut = b.styleDef({ textDecoration: "line-through" });

import * as b from "bobril";
import { theme } from "./contextProvider";

export function ColorConsumer() {
  const color = b.useContext(theme);

  return <div style={{ color: color.color }}>I am colored as defined in context</div>;
}

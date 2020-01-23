import * as b from "bobril";
import { ColorConsumer } from "./contextConsumer";

export const theme = b.createContext({
  color: "blue"
});

export function ContextProvider() {
  b.useProvideContext(theme, {
    color: "red"
  });

  return <ColorConsumer />;
}

import * as b from "bobril";
import { observable } from "bobx";

class Counter {
  @observable
  count: number = 0;
}

export function StoreCounter() {
  const store = b.useStore(() => new Counter());
  return (
    <div
      onClick={() => {
        store.count = store.count + 1;
        return true;
      }}
    >
      Number of click: {store.count}
    </div>
  );
}

import * as b from "bobril";

function useCursorCoordinates() {
  const [x, setX] = b.useState(0);
  const [y, setY] = b.useState(0);
  b.useEffect(() => {
    function handler(ev) {
      setX(ev.clientX);
      setY(ev.clientY);
    }
    document.body.addEventListener("mousemove", handler);
    return () => document.body.removeEventListener("mousemove", handler);
  }, []);

  return [x, y];
}

export function Coordinates(props) {
  const [x, y] = useCursorCoordinates();
  return (
    <div>
      {props.children}
      <div>
        Coordinates are: {x}, {y}
      </div>
    </div>
  );
}

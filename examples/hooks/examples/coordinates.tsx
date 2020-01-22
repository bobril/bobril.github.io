import * as b from "bobril";

function useCursorCoordinates() {
  const [x, setX] = b.useState(0);
  const [y, setY] = b.useState(0);
  b.useCaptureEvents({
    onPointerMove(event: b.IBobrilPointerEvent): b.GenericEventResult {
      setX(event.x);
      setY(event.y);
      return b.EventResult.HandledButRunDefault;
    }
  });

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

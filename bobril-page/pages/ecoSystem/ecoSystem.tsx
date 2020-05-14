import * as b from "bobril";
import { Container } from "bobrilstrap";
import { Content } from "./content";

export const pageInfo = {
  route: b.route({
    name: "eco-system",
    url: "eco-system",
    handler: () => <EcoSystem />,
  }),
};

export class EcoSystem extends b.Component<{}> {
  render(): b.IBobrilChildren {
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

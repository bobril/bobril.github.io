import * as b from "bobril";
import { Container, Col, Size } from "bobrilstrap";
import { Content, content } from "./content";
import { SideBar } from "../sidebar/sidebar";
import { buildPageRoute } from "../generateUtils/routebuilder";

export const pageInfo = buildPageRoute(
  {
    name: "theory",
    url: "theory",
    handler: () => <Theory />,
  },
  content
);

export class Theory extends b.Component<{}> {
  render(): b.IBobrilChildren {
    return (
      <Container>
        <Col size={Size.Sm} span={9}>
          <Content />
        </Col>
        <Col size={Size.Sm} span={3}>
          <SideBar
            items={pageInfo.item.subs!}
            topTargetId={pageInfo.route.name + "-top"}
          />
        </Col>
      </Container>
    );
  }
}

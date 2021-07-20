import * as b from "bobril";
import { Container } from "bobrilstrap";
import { buildPageRoute } from "../generateUtils/routebuilder";
import { observable } from "bobx";
import marked from "marked";

export const pageInfo = buildPageRoute(
  {
    name: "changelog",
    url: "changelog",
    handler: () => <Changelog />
  },
  <></>
);

export class Changelog extends b.Component<{}> {
  @observable
  htmlContent: string = "";

  init(): void {
    b.swallowPromise(this.loadChangeLog());
  }
  render(): b.IBobrilChildren {
    return <Container>{{ tag: "/", children: this.htmlContent }}</Container>;
  }

  private async loadChangeLog(): Promise<void> {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Bobris/Bobril/master/CHANGELOG.md"
      );
      this.htmlContent = marked(await response.text());
    } catch (err) {
      console.log(err);
    }
  }
}

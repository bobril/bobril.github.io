import * as b from "bobril";
import { PageOne } from "./pages/pageOne";
import { PageTwo } from "./pages/pageTwo";
import { MainPage } from "./pages/main";

b.routes(
    b.route({ handler: data => <MainPage {...data} /> }, [
        b.route({ url: "/one", name: "one", handler: data => <PageOne {...data} /> }),
        b.route({
            url: "/two/:text?",
            name: "two",
            data: { readOnly: false },
            handler: data => <PageTwo {...data} />
        }),
        b.route({
            url: "/twoReadOnly/:text?",
            name: "twoReadOnly",
            data: { readOnly: true },
            handler: data => <PageTwo {...data} />,
            keyBuilder: keyBuilder
        }),
        b.routeDefault({ handler: data => <PageOne {...data} /> })
    ])
);

function keyBuilder(params: b.Params): string {
    if (params.text) {
        return params.text;
    }
    throw new Error("Route parameter doesn't exist ");
}

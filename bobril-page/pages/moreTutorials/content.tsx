import * as b from "bobril";

export class Content extends b.Component {
  static id: string = "more-tutorials";
  render(): b.IBobrilChildren {
    return content;
  }
}

export const content: b.IBobrilNode = <><h1 id="more-tutorials">{`More tutorials`}</h1>
<p>{`Explore more possibilities offered by bobril and its additional packages.`}</p>
<h2 id="nesting-components">{`Nesting Components`}</h2>
<h3 id="simple-nesting">{`Simple nesting`}</h3>
<p>{`Some components are created just because to wrap some other components (to add styling, additional functionality etc.). To deal with nesting in components tree there is a special `}<code>input data</code>{` property `}<code>children</code>{`. It can be defined manually as in example or inherited from interface `}<code>b.IDataWithChildren</code>{`.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";

interface IHelloData {
  name: string;
  children: b.IBobrilChildren;
}

class Hello extends b.Component<IHelloData> {
  render(): b.IBobrilChildren {
    return (
      <>
        <h1>Hello {this.data.name}</h1>
        {this.data.children}
      </>
    );
  }
}

b.init(() => (
  <Hello name="Developer">
    <p>
      This is your first <strong>bobril</strong> application.
    </p>
  </Hello>
));
`}</code></pre>
<p><a href="./static-examples/hello-with-children/index.html">{`Preview example`}</a></p>
<h3 id="better-todo-with-slots-for-layout">{`Better Todo with slots for layout`}</h3>
<p>{`Next example improves previous Todo example and shows more complex implementation with special component for Layout.`}</p>
<p>{`Following list allows to check state of task in todo list. `}<code>Checked</code>{` event is delegated up with callback `}<code>onItemChecked</code>{` in `}<code>input data</code>{`.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { ListItem, IItem } from "./listItem";

export interface IListData {
  items: IItem[];
  onItemChecked(index: number, value: boolean): void;
}

export function List(data: IListData): b.IBobrilNode {
  return (
    <ul style={noBullets}>
      {data.items.map((item, index) => (
        <ListItem {...item} index={index} onItemChecked={data.onItemChecked} />
      ))}
    </ul>
  );
}

const noBullets = b.styleDef({ listStyleType: "none" });
`}</code></pre>
<p><code>ListItem</code>{` component reflects the `}<code>done</code>{` state with conditional apply of `}<code>strikeOut</code>{` style.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";

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
`}</code></pre>
<p>{`Form is the same as in previous example.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";

export interface IFormData {
  onSubmit(value: string): void;
}

export class Form extends b.Component<IFormData> {
  private _value: string = "";

  render(): b.IBobrilChildren {
    return (
      <>
        <input
          type="text"
          value={this._value}
          onChange={newValue => this.updateValue(newValue)}
          onKeyUp={ev => ev.which === 13 && this.submit()}
          style={spaceOnRight}
        />
        <button onClick={() => this.submit()}>OK</button>
      </>
    );
  }

  private updateValue(newValue: string): void {
    this._value = newValue;
    b.invalidate(this);
  }

  private submit(): boolean {
    this.data.onSubmit(this._value);
    this._value = "";
    b.invalidate(this);
    return true;
  }
}

const spaceOnRight = b.styleDef({ marginRight: 5 });
`}</code></pre>
<p>{`Finally we come to layout component. It defines its `}<code>children</code>{` as object with properties of type `}<code>b.IBobrilChildren</code>{` for each specific part instead of one main `}<code>b.IBobrilChildren</code>{`. Properties are accessible in `}<code>input data</code>{` object in property `}<code>children</code>{`.`}</p>
 

<pre><code class="language-tsx">{`import * as b from "bobril";

export interface ILayoutData {
  children: {
    header: b.IBobrilChildren;
    body: b.IBobrilChildren;
    footer: b.IBobrilChildren;
  };
}

export function Layout(data: ILayoutData): b.IBobrilNode {
  return (
    <>
      <div>{data.children.header}</div>
      <div>{data.children.body}</div>
      <div>{data.children.footer}</div>
    </>
  );
}
`}</code></pre>
<p>{`Now the layout can be used in `}<em>{`index.tsx`}</em>{`. This pattern for layout is called `}<code>named slots projection</code>{`.`}</p>
<p>{`There is also new function `}<code>edit</code>{` for editing the current state of Todo Item.`}</p>
 

<pre><code class="language-tsx">{`import * as b from "bobril";
import { Layout } from "./components/layout";
import { List } from "./components/list";
import { Form } from "./components/form";
import { IItem } from "./components/listItem";

class Todo extends b.Component {
  private _todos: IItem[] = [];

  render(): b.IBobrilChildren {
    return (
      <Layout>
        {{
          header: <h1>TODO</h1>,
          body: (
            <List
              items={this._todos}
              onItemChecked={(index, value) => this.edit(index, value)}
            />
          ),
          footer: <Form onSubmit={text => this.add(text)} />
        }}
      </Layout>
    );
  }

  private add(text: string): void {
    this._todos.push({ id: Date.now(), text, done: false });
    b.invalidate(this);
  }

  private edit(index: number, value: boolean): void {
    this._todos[index].done = value;
    b.invalidate(this);
  }
}

b.init(() => <Todo />);
`}</code></pre>
<p><a href="./static-examples/todo-advanced/index.html">{`Preview example`}</a></p>
<h2 id="maintain-state-with-bobx">{`Maintain state with BobX`}</h2>
<p>{`There is no special logic for maintaining the state in previous examples and reactions for any event is triggered manually with `}<code>b.invalidate</code>{`.`}</p>
<p>{`To remove those duplicate calls and make state really reactive and maintainable there exists `}<code>BobX</code>{` library. It uses `}<code>observable</code>{` pattern and works the same way as the original `}<code>mobx</code>{` but with few improvements.`}</p>
<h3 id="installation">{`Installation`}</h3>
<p><code>BobX</code>{` is standard npm package so just type in your terminal:`}</p>
<pre><code class="language-bash">{`npm i bobx --save`}</code></pre>
<h3 id="bobx-store">{`BobX store`}</h3>
<p>{`It is a good practice too keep domain data standalone from view. Following example shows how to change previous Todo application to use bobx.`}</p>
<p>{`Next code defines `}<code>TodoStore</code>{` with private list of `}<code>_todos</code>{`. This property is decorated with `}<code>@observable</code>{` decorator. Every bobril node created from component which reads `}<code>_todos</code>{` in its render `}<em>{`(observer)`}</em>{` is automatically re-rendered on any change of `}<code>_todos</code>{` `}<em>{`(observable subject)`}</em>{`.`}</p>


<pre><code class="language-tsx">{`import { observable } from "bobx";
import { IItem } from "./components/listItem";

export class TodoStore {
  @observable
  private _todos: IItem[] = [];

  get list(): IItem[] {
    return this._todos;
  }

  add(text: string): void {
    this._todos.push({ id: Date.now(), text, done: false });
  }

  edit(index: number, value: boolean): void {
    this._todos[index].done = value;
  }
}
`}</code></pre>
<p>{`Such store is ready to be used in main component of Todo application.`}</p>
 

<pre><code class="language-tsx">{`import * as b from "bobril";
import { Layout } from "./components/layout";
import { List } from "./components/list";
import { Form } from "./components/form";
import { TodoStore } from "./store";

class Todo extends b.Component {
  todos = new TodoStore();

  render(): b.IBobrilChildren {
    return (
      <Layout>
        {{
          header: <h1>TODO</h1>,
          body: (
            <List
              items={this.todos.list}
              onItemChecked={(index, value) => this.todos.edit(index, value)}
            />
          ),
          footer: <Form onSubmit={text => this.todos.add(text)} />
        }}
      </Layout>
    );
  }
}

b.init(() => <Todo />);
`}</code></pre>
<p><a href="./static-examples/todo-advanced-bobx/index.html">{`Preview example`}</a></p>
<h3 id="basic-optimizations">{`Basic optimizations`}</h3>
<p><code>BobX</code>{` provides several strategies to optimize watching of observable subjects to watch only what is really needed. Those are basic tools:`}</p>
<p><code>@observable</code>{` - watches objects recursively - it stops recursion only on property with prototype (class objects)`}</p>
<p><code>@observable.shallow</code>{` - watches objects reference and only first level of properties`}</p>
<p><code>@observable.ref</code>{` - watches objects only reference level`}</p>
<p><code>@computed</code>{` - special decorator creating memoization on getter using just `}<code>observable</code>{` values for its computation`}</p>
<h2 id="testing">{`Testing`}</h2>
<p><code>Bobril-build</code>{` provides automatic run of tests out-of-the box.`}</p>
<p>{`The only condition is to have test files named with postfix `}<em>*{`spec.ts`}</em></p>
<p>{`It has automatically referenced type definitions for `}<code>jasmine</code>{` framework and run all tests on every rebuild. Results can be found in terminal.`}</p>
 

<pre><code class="language-tsx">{`import { TodoStore } from "./store";

describe("Todo store", () => {
  let store: TodoStore;

  beforeEach(() => (store = new TodoStore()));

  describe("edit", () => {
    it("should change state of item with new value just on specific index", () => {
      store.add("first");
      store.add("second");

      store.edit(1, true);

      expect(store.list[0].done).toBeFalsy();
      expect(store.list[1].done).toBeTruthy();
    });
  });
});
`}</code></pre>
<h2 id="routing">{`Routing`}</h2>
<h3 id="defining-routes">{`Defining Routes`}</h3>
<p>{`Bobril has few methods for defining the application route tree:`}</p>
<ul>
<li><code>b.route</code>{` - defines a route url, name, handler and a list of sub-routes`}</li>
<li><code>b.routes</code>{` - registers routes to the application and calls `}<code>b.init</code></li>
<li><code>b.routeDefault</code>{` - defines the default route if no sub-route is specified in the current url`}</li>
</ul>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { PageOne } from "./pages/pageOne";
import { PageTwo } from "./pages/pageTwo";
import { MainPage } from "./pages/main";

b.routes(
  b.route({ handler: data => <MainPage {...data} /> }, [
    b.route({ url: "/one", name: "one", handler: data => <PageOne {...data} /> }),
    b.route({ url: "/two/:text?", name: "two", handler: data => <PageTwo {...data} /> }),
    b.routeDefault({ handler: data => <PageOne {...data} /> })
  ])
);
`}</code></pre>
<p><a href="./static-examples/routing/index.html">{`Preview example`}</a></p>
<p>{`The whole application will be handled by a handler `}<code>MainPage</code>{` with sub-routes `}<em>{`one`}</em>{` and `}<em>{`two`}</em>{` on urls `}<code>/one</code>{` and `}<code>/two/</code>{` handled by handlers `}<code>PageOne</code>{` and `}<code>PageTwo</code>{` and the default handler `}<code>PageOne</code>{` will be used when no sub-route is specified.`}</p>
<p>{`The url for page `}<em>{`two`}</em>{` contains a parameter specification after a second slash. It is defined by a `}<strong>{`colon`}</strong>{` and a `}<strong>{`name`}</strong>{` of the parameter. The `}<strong>{`question mark`}</strong>{` defines the parameter as optional. Route parameters can then be found in the input data prpoerty `}<code>routeParams</code>{`.`}</p>
<h3 id="handling-routes">{`Handling Routes`}</h3>
<p>{`Now we will write a `}<code>MainPage</code>{` component to render some own content and the visual content of the active sub-route. To do this a function provided in `}<code>data.activeRouteHandler</code>{` is used.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";

export let loggedIn = false;

export class MainPage extends b.Component<b.IRouteHandlerData> {
  render(): b.IBobrilNode {
    return (
      <>
        <h1>Routing</h1>
        <p>
          Logged In:
          <input type="checkbox" value={loggedIn} onChange={value => (loggedIn = value)} />
        </p>
        <hr />
        {this.data.activeRouteHandler()}
      </>
    );
  }
}
`}</code></pre>
<p>{`This component renders a header, a line and the visual content of current active sub-route.`}</p>
<h3 id="transitions">{`Transitions`}</h3>
<p>{`Other part is to define sub-pages and transitions between those pages. Bobril offers the following functions and interface to define and run transitions between routes:`}</p>
<ul>
<li><code>b.IRouteTransition</code>{` - interface for a transition definition (target name, parameters etc.)`}</li>
<li><code>b.createRedirectReplace</code>{` - creates IRouteTransition object for redirect without saving history`}</li>
<li><code>b.createRedirectPush</code>{` - creates IRouteTransition object for redirect with saving history`}</li>
<li><code>b.runTransition</code>{` - runs a transition according to an input IRouteTransition object`}</li>
<li><code>b.link</code>{` - changes an input IBobrilNode to a link to the route of a specified name and with specified optional params`}</li>
<li><code>&lt;Link&gt;</code>{` - b.link functiona s a `}<code>component</code></li>
</ul>
<p>{`Example of the redirect definition from the `}<code>PageOne</code>{` to the `}<code>PageTwo</code>{`:`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { observable } from "bobx";

export class PageOne extends b.Component {
  @observable private _text: string = "";

  render(): b.IBobrilNode {
    return (
      <>
        <input type="text" value={this._text} onChange={newVal => (this._text = newVal)} />
        <button onClick={() => b.runTransition(b.createRedirectPush("two", { text: this._text }))}>
          Confirm
        </button>
      </>
    );
  }
  canDeactivate(): b.IRouteCanResult {
    return !!this._text.trim() || confirm("The textbox is empty. Are you sure?");
  }
}
`}</code></pre>
<p>{`The code in onClick callback of button creates and runs a transition to the page `}<em>{`two`}</em>{` with an object defining the value of a `}<em>{`text`}</em>{` parameter.`}</p>
<p>{`The transition above should be handled by the `}<code>PageTwo</code>{` handler.`}</p>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { Link } from "bobril";
import { loggedIn } from "./main";

export interface IPageTwoData extends b.IRouteHandlerData {
  routeParams: { text?: string };
}

export class PageTwo extends b.Component<IPageTwoData> {
  static canActivate(): b.IRouteCanResult {
    if (loggedIn) {
      return true;
    }

    alert("You are not logged in!");
    return b.createRedirectReplace("one");
  }

  render(): b.IBobrilNode {
    return (
      <>
        <p>Your text: {this.data.routeParams.text || "nothing"}</p>
        <Link name="one">
          <a>Go Home</a>
        </Link>
      </>
    );
  }
}
`}</code></pre>
<p>{`The page receives the text parameter value in its `}<code>data.routeParams.text</code>{`. It also defines a link node to the page `}<em>{`one`}</em>{` by `}<code>&lt;Link name=&quot;one&quot;&gt;</code>{` around `}<code>&lt;a&gt;</code>{` element.`}</p>
<h3 id="transition-availability">{`Transition Availability`}</h3>
<p>{`The example also contains codes determining the possibility to enter or leave the page. For these purposes, we can use the following static functions of `}<code>IBobrilComponent</code>{`:`}</p>
<ul>
<li><code>static canActivate</code>{` - It can stop the current transition in a target handler by returning false or redirect to the new specified transition`}</li>
<li><code>canDeactivate</code>{` - Can stop the current transition in the a source handler by returning false or redirect to the new specified transition`}</li>
</ul>
<p>{`The previous code also contains example, which handles leaving the page `}<em>{`one`}</em>{` with empty value of a textbox by adding `}<em>{`canDeactivate`}</em>{` function and example of handling the not logged user on accessing the page `}<em>{`two`}</em>{` by adding `}<code>static canActivate</code>{` function definition.`}</p>
<h2 id="localizations-and-formatting">{`Localizations and Formatting`}</h2>
<p>{`Bobril applications can have localized or formatted content with culture specifics. `}</p>
<h3 id="globalization-package">{`Globalization package`}</h3>
<p>{`Bobril eco-system contains globalization package `}<code>bobril-g11n</code>{` to deal with localizations and formatting. It has to be added as a dependency to project.`}</p>
<pre><code class="language-bash">{`npm i bobril-g11n --save`}</code></pre>
<h3 id="start-globalization">{`Start globalization`}</h3>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { MainPage } from "./mainPage";
import { initGlobalization } from "bobril-g11n";

initGlobalization({ defaultLocale: "en-US" }).then(() => {
  b.routes(b.route({ handler: data => <MainPage {...data} /> }));
});
`}</code></pre>
<p>{`This code imports and calls `}<code>initGlobalization</code>{` function. Its argument with interface `}<code>IG11NConfig</code>{` defines the default locale and optionally the function for getting the path to the localized files. `}<code>Bobril-build</code>{` is configured to generate the default localization file `}<em>{`en-US.js`}</em>{` directly to the root of the `}<em>{`dist`}</em>{` folder. The `}<code>initGlobalization</code>{` function returns a  `}<code>Promise object</code>{`. `}</p>
<p>{`Initialization of the application by `}<code>b.routes</code>{` has to be called in a fulfillment callback of this promise.`}</p>
<h3 id="locale-switching">{`Locale switching`}</h3>
<p>{`The example code changes the locale by `}<code>setLocale</code>{` and renders the page with specific translations. To get the current locale it uses the function `}<code>getLocale</code>{`.`}</p>


<pre><code class="language-tsx">{`import { getLocale, setLocale } from "bobril-g11n";

export function changeLocale(): void {
  setLocale(getLocale() === "en-US" ? "cs-CZ" : "en-US");
}
`}</code></pre>
<p><a href="./static-examples/translations/index.html">{`Preview example`}</a></p>
<h3 id="translations">{`Translations`}</h3>
<p>{`Translated content is defined by using the `}<code>t</code>{` function:`}</p>


<pre><code class="language-tsx">{`t("Hello World!");`}</code></pre>
<p><a href="./static-examples/translations/index.html">{`Preview example`}</a></p>
<p>{`The `}<code>t</code>{` function arguments are:`}</p>
<ol>
<li>{`message for input text/pattern`}</li>
<li>{`optional params object defining the values for the message pattern`}</li>
<li>{`optional hint`}</li>
</ol>
<p>{`Bobril-build takes all usages of `}<code>t(&quot;some string&quot;)</code>{` in code and replaces it by e.g. `}<code>t(125)</code>{` where `}<em>{`125`}</em>{` is the index of `}<code>&quot;some string&quot;</code>{` constant in the array of localized strings. This array is placed in every localization file and corresponds to the array in the generated `}<em>{`en-US.js.`}</em></p>
<p>{`To add a new localization definition just type the command:`}</p>
<pre><code class="language-bash">{`bb t -a cs-CZ
bb b -u 1`}</code></pre>
<p>{`The first command creates a new translation file `}<em>{`translations/cs-CZ.json`}</em>{`. The second command adds the missing translations from the default generated `}<em>{`en-US.js`}</em>{` to `}<em>{`cs-CZ.json`}</em>{` translation definition. The content of the created `}<em>{`json`}</em>{` can be e.g.:`}</p>
<pre><code class="language-json">{`["cs-CZ", ["My name is {a}!", null, 1]]`}</code></pre>
<p>{`To add translations it can be modified to the following:`}</p>
<pre><code class="language-json">{`["cs-CZ", ["My name is {a}!", null, 1, "Jmenuji se {a}!"]]`}</code></pre>
<p>{`The specific parts of localization item represented as an array are:`}</p>
<ol>
<li>{`Message - `}<em>{`Hello World`}</em></li>
<li>{`Translation help (third optional parameter of t function) - null =not used in `}<code>t</code>{` function`}</li>
<li>{`Indicator of parameters inside of message - 0 = no parameter`}</li>
<li>{`The translated message - `}<em>{`Ahoj světe`}</em></li>
</ol>
<p>{`Parts 1-3 compose the translation key.`}</p>
<h4 id="basics">{`Basics`}</h4>
<p>{`We can simply add placeholders to use variables in our text patterns:`}</p>
<p><em>{`My name is Tomas`}{`!`}</em></p>


<pre><code class="language-tsx">{`t("My name is {a}!", { a: "Tomas" });`}</code></pre>
<h4 id="ordinal">{`Ordinal`}</h4>
<p>{`To set localized ordinal, use the selectordinal pattern:`}</p>
<p><em>{`You are in 2nd floor`}</em></p>


<pre><code class="language-tsx">{`t("you are in {floor, selectordinal, =0{ground} one{#st} two{#nd} few{#rd} other{#th}} floor", { floor: 2 });`}</code></pre>
<p>{`The # character is replaced by the floor property in the params object.`}</p>
<h4 id="plural">{`Plural`}</h4>
<p>{`The similar plural pattern is used to define localized plurals:`}</p>
<p><em>{`here are 2 floors`}</em></p>


<pre><code class="language-tsx">{`t("here {floor, plural, =0{is no floor} =1{is # floor} other{are # floors}}", { floor: 2 });`}</code></pre>
<h4 id="select">{`Select`}</h4>
<p>{`To select a specific value according to some input string, we can use the select pattern:`}</p>
<p><em>{`famous woman`}</em></p>


<pre><code class="language-tsx">{`t("famous {gender, select, female {woman} male {man} other {person}}", { gender: "female" });`}</code></pre>
<h4 id="number">{`Number`}</h4>
<p>{`We can use a number pattern to keep numbers in culture specific formatting or to define our own format:`}</p>
<p><em>{`1.234 in en`}</em></p>


<pre><code class="language-tsx">{`f("{arg, number}", { arg: 1.234 });`}</code></pre>
<p><em>{`1.2340 in en`}</em></p>


<pre><code class="language-tsx">{`f("{arg, number, custom, format:{0.0000}}", { arg: 1.234 });`}</code></pre>
<h4 id="date-and-time">{`Date and Time`}</h4>
<p>{`The date and time patterns work the same way and can be used in the following way:`}</p>
<p><em>{`Jan 2, 2000 12:00 AM - in en`}</em></p>


<pre><code class="language-tsx">{`f("{a, date, lll}", { a: new Date(2000, 0, 2) });`}</code></pre>
<p><em>{`02 01 - in en`}</em></p>


<pre><code class="language-tsx">{`f("{a, date, custom, format:{DD MM}}", { a: new Date(2000, 0, 2) });`}</code></pre>
<p><em>{`Sun - in en`}</em></p>


<pre><code class="language-tsx">{`f("{a, date, custom, format:{{myFormat}} }", { a: new Date(2000, 0, 2), myFormat: "ddd" });`}</code></pre>
<p>{`The specific format definitions can be found in the `}<a href="http://momentjs.com/docs/#/displaying/format/">{`Moment.js documentation.`}</a></p>
<p>{`It can also be defined in a calendar format:`}</p>
<p><em>{`Tomorrow at 4:27 PM - in en`}</em></p>


<pre><code class="language-tsx">{`f("{a, time, calendar}", { a: Date.now() + 24 * 60 * 60 * 1000 });`}</code></pre>
<p>{`or as a relative from now:`}</p>
<p><em>{`2 minutes ago - in en`}</em></p>


<pre><code class="language-tsx">{`f("{a, time, relative}", { a: Date.now() - 100000 });`}</code></pre>
<h3 id="just-formatting">{`Just Formatting`}</h3>
<p>{`If you only want to do the formatting of a text without a translation, just replace the `}<code>t</code>{` function by the `}<code>f</code>{` function.`}</p>
<p>{`It will only take care of culture specific formatting.`}</p>
<h2 id="styling">{`Styling`}</h2>
<p>{`Bobril has two ways of defining styles, `}<strong>{`inline styles`}</strong>{` and `}<strong>{`styles definitions`}</strong></p>
<h3 id="inline-styles">{`Inline styles`}</h3>
<ul>
<li>{`Basic way of defining component style, just write css style as js object into style property of an element.`}</li>
<li>{`CSS properties must be camelCased (`}<em>{`padding-top`}</em>{` → `}<em>{`paddingTop`}</em>{` ).`}</li>
<li>{`Disadvantage of inline style is a bigger and less readable HTML and no advance CSS options - see style definitions.`}</li>
</ul>


<pre><code class="language-tsx">{`import * as b from "bobril";
import {IStyledComponentData} from "./interfaces";

export class InlineStyling extends b.Component<IStyledComponentData> {
    render(): b.IBobrilChildren {
        const wrapperStyle = { border: "1px solid blue", padding: "15px", display: "inline-block", margin: "20px" };

        return <div style={wrapperStyle}>
            <div style={{ color: "blue", fontWeight: "bold", fontSize: "1.2em" }}>{this.data.label}</div>
            <div style={{ paddingTop: "8px", fontStyle: "italic" }}>{this.data.children}</div>
        </div>;
    }
}`}</code></pre>
<h3 id="style-definition">{`Style definition`}</h3>
<ul>
<li>{`CSS style can be defined by `}<code>b.styleDef</code></li>
<li>{`Bobril build will generate CSS class from style definitions and use CSS classes in components.`}</li>
</ul>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { IStyledComponentData } from "./interfaces";

export const wrapperStyle = b.styleDef({ border: "1px solid blue", padding: "15px", display: "inline-block", margin: "20px" });
export const titleStyle = b.styleDef({ color: "blue", fontWeight: "bold", fontSize: "1.2em" });
export const bodyStyle = b.styleDef({ paddingTop: "8px", fontStyle: "italic" });

export class CssBaseStyling extends b.Component<IStyledComponentData> {
    render(): b.IBobrilChildren {
        return <div style={wrapperStyle}>
            <div style={titleStyle}>{this.data.label}</div>
            <div style={bodyStyle}>{this.data.children}</div>
        </div>;
    }
}`}</code></pre>
<ul>
<li>{`To create CSS subclass use `}<code>b.styleDefEx</code>{`. First parameter is original class and the second is subclass style.`}</li>
<li>{`Please notice several styles can be combined as array in the style property.`}</li>
</ul>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { IStyledComponentData } from "./interfaces";
import { bodyStyle, titleStyle, wrapperStyle } from "./cssBaseStyling";

const extendedWrapperStyle = b.styleDefEx(wrapperStyle, { borderColor: "red" });

export class CssExtendingStyling extends b.Component<IStyledComponentData> {
    render(): b.IBobrilChildren {
        return <div style={[wrapperStyle, extendedWrapperStyle]}>
            <div style={titleStyle}>{this.data.label}</div>
            <div style={bodyStyle}>{this.data.children}</div>
        </div>;
    }
}`}</code></pre>
<ul>
<li>{`CSS selectors can be used in Bobril as well. Just use second optional parameter in `}<code>b.styleDef</code>{`.`}

</li>
</ul>
<pre><code class="language-tsx">{`import * as b from "bobril";
import { IStyledComponentData } from "./interfaces";
import { wrapperStyle, titleStyle, bodyStyle } from "./cssBaseStyling";

const hoveredStyle = b.styleDef( { borderColor: "red", color: "green" });
const wrapperHoveredStyle = b.styleDef(wrapperStyle, { hover: hoveredStyle });

export class CssSelectorsStyling extends b.Component<IStyledComponentData> {
    render(): b.IBobrilChildren {
        return <div style={[wrapperStyle, wrapperHoveredStyle ]}>
            <div style={titleStyle}>{this.data.label}</div>
            <div style={bodyStyle}>{this.data.children}</div>
        </div>;
    }
}`}</code></pre>
<h3 id="media-queries">{`Media Queries`}</h3>
<ul>
<li>{`To define media query use `}<code>b.mediaQueryDef</code>{`, first parameter is media query and second affected styles with styling changes.`}</li>
<li>{`Build-in builder `}<code>b.createMediaQuery</code>{` can be used to write media query.`}</li>
</ul>


<pre><code class="language-tsx">{`import * as b from "bobril";
import { IStyledComponentData } from "./interfaces";
import { bodyStyle, titleStyle, wrapperStyle } from "./cssBaseStyling";

const mediaQueryStyle = b.styleDefEx(wrapperStyle, { borderColor: "green" });

// results in "only screen and (max-width: 600px) , only print"
const mediaQueryDef = b.createMediaQuery()
    .rule("only", "screen")
    .and({type: "max-width", value: 600, unit: "px"})
    .or()
    .rule("only", "print")
    .build();

b.mediaQueryDef(mediaQueryDef, {
    [mediaQueryStyle]: {
        opacity: 0.5
    }
});

export class MediaQueriesStyling extends b.Component<IStyledComponentData> {
    render(): b.IBobrilChildren {
        return <div style={[wrapperStyle, mediaQueryStyle ]}>
            <div style={titleStyle}>{this.data.label}</div>
            <div style={bodyStyle}>{this.data.children}</div>
        </div>;
    }
}`}</code></pre>
<p><a href="./static-examples/styling/index.html">{`Preview example`}</a></p>
<h2 id="bobril-build">{`Bobril-build`}</h2>
<h3 id="how-to-find-out-what-takes-space-in-your-bundle">{`How to find out what takes space in your bundle`}</h3>
<p>{`First you need to build your project with enabled sourcemaps. Because only new bundler support generating them it needs to be enabled with `}<code>newBundler</code>{` parameter. It is good to override sourceRoot in generated sourcemap to be just `}<code>.</code>{`, because it will remove one nesting from result.`}</p>
<pre><code class="language-bash">{`bb build --newBundler true --sourcemap yes --sourceRoot .`}</code></pre>
<p>{`or shorter`}</p>
<pre><code class="language-bash">{`bb b -x 1 -g yes --sourceRoot .`}</code></pre>
<p>{`Second and last step is to use `}<a href="https://github.com/danvk/source-map-explorer">{`source-map-explorer`}</a>{` on generated bundle. By default it will be in `}<code>dist</code>{` subdirectory and will be named `}<code>a.js</code>{`.`}</p>
<pre><code class="language-bash">{`npx source-map-explorer a.js`}</code></pre>
</>;
import * as b from 'bobril';
import * as Label from '../../../components/label/lib';
import * as Paragraph from '../../../components/paragraph/lib';
import * as Code from '../../../components/code/lib';

// examples
import * as ExampleCounter from './examples/counter';
import * as ExampleTodo from './examples/todo';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            gettingStarted(),
            b.styledDiv(firstExample(), exampleContainerStyle),
            b.styledDiv(firstComponent(), exampleContainerStyle),
            b.styledDiv(todoExample(), exampleContainerStyle)
        ];
    }
});

function gettingStarted(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'Getting started in 3 steps',
            size: Label.LabelSize.Title
        }),
        Paragraph.create('1) To install Bobril Build run the command:'),
        Code.create({
            children: `npm install -g bobril-build`
        }),
        Paragraph.create('2) Init your project by these commands:'),
        Code.create({
            children: `npm init\nnpm install bobril --save`
        }),
        Paragraph.create('3) Run Bobril Build in the root directory of the project:'),
        Code.create({
            children: 'bb'
        }),
        Paragraph.create(
            `Bobril Build runs default on localhost:8080, 
                but if the port is already used,
                then Bobril Build will choose another one.`
        )
    ]
}

function firstExample(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'Hello world!',
            size: Label.LabelSize.Title
        }),
        Paragraph.create('Let\'s create first page in Bobril. Create a file index.ts in project directory and insert ' +
            'the code below.'),
        Code.create({
            children: 'import * as b from \'bobril\';\n' +
            '\n' +
            'b.init(() => {\n' +
            '    return { tag: \'h1\', children: \'Hello World!\' };\n' +
            '});',
            preview: {tag: 'h1', children: 'Hello World!'}
        }),
    ]
        ;
}

function firstComponent(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'First component - Counter',
            size: Label.LabelSize.Title
        }),
        Paragraph.create('Now it will be a little more complex. We create a component called Counter and then we will use it.' +
            'The maim benefit of component is, that you can use it as many times as you want.'),
        Code.create({
            children: ExampleCounter.codeComponent,
        }),
        Paragraph.create('When the component is ready integrate it to the page.'),
        Code.create({
            children: ExampleCounter.codeInit,
            preview: ExampleCounter.create()
        })
    ]
}


function todoExample(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'Little more real example - TODO list',
            size: Label.LabelSize.Title
        }),
        Paragraph.create('When the component is ready integrate it to the page.'),
        Code.create({
            children: ExampleTodo.codeComponent,
            preview: ExampleTodo.create(),
            maxCodeHeight: 300
        })
    ]
}

export const exampleContainerStyle = b.styleDef({
    paddingTop: 16
});
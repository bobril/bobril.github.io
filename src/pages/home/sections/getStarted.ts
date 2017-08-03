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
            label: 'Todo List - Little more real example',
            size: Label.LabelSize.Title
        }),
        Paragraph.create('It was already presented, how to create a simple component. But how to process the user input? Let\'s ' +
            'create simple Todo List. In this example, we will use bobril-m library, that implements Material UI design. Initialization of ' +
            'the component is the same like in the example above. It will not be presented again.'),
        Paragraph.create('We have prepared you some interesting tasks in todo list. Will you accomplish them? :-)'),
        Code.create({
            children: ExampleTodo.codeComponent,
            preview: ExampleTodo.create(),
            maxCodeHeight: 300
        }),
        Paragraph.create('As you can see in the code above, we are able to create a pretty application with a few rows of code. ' +
            'Check the code in more detail. Everything is written in TypeScript (even CSS). ' +
            'Yes, you are right, if we didn\'t use bobril-m, the code will be much longer. Reusability is the most valuable thing of' +
            ' component oriented frameworks. If you use existing bobril-m library or create some own components, than you are able to design and implement ' +
            'pretty application really quickly.'),
        Label.create({
            label: 'If you are interestend and want to know more, don\'t hesitate and check our tutorials and examples. ',
            size: Label.LabelSize.Title,
            style: {
                textAlign: 'center'
            }
        }),
        Label.create({
            label: 'You will find them on Documentation tab.',
            size: Label.LabelSize.Title,
            style: {
                textAlign: 'center'
            }
        }),
    ]
}

export const exampleContainerStyle = b.styleDef({
    paddingTop: 16
});
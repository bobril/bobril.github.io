import * as b from 'bobril';
import * as Label from '../../../components/label/lib';
import * as Paragraph from '../../../components/paragraph/lib';
import * as Code from '../../../components/code/lib';
import * as BobrilHighligtJs from 'bobril-highlightjs';

// examples
import * as ExampleCounter from './examples/counter';
import * as ExampleTodo from './examples/todo';
import * as styles from '../../../components/styles';
interface IData {}

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
            children: BobrilHighligtJs.create({
                code: `npm i -g bobril-build`,
                configuration: {
                    language: BobrilHighligtJs.Language.shell
                },
                style: {
                    margin: 0
                }
            })
        }),
        Paragraph.create('2) Init your project by these commands:'),
        Code.create({
            children: BobrilHighligtJs.create({
                code: `npm init
npm i bobril --save`,
                configuration: {
                    language: BobrilHighligtJs.Language.shell
                },
                style: {
                    margin: 0
                }
            })
        }),
        Paragraph.create(
            '3) Run Bobril Build in the root directory of the project:'
        ),
        Code.create({
            children: BobrilHighligtJs.create({
                code: `bb`,
                configuration: {
                    language: BobrilHighligtJs.Language.shell
                },
                style: {
                    margin: 0
                }
            })
        }),
        Paragraph.create(
            `Bobril Build runs default on localhost:8080, 
                but if the port is already used,
                then Bobril Build will choose another one.`
        )
    ];
}

function firstExample(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'Hello world!',
            size: Label.LabelSize.Title
        }),
        Paragraph.create(
            "Let's create first page in Bobril. Create a file index.ts in project directory and insert " +
                'the code below.'
        ),
        Code.create({
            children: BobrilHighligtJs.create({
                code: `import * as b from 'bobril';

b.init(() => {
    return { tag: \'h1\', children: \'Hello World!\' };
});`,
                configuration: {
                    language: BobrilHighligtJs.Language.typescript
                },
                style: {
                    margin: 0
                }
            }),
            preview: { tag: 'h1', children: 'Hello World!' }
        })
    ];
}

function firstComponent(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'First component - Counter',
            size: Label.LabelSize.Title
        }),
        Paragraph.create(`Now it will be a little more complex. We create a component called Counter and then we will use it.
            The main benefit of component is, that you can use it as many times as you want.
            Generic type never to createComponent means that your component does not have any input data (in React world "props").`),
        Code.create({
            children: BobrilHighligtJs.create({
                code: ExampleCounter.codeComponent,
                configuration: {
                    language: BobrilHighligtJs.Language.typescript
                },
                style: {
                    margin: 0
                }
            })
        }),
        Paragraph.create(
            'When the component is ready integrate it to the page.'
        ),
        Code.create({
            children: BobrilHighligtJs.create({
                code: ExampleCounter.codeInit,
                configuration: {
                    language: BobrilHighligtJs.Language.typescript
                },
                style: {
                    margin: 0
                }
            }),
            preview: ExampleCounter.create()
        })
    ];
}

function todoExample(): b.IBobrilChildren {
    return [
        Label.create({
            label: `Todo List - Little more real example`,
            size: Label.LabelSize.Title
        }),
        Paragraph.create(
            "It was already presented, how to create a simple component. But how to process the user input? Let's " +
                'create simple Todo List. In this example, we will use bobril-m library, that implements Material UI design. Initialization of ' +
                'the component is the same like in the example above. It will not be presented again.'
        ),
        Paragraph.create(
            'We have prepared you some interesting tasks in todo list. Will you accomplish them? :-)'
        ),
        Code.create({
            children: BobrilHighligtJs.create({
                code: ExampleTodo.codeComponent,
                configuration: {
                    language: BobrilHighligtJs.Language.typescript
                },
                style: {
                    margin: 0
                }
            }),
            preview: ExampleTodo.create(),
            maxCodeHeight: 300
        }),
        Paragraph.create(
            'As you can see in the code above, we are able to create a pretty application with a few rows of code. ' +
                'Check the code in more detail. Everything is written in TypeScript (even CSS). ' +
                "Yes, you are right, if we didn't use bobril-m, the code will be much longer. Reusability is the most valuable thing of" +
                ' component oriented frameworks. If you use existing bobril-m library or create some own components, than you are able to design and implement ' +
                'pretty application really quickly.'
        ),
        Label.create({
            label:
                "If you are interestend and want to know more, don't hesitate and check our tutorials and examples. ",
            size: Label.LabelSize.Title,
            style: {
                textAlign: 'center'
            }
        }),
        Label.create({
            label: 'You will find them on documentation tab.',
            size: Label.LabelSize.Title,
            style: {
                textAlign: 'center'
            }
        })
    ];
}

export const exampleContainerStyle = b.styleDef({
    paddingTop: 16
});

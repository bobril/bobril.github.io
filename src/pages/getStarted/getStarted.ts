import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';
import * as Code from '../../components/code/lib';
import * as ContentMenu from '../../components/ContentMenu/lib';
import * as styles from './styles';

// examples
import * as ExampleCounter from './examples/counter';
import * as ExampleTodo from './examples/todo';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
    top: number;
}

export const create = b.createComponent<IData>({
    init(ctx: IContext) {
        ctx.top = 90 + b.getWindowScroll()[1];
        b.invalidate(ctx);
        window.addEventListener('scroll', () => {
            ctx.top = 90 + b.getWindowScroll()[1];
            b.invalidate(ctx);
        });
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                ContentMenu.create({
                    names: [
                        'GET STARTED',
                        'Install in 3 steps',
                        'Hello World!',
                        'First component - Counter',
                        'Todo list - more real example'
                    ],
                    ids: [
                        'getStartedRecord',
                        'installIn3Steps',
                        'helloWorld',
                        'firstComponent',
                        'toDoList'
                    ]
                }),
                styles.rightContentPosition,
                { top: ctx.top }
            ),

            b.styledDiv(
                [
                    gettingStarted(),
                    firstExample(),
                    firstComponent(),
                    todoExample(),
                    bottomTexts()
                ],
                styles.leftContentPosition,
            )
        ];
        b.style(me, {
            textAlign: 'left',
            paddingRight: 210,
            paddingBottom: 120
        });
    }
});

function gettingStarted(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'GET STARTED',
            size: Label.LabelSize.HeaderText01,
            style: styles.headerText01,
            id: 'getStarted'
        }),

        Label.create({
            label: 'Install in 3 steps',
            size: Label.LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'installIn3Steps'
        }),

        Paragraph.create({
            content: '1) To install Bobril Build run the command:',
            style: styles.paragText
        }),

        Code.create({
            children: ['npm i -g bobril-build']
        }),

        Paragraph.create({
            content: '2) Init your project by these commands:',
            style: styles.paragText
        }),

        Code.create({
            children: [
                `npm init 
npm i bobril --save`
            ]
        }),

        Paragraph.create({
            content:
                '3) Run Bobril Build in the root directory of the project:',
            style: styles.paragText
        }),

        Code.create({
            children: ['bb']
        }),

        Paragraph.create({
            content:
                'Bobril Build runs default on localhost:8080,' +
                'but if the port is already used,' +
                'then Bobril Build will choose another one.',
            style: styles.paragText
        })
    ];
}

function firstExample(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'Hello world!',
            size: Label.LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'helloWorld'
        }),

        Paragraph.create({
            content: `Let's create first page in Bobril, the code below.`,
            style: styles.paragText
        }),

        Code.create({
            children: [
                `import * as b from 'bobril;

b.init(() => {
    return { tag: 'h1', children: 'Hello World! };
});`
            ],
            preview: 'Hello World!'
        })
    ];
}

function firstComponent(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'First component - Counter',
            size: Label.LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'firstComponent'
        }),

        Paragraph.create({
            content:
                'Now it will be a little more complex. We create a component called Counter and then we will use it.' +
                'The main benefit of component is, that you can use it as many times as you want.' +
                'Generic type never to createComponent means that your component does not have any input data (in React world "props").',
            style: styles.paragText
        }),

        Code.create({
            children: ExampleCounter.codeComponent
        }),

        Paragraph.create({
            content: 'When the component is ready integrate it to the page.',
            style: styles.paragText
        }),

        Code.create({
            children: ExampleCounter.codeInit,
            preview: ExampleCounter.create()
        })
    ];
}

function todoExample(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'Todo List - Little more real example',
            size: Label.LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'toDoList'
        }),

        Paragraph.create({
            content: `It was already presented, how to create a simple component. But how to process the user input? Let's
                create simple Todo List. In this example, we will use bobril-m library, that implements Material UI design.
                Initialization of the component is the same like in the example above. It will not be presented again.`,
            style: styles.paragText
        }),

        Paragraph.create({
            content:
                'We have prepared you some interesting tasks in todo list. Will you accomplish them? :-',
            style: styles.paragText
        }),

        Code.create({
            children: ExampleTodo.codeComponent,
            preview: ExampleTodo.create(),
            maxCodeHeight: 300
        })
    ];
}

function bottomTexts(): b.IBobrilChildren {
    return [
        Paragraph.create({
            content:
                'As you can see in the code above, we are able to create a pretty application with a few rows of code. ' +
                'Check the code in more detail. Everything is written in TypeScript (even CSS). ' +
                `Yes, you are right, if we didn't use bobril-m, the code will be much longer. Reusability is the most` +
                ' valuable thing of component oriented frameworks. If you use existing bobril-m library or create' +
                ' some own components, than you are able to design and implement ' +
                'pretty application really quickly.',
            style: styles.paragText
        }),

        Paragraph.create({
            content: `If you are interestend and want to know more, don't hesitate and check our tutorials and examples.
             You will find them on documentation tab.`,
            style: styles.bottomText
        }),

        b.styledDiv([' '], styles.bottomText)
    ];
}

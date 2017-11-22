import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as Paragraph from '../../components/paragraph/lib';
import * as Code from '../../components/code/lib';
import * as styles from './styles';

// examples
import * as ExampleCounter from './examples/counter';
import * as ExampleTodo from './examples/todo';
import { LabelSize } from '../../components/label/lib';
import { rightContentPosition } from './styles';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            content(),

            b.styledDiv(
                [
                    gettingStarted(),
                    firstExample(),
                    firstComponent(),
                    todoExample(),
                    bottomTexts()
                ],
                styles.leftContentPosition
            )
        ];
    }
});

function gettingStarted(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'GET STARTED',
            size: LabelSize.HeaderText01,
            style: styles.headerText01,
            id: 'getStartedId'
        }),

        Label.create({
            label: 'Install in 3 steps',
            size: LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'installIn3Steps'
        }),

        Paragraph.create({
            label: '1) To install Bobril Build run the command:',
            style: styles.paragText
        }),

        Code.create({
            children: ['npm i -g bobril-build']
        }),

        Paragraph.create({
            label: '2) Init your project by these commands:',
            style: styles.paragText
        }),

        Code.create({
            children: [
                `npm init 
npm i bobril --save`
            ]
        }),

        Paragraph.create({
            label: '3) Run Bobril Build in the root directory of the project:',
            style: styles.paragText
        }),

        Code.create({
            children: ['bb']
        }),

        Paragraph.create({
            label:
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
            size: LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'helloWorld'
        }),

        Paragraph.create({
            label: `Let's create first page in Bobril, the code below.`,
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
            size: LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'firstComponent'
        }),

        Paragraph.create({
            label:
                'Now it will be a little more complex. We create a component called Counter and then we will use it.' +
                'The main benefit of component is, that you can use it as many times as you want.' +
                'Generic type never to createComponent means that your component does not have any input data (in React world "props").',
            style: styles.paragText
        }),

        Code.create({
            children: ExampleCounter.codeComponent
        }),

        Paragraph.create({
            label: 'When the component is ready integrate it to the page.',
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
            label: 'Todo List - Little more real example.',
            size: LabelSize.HeaderText02,
            style: styles.headerText02,
            id: 'toDoListId'
        }),

        Paragraph.create({
            label: `It was already presented, how to create a simple component. But how to process the user input? Let's
                create simple Todo List. In this example, we will use bobril-m library, that implements Material UI design.
                Initialization of the component is the same like in the example above. It will not be presented again.`,
            style: styles.paragText
        }),

        Paragraph.create({
            label:
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
            label:
                'As you can see in the code above, we are able to create a pretty application with a few rows of code. ' +
                'Check the code in more detail. Everything is written in TypeScript (even CSS). ' +
                `Yes, you are right, if we didn't use bobril-m, the code will be much longer. Reusability is the most` +
                ' valuable thing of component oriented frameworks. If you use existing bobril-m library or create' +
                ' some own components, than you are able to design and implement ' +
                'pretty application really quickly.',
            style: styles.paragText
        }),

        Paragraph.create({
            label: `If you are interestend and want to know more, don't hesitate and check our tutorials and examples.
             You will find them on documentation tab.`,
            style: styles.bottomText
        }),

        b.styledDiv([' '], styles.bottomText)
    ];
}

function content(): b.IBobrilChildren {
    return [
        Label.create({
            label: 'CONTENT',
            size: Label.LabelSize.HeaderText02,
            style: rightContentPosition
        })
    ];
}

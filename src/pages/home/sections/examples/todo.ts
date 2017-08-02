import * as b from 'bobril';
import * as m from 'bobril-m';

interface ITask {
    description: string;
    isDone: boolean;
}

interface IContext extends b.IBobrilCtx {
    tasks: ITask[];
    newTask: ITask;
}

export const create = b.createComponent<never>({
    init(ctx: IContext) {
        ctx.tasks = [
            {description: 'Learn Bobril', isDone: false},
            {description: 'What is Bobflux?', isDone: false},
            {description: 'Try BobX!', isDone: false}
        ];

        ctx.newTask = {description: '', isDone: false};
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = m.Paper({
            style: {
                padding: padding
            },
            children: [
                b.styledDiv('Todo List', headerStyle),
                b.styledDiv(
                    ctx.tasks.map((task, i) => b.styledDiv(
                        m.Checkbox({
                            children: getTaskView(task),
                            checked: task.isDone,
                            action: () => {
                                task.isDone = !task.isDone;
                                b.invalidate(ctx);
                            }
                        }),
                        taskStyle
                        )
                    ),
                    taskListStyle
                ),
                m.TextField({
                    hintText: 'New task description',
                    value: ctx.newTask.description || '',
                    onChange: (value: string) => {
                        ctx.newTask.description = value;
                        b.invalidate(ctx);
                    }
                }),
                m.Button({
                    children: 'Add Task',
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    disabled: isActualTaskEmpty(ctx),
                    action: () => {
                        if (!isActualTaskEmpty(ctx)) {
                            ctx.tasks = [ctx.newTask, ...ctx.tasks];
                            ctx.newTask = {description: '', isDone: false};
                            b.invalidate(ctx);
                        }
                    }
                })
            ]
        });
    }
});

function isActualTaskEmpty(ctx: IContext): boolean {
    return ctx.newTask.description.trim() === '';
}

function getTaskView(task: ITask): b.IBobrilChildren {
    return !task.isDone ? task.description : b.styledDiv(task.description, {textDecoration: 'line-through'});
}

const padding = 16;
const taskListHeight = 120;
const taskListStyle = b.styleDef({
    paddingTop: padding,
    paddingBottom: padding,
    height: taskListHeight,
    overflow: 'auto'
});
const headerStyle = b.styleDef({fontSize: 18, textAlign: 'left'});
const taskStyle = b.styleDef({textAlign: 'left'});

export const codeInit = '';
export const codeComponent = `import * as b from 'bobril';
import * as m from 'bobril-m';

interface ITask {
    description: string;
    isDone: boolean;
}

interface IContext extends b.IBobrilCtx {
    tasks: ITask[];
    newTask: ITask;
}

export const create = b.createComponent<never>({
    init(ctx: IContext) {
        ctx.tasks = [
            {description: 'Learn Bobril', isDone: false},
            {description: 'What is Bobflux?', isDone: false},
            {description: 'Try BobX!', isDone: false}
        ];

        ctx.newTask = {description: '', isDone: false};
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = m.Paper({
            style: {
                padding: padding
            },
            children: [
                b.styledDiv('Todo List', headerStyle),
                b.styledDiv(
                    ctx.tasks.map((task, i) => b.styledDiv(
                        m.Checkbox({
                            children: getTaskView(task),
                            checked: task.isDone,
                            action: () => {
                                task.isDone = !task.isDone;
                                b.invalidate(ctx);
                            }
                        }),
                        taskStyle
                        )
                    ),
                    taskListStyle
                ),
                m.TextField({
                    hintText: 'New task description',
                    value: ctx.newTask.description || '',
                    onChange: (value: string) => {
                        ctx.newTask.description = value;
                        b.invalidate(ctx);
                    }
                }),
                m.Button({
                    children: 'Add Task',
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    disabled: isActualTaskEmpty(ctx),
                    action: () => {
                        if (!isActualTaskEmpty(ctx)) {
                            ctx.tasks = [ctx.newTask, ...ctx.tasks];
                            ctx.newTask = {description: '', isDone: false};
                            b.invalidate(ctx);
                        }
                    }
                })
            ]
        });
    }
});

function isActualTaskEmpty(ctx: IContext): boolean {
    return ctx.newTask.description.trim() === '';
}

function getTaskView(task: ITask): b.IBobrilChildren {
    return !task.isDone ? task.description : b.styledDiv(task.description, {textDecoration: 'line-through'});
}

const padding = 16;
const taskListHeight = 120;
const taskListStyle = b.styleDef({
    paddingTop: padding,
    paddingBottom: padding,
    height: taskListHeight,
    overflow: 'auto'
});
const headerStyle = b.styleDef({fontSize: 18, textAlign: 'left'});
const taskStyle = b.styleDef({textAlign: 'left'});
`;
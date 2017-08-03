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
            createTask('Learn Bobril', false),
            createTask('What is Bobflux?', false),
            createTask('Try BobX!', false),
        ];

        ctx.newTask = createTask('', false);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = m.Paper({
            children: [
                b.styledDiv('Todo List', labelStyle),
                b.styledDiv(
                    ctx.tasks.map((task, i) =>
                        b.styledDiv(
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
                            ctx.newTask = createTask('', false);
                            b.invalidate(ctx);
                        }
                    }
                })
            ],
            style: {
                padding: padding
            }
        });
    }
});

function createTask(description: string, isDone: boolean) {
    return {description, isDone};
}

function isActualTaskEmpty(ctx: IContext): boolean {
    return ctx.newTask.description.trim() === '';
}

function getTaskView(task: ITask): b.IBobrilChildren {
    return b.styledDiv(
        task.description,
        task.isDone && {textDecoration: 'line-through'}
    );
}

const padding = 16;
const taskListHeight = 120;
const taskListStyle = b.styleDef({
    paddingTop: padding,
    paddingBottom: padding,
    height: taskListHeight,
    overflow: 'auto'
});
const labelStyle = b.styleDef({fontSize: 18, textAlign: 'left'});
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
            createTask('Learn Bobril', false),
            createTask('What is Bobflux?', false),
            createTask('Try BobX!', false),
        ];

        ctx.newTask = createTask('', false);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = m.Paper({
            children: [
                b.styledDiv('Todo List', labelStyle),
                b.styledDiv(
                    ctx.tasks.map((task, i) =>
                        b.styledDiv(
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
                            ctx.newTask = createTask('', false);
                            b.invalidate(ctx);
                        }
                    }
                })
            ],
            style: {
                padding: padding
            }
        });
    }
});

function createTask(description: string, isDone: boolean) {
    return {description, isDone};
}

function isActualTaskEmpty(ctx: IContext): boolean {
    return ctx.newTask.description.trim() === '';
}

function getTaskView(task: ITask): b.IBobrilChildren {
    return b.styledDiv(
        task.description,
        task.isDone && {textDecoration: 'line-through'}
    );
}

const padding = 16;
const taskListHeight = 120;
const taskListStyle = b.styleDef({
    paddingTop: padding,
    paddingBottom: padding,
    height: taskListHeight,
    overflow: 'auto'
});
const labelStyle = b.styleDef({fontSize: 18, textAlign: 'left'});
const taskStyle = b.styleDef({textAlign: 'left'});
`;
import * as b from 'bobril';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    counter: number;
}

export const create = b.createComponent<IData>({
    init(ctx: IContext) {
        ctx.counter = 0;
        setInterval(() => {
            ctx.counter++;
            b.invalidate(ctx);
        }, 1000);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = b.styledDiv(ctx.counter);

        b.style(me, {fontSize: 25});
    }
});

export const codeInit = '' +
    'import * as b from \'bobril\';\n' +
    'import * as Counter from \'./counter\';\n' +
    '\n' +
    'b.init(() => {\n' +
    '    return [\n' +
    '        Counter.create({})' +
    '    ];\n' +
    '});';


export const codeComponent = `import * as b from 'bobril';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    counter: number;
}

export const create = b.createComponent<IData>({
    init(ctx: IContext) {
        ctx.counter = 0;
        setInterval(() => {
            ctx.counter++;
            b.invalidate(ctx);
        }, 1000);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = b.styledDiv(ctx.counter);

        b.style(me, {fontSize: 25});
    }
});`;
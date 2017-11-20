import * as b from 'bobril';

interface IContext extends b.IBobrilCtx {
    counter: number;
}

export const create = b.createComponent<never>({
    init(ctx: IContext) {
        ctx.counter = 0;
        setInterval(() => {
            ctx.counter++;
            b.invalidate(ctx);
        }, 1000);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = ctx.counter;

        b.style(me, { fontSize: 25 });
    }
});

export const codeInit = `import * as b from 'bobril';
import * as Counter from './counter';
b.init(() => [
    Counter.create()
]);`;

export const codeComponent = `import * as b from 'bobril';

interface IContext extends b.IBobrilCtx {
    counter: number;
}

export const create = b.createComponent<never>({
    init(ctx: IContext) {
        ctx.counter = 0;
        setInterval(() => {
            ctx.counter++;
            b.invalidate(ctx);
        }, 1000);
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = ctx.counter;

        b.style(me, {fontSize: 25});
    }
});`;

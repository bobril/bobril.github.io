import * as b from 'bobril';
import * as m from 'bobril-m';

interface IData {
    label: string;
    href?: string;
    action?: () => boolean;
    newWindow? : boolean;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.tag = 'a';
        me.attrs = {
            href: d.href || '#',
            target: d.newWindow === true ? '_blank' : '_self'
        };

        me.children = d.label;

        b.style(me, {
            whiteSpace: 'nowrap',
            display: 'inline',
            textDecoration: 'underline',
            color: m.primary1Color()
        });
    },

    onClick(ctx: IContext): boolean {
        const d = ctx.data;
        return d.action && d.action();
    },

    shouldStopBubble(ctx: IContext): boolean {
        return true;
    }
});
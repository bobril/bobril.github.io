import * as b from 'bobril';

interface IData {
    width: number;
    url: string;
    style?: b.IBobrilStyle;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    contentHeight: number;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;
        me.tag = 'iframe';
        me.attrs = {
            src: d.url,
            width: d.width,
            frameborder: '0',
            scrolling: 'no',
        };

        d.style && b.style(me, d.style);
    },

    postInitDom(_ctx: IContext, _me: b.IBobrilChildren, element: HTMLIFrameElement) {
        element.onload = () => {
            element.style.height = element.contentWindow.document.body.scrollHeight + 'px';
        };
    },

    postUpdateDom(ctx: IContext, _me: b.IBobrilChildren, element: HTMLIFrameElement) {
        const currentHeight = element.contentWindow.document.body.scrollHeight;
        if (ctx.contentHeight !== currentHeight) {
            ctx.contentHeight = currentHeight;
            element.style.height = currentHeight + 'px';
            b.invalidate(ctx);
        }
    }
});
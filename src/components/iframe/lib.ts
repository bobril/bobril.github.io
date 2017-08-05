import * as b from 'bobril';

interface IData {
    width: number;
    url: string;
    style?: b.IBobrilStyle;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
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

    postUpdateDom(_ctx: IContext, _me: b.IBobrilChildren, element: HTMLIFrameElement) {
        element.onload = () => {
            element.style.height = element.contentWindow.document.body.scrollHeight + 'px';
        }
    }
});
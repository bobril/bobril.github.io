import * as b from 'bobril';
import {css} from './markdownCss';

b.injectCss(css);

interface IData {
    html: string;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    contentHeight: number;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = {
            tag: '/',
            children: ctx.data.html
        };

        b.style(me, markdownStyle);
    }
});

const markdownStyle = b.styleDef({}, {}, 'markdown');
import * as b from 'bobril';
import * as m from 'bobril-m';

interface IData {
    children: b.IBobrilChildren;
    preview?: b.IBobrilChildren;
    maxCodeHeight?: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const previewWidth = 217;
const codePadding = 16;

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                b.styledDiv(
                    d.children,
                    d.maxCodeHeight && {
                        maxHeight: d.maxCodeHeight,
                        overflow: 'auto'
                    }
                ),
                codeStyle,
                d.preview && {
                    display: 'table-cell',
                    verticalAlign: 'top'
                }),
            d.preview && b.styledDiv(
                d.preview,
                previewStyle
            ),

        ];

        b.style(me, codeWrapper);
    }
});

export const codeWrapper = b.styleDef({
    display: 'table',
    width: '100%',
    margin: codePadding
});

export const codeStyle = b.styleDef({
    whiteSpace: 'pre',
    border: `1px solid ${m.grey500}`,
    background: m.grey300,
    borderStyle: 'dashed',
    padding: codePadding,
    fontSize: 13,
    fontFamily: 'sans-serif'
});

export const previewStyle = b.styleDef({
    padding: codePadding,
    background: m.blue100,
    border: `1px solid ${m.blue500}`,
    minHeight: '100%',
    width: previewWidth,
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center'
});
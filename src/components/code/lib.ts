import * as b from 'bobril';
import * as colors from '../colors';
import * as styles from '../styles';

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
                }
            ),
            d.preview && b.styledDiv(d.preview, previewStyle)
        ];

        b.style(me, codeWrapper);
    }
});

export const codeWrapper = b.styleDef([
    {
        display: 'table',
        width: '100%',
        marginTop: codePadding,
        marginBottom: codePadding
    },
    styles.smalltext01
]);

export const codeStyle: b.IBobrilStyleDef = b.styleDef([
    {
        whiteSpace: 'pre',
        color: colors.color03,
        background: colors.color01,
        paddingBottom: 7.5,
        paddingTop: 7.5,
        paddingLeft: 7.5,
        fontFamily: 'Segoe UI'
    },
    styles.smalltext01
]);

export const previewStyle = b.styleDef({
    paddingLeft: codePadding,
    paddingRight: codePadding,
    width: previewWidth,
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: colors.color01,
    background: colors.color05
});

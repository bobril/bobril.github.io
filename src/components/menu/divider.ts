import * as b from 'bobril';
import * as colors from '../colors';
import {foregroundColor} from './styles';

export interface IData {}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = b.styledDiv([], {
            width: 160,
            height: 2,
            background: colors.color01,
            margin: 'auto',
        });

        b.style(me, dividerStyle);
    }
});

export const dividerMargin = 40;

const dividerStyle = b.styleDef({
    background: foregroundColor,
    height: dividerMargin,
    paddingTop: '40px',
});

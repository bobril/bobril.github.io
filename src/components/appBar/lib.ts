import * as b from 'bobril';
import * as styles from '../styles';
import * as colors from '../colors';

import * as AppButton from './button';

export const Button = AppButton;

interface IData {
    leftChildren: b.IBobrilChildren[];
    rightChildren?: b.IBobrilChildren[];
    contentWidth?: number;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(
                [
                    // TODO TOP BAR
                ],
                {
                    minWidth: 1200,
                    maxWidth: d.contentWidth,
                    margin: 'auto'
                }
            )
        ];

       
    }
});
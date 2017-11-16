import * as b from 'bobril';
import { centeredPosition, rowLabel, rowStyle } from './styles';

export interface IData {
    label: string;
    content: b.IBobrilChildren;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}
export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                [
                    b.styledDiv([ctx.data.label], rowLabel),
                    b.styledDiv([ctx.data.content], centeredPosition)
                ],
                centeredPosition,
                rowStyle
            )
        ];
        b.style(me, {
            
        });
    }
});

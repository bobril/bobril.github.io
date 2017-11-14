import * as b from 'bobril';
import { createBobrilStylefromObjects } from '../styles';

type Function = () => void;

export interface IData {
    style: object;
    fontStyle: object;
    colorStyle: object;
    content: string;
    onClick: Function;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        let buttonStyle = createBobrilStylefromObjects(
            ctx.data.fontStyle,
            ctx.data.colorStyle,
            ctx.data.style
        );
        me.children = [b.styledDiv([ctx.data.content])];

        b.style(me, buttonStyle);
    },

    onClick(ctx: IContext): boolean {
        if (ctx.data.onClick) {
            ctx.data.onClick();
            return true;
        }
        return false;
    }
});

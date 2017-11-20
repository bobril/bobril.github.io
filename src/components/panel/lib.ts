import * as b from 'bobril';
import * as panelStyles from './styles';

export interface IData {
    icon: b.IBobrilChildren;
    label: string;
    content: b.IBobrilChildren;
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        let d = ctx.data;
        me.children = [
            b.styledDiv(d.icon, panelStyles.iconStyle,panelStyles.leftContainer),
            b.styledDiv(
                [
                    b.styledDiv(d.label, panelStyles.labelStyle),
                    b.styledDiv(d.content, panelStyles.textStyle)
                ],
                panelStyles.rightContainer
            )
        ];
        b.style(me, panelStyles.panelStyle);
    }
});

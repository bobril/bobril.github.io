import * as b from 'bobril';
import * as appBarStyles from './styles';
import * as styles from '../styles';

export interface IData {
    variant: ButtonVariants;
    content: b.IBobrilChildren;
    onClick: () => void;
}

export enum ButtonVariants {
    menuButton,
    menuIconButton,
    gitButton
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [ctx.data.content];
        b.style(
            me,
            appBarStyles.buttonStyle,
            ctx.data.variant === ButtonVariants.menuButton &&
                appBarStyles.menuButton,
            ctx.data.variant === ButtonVariants.gitButton &&
                appBarStyles.gitButton,
            ctx.data.variant === ButtonVariants.menuIconButton &&
                appBarStyles.menuIconButton
        );
    },

    onClick(ctx: IContext): boolean {
        if (ctx.data.onClick) {
            ctx.data.onClick();
            return true;
        }
        return false;
    }
});

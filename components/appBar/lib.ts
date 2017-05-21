import * as b from 'bobril';
import * as styles from './styles';
import * as m from 'bobril-m';
import * as AppButton from './button';

export const Button = AppButton;

interface IData {
    buttons: b.IBobrilChildren[];
    rightButtons?: b.IBobrilChildren[];
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createDerivedComponent<IData>(m.Paper, {
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            d.buttons && b.styledDiv(
                d.buttons.map((button) => {
                    return b.styledDiv(
                        button,
                        styles.button,
                    );
                }),
                styles.buttonsContainer
            ),
            d.rightButtons && b.styledDiv(
                d.rightButtons.map((button) => {
                    return b.styledDiv(
                        button,
                        styles.rightButton,
                    );
                }),
                styles.rightButtonsContainer
            )
        ];

        b.style(
            me,
            styles.appBar,
            {background: m.primary2Color()}
        );
    }
});
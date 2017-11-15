import * as b from 'bobril';
import * as appBarStyles from './styles';
import * as styles from '../styles';
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
                    d.leftChildren &&
                        b.styledDiv(
                            d.leftChildren.map(button => {
                                return b.styledDiv(button, {
                                    display: 'inline-block'
                                });
                            }),
                            appBarStyles.leftContainer
                        ),
                    d.rightChildren &&
                        b.styledDiv(
                            d.rightChildren.map(button => {
                                return b.styledDiv(button, {
                                    display: 'inline-block'
                                });
                            }),
                            appBarStyles.rightContainer
                        )
                ],
                { maxWidth: '1200px', margin: 'auto',width: '1200px'}
            )
        ];

        b.style(me, appBarStyles.appBarStyle);
    }
});

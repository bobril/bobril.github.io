import * as b from 'bobril';
import * as styles from './styles';
import { appBarHeight } from '../appBar/lib';
import * as Image from '../image/lib';
import * as MenuButton from './button';
import * as Assets from '../../assets/assets';
import * as colors from '../colors';
import * as Divider from './divider';

export const Button = MenuButton;

export interface IData {
    children: b.IBobrilChildren[];
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            getTopMenuEmpty(),
            b.styledDiv(
                Image.create({
                    asset: Assets.bobrilLogoGrey,
                    height: 113,
                    width: 130,
                    style: {
                        opacity: 0.75
                    }
                }),
                styles.imgStyle
            ),
            Divider.create(),
            b.styledDiv(
                ctx.data.children.map((button, index) => {
                    return b.styledDiv(button, {
                        background: styles.foregroundColor,
                        paddingTop: index !== 0 ? 14 : 0,
                        paddingBottom: `${
                            index + 1 === ctx.data.children.length ? 72 : 14
                        }px`,
                        width: styles.width
                    });
                })
            )
        ];
        b.style(me, styles.menuStyle);
    }
});

function getTopMenuEmpty(): b.IBobrilChildren {
    return b.styledDiv([], {
        height: appBarHeight,
        width: styles.width,
        background: colors.color04
    });
}

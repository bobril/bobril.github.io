import * as b from 'bobril';
import * as menuStyles from './styles';
import { appBarHeight } from '../appBar/appBarHeight';
import * as Image from '../image/lib';
import * as MenuButton from './button';
import * as Assets from '../../assets/assets';
import * as colors from '../colors';
import * as Divider from './divider';

export const Button = MenuButton;

export interface IData {
    childern: b.IBobrilChildren[];
}

export interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv([], {
                height: 60,
                width: 240,
                background: colors.color04
            }),
            b.styledDiv(
                Image.create({
                    asset: Assets.bobrilLogoGrey,
                    height: 113,
                    width: 130,
                    
                }),
                menuStyles.imgStyle
            ),
            Divider.create(),
            b.styledDiv(
                ctx.data.childern.map((button, index) => {
                    return b.styledDiv(button, {
                        background: menuStyles.foregroundColor,
                        height: `${index + 1 === ctx.data.childern.length
                            ? 75
                            : 34}px`,
                        width: menuStyles.width
                    });
                })
            )
        ];
        b.style(me, menuStyles.menuStyle);
    }
});

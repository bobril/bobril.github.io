import * as b from 'bobril';
import * as styles from '../../components/styles';
import * as AppButton from '../../components/appBar/button';
import * as Colors from '../../components/colors';
import * as Image from '../../components/image/lib';
import * as assets from '../../assets/assets';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

let headerStyle = styles.createBobrilStylefromObjects(styles.headertext01, { color: Colors.color04 });

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            Image.create({
                asset: assets.bobrilLogoWhiteIntro,
                width: 300,
                height: 284,
                style: {
                    margin: 'auto'
                }
            }),

            b.styledDiv(['BOBRIL'], headerStyle),

        ];

        b.style(
            me,
            {
                //height: '200px',
                background: Colors.color02,
            }
        );
    }
});
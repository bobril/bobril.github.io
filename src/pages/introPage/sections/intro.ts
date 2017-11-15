import * as b from 'bobril';
import * as styles from '../../../components/styles';
import * as AppButton from '../../../components/appBar/button';
import * as Colors from '../../../components/colors';
import * as Image from '../../../components/image/lib';
import * as assets from '../../../assets/assets';
import * as Button from '../../../components/button/button';
import { ButtonVariants } from '../../../components/button/buttons';

import * as BobrilLogoSection from './bobrilLogo';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

let bobrilStyle = { color: Colors.color04, position: 'absolute', bottom: '20vh', left: '25vw' };
let isComponentStyle = { color: Colors.color04, textAlign: 'center' };

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            BobrilLogoSection.create({
                onGetStartedClick: () => {}
            }),

            b.styledDiv(['BOBRIL'], bobrilStyle, styles.headertext01),

            b.styledDiv(
                [
                    'is a component-oriented framework for creating web applications inspired by' +
                        ' ReactJs (Virtual DOM, components with state) and Mithril (small size, ,more commplete framework)'
                ],
                isComponentStyle,
                styles.headertext02
            ),

            Button.create({
                content: b.styledDiv(['GET STARTED']),
                hover: false,
                onClick: () => alert('ahojda pratele'),
                variant: ButtonVariants.white
            })
        ];

        b.style(me, {
            background: Colors.color02,
            position: 'relative',
        });
    }
});

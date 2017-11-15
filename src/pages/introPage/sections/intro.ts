import * as b from 'bobril';
import * as styles from '../../../components/styles';
import * as Colors from '../../../components/colors';
import * as Button from '../../../components/button/button';
import { ButtonVariants } from '../../../components/button/buttons'; 

import * as BobrilLogoSection from './bobrilLogo';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

let isComponentStyle = { color: Colors.color04};

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            BobrilLogoSection.create({
                onGetStartedClick: () => {}
            }),

            b.styledDiv(['BOBRIL'], {color: Colors.color04}, styles.headertext01),

            b.styledDiv(
                [
                    'is a component-oriented framework for creating web applications inspired by' +
                        ' ReactJs (Virtual DOM, components with state) and Mithril (small size, ,more commplete framework)'
                ],
                isComponentStyle,
                styles.headertext02
            ),

            // Button.create({
            //     content: 'GET STARTED',
            //     hover: false,
            //     onClick: () => alert('ahojda pratele'),
            //     variant: ButtonVariants.white
            // })
        ];

        b.style(me, {
            position: 'relative',
            height: 'calc(100vh - 60px)'
        });
    }
});

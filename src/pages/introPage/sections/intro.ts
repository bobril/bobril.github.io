import * as b from 'bobril';
import * as styles from '../../../components/styles';
import * as Colors from '../../../components/colors';
import * as Button from '../../../components/button/lib';

import * as router from '../../../pages/router';

import * as BobrilLogoSection from './bobrilLogo';

interface IData {}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            BobrilLogoSection.create({
                onGetStartedClick: () => {}
            }),

            b.styledDiv(
                ['BOBRIL'],
                styles.introPageBobrilText
            ),

            b.styledDiv(
                [
                    'is a component-oriented framework for creating web applications inspired by' +
                        ' ReactJs (Virtual DOM, components with state) and Mithril (small size, ,more commplete framework)'
                ],
                styles.introPageIsAComponentText
            ),

            Button.create({
                content: b.styledDiv(['GET STARTED'], {paddingLeft: '42px', paddingRight: '42px'}),
                hover: false,
                onClick: () => b.runTransition(b.createRedirectPush(router.documentation)), // misto doc dat get started
                variant: Button.ButtonVariants.white,
            }),

            Button.create({
                content: b.styledDiv(['DOWNLOAD'], {paddingLeft: '42px', paddingRight: '42px'}),
                hover: false,
                onClick: () => b.runTransition(b.createRedirectPush(router.documentation)), // misto doc dat download 
                variant: Button.ButtonVariants.black,
            })
        ];

        b.style(me, {
            position: 'relative',
            height: 'calc(100vh - 60px)'
        });
    }
});

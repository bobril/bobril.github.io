import * as b from 'bobril';
import * as styles from '../styles';
import * as Colors from '../../../components/colors';
import * as Button from '../../../components/button/lib';
import * as Paragraph from '../../../components/paragraph/lib';
import * as Label from '../../../components/label/lib';

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

            Label.create({
                label: 'BOBRIL',
                size: Label.LabelSize.HeaderText01,
                style: styles.introPageBobrilText
            }),

            Label.create({
                label:
                    'is a component-oriented framework for creating web applications inspired by' +
                    ' ReactJs (Virtual DOM, components with state) and Mithril (small size, more complete framework)',
                size: Label.LabelSize.HeaderText02,
                style: styles.introPageIsAComponentText
            }),

            Button.create({
                content: b.styledDiv(['GET STARTED'], {}),
                hover: false,
                onClick: () =>
                    b.runTransition(b.createRedirectPush(router.getStarted)),
                variant: Button.ButtonVariants.white
            }),

            Button.create({
                content: b.styledDiv(['DOWNLOAD'], {}),
                hover: false,
                onClick: () =>
                    b.runTransition(b.createRedirectPush(router.download)),
                variant: Button.ButtonVariants.black
            })
        ];

        b.style(me, {
            position: 'relative',
            top: '35%'
        });
    }
});
